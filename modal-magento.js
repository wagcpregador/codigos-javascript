(function() {
    // 1. Injetar CSS com as animações de zoom e fade
    const style = document.createElement('style');
    style.innerHTML = `
        .m-overlay {
            display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5); z-index: 999999; justify-content: center; align-items: center;
            opacity: 0; transition: opacity 0.4s ease;
        }
        .m-box {
            position: relative; width: 90%; height: 90%; background: #fff; border-radius: 5px;
            overflow: hidden; display: flex; flex-direction: column;
            /* Estado inicial: reduzido e invisível */
            transform: scale(0.6); opacity: 0; 
            transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.4s ease;
        }
        /* Estado Ativo: Zoom e Fade-in */
        .m-overlay.active { display: flex; opacity: 1; }
        .m-overlay.active .m-box { transform: scale(1); opacity: 1; }

        .m-header { height: 40px; background: #f1f1f1; border-bottom: 1px solid #ddd; display: flex; justify-content: flex-end; align-items: center; padding: 0 15px; }
        .m-close { font-size: 30px; border: none; background: none; cursor: pointer; color: #666; line-height: 40px; }
        .m-body { flex: 1; padding: 15px; overflow: hidden; }
        .m-body iframe { width: 100%; height: 100%; border: none; }
    `;
    document.head.appendChild(style);

    // 2. Estrutura do Modal
    const modalHTML = `
        <div id="mOverlay" class="m-overlay">
            <div id="mBox" class="m-box">
                <div class="m-header"><button class="m-close" onclick="closeM()">&times;</button></div>
                <div id="mBody" class="m-body"></div>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // 3. Funções
    window.openM = function(url) {
        const overlay = document.getElementById('mOverlay');
        const body = document.getElementById('mBody');
        body.innerHTML = '<iframe src="' + url + '"></iframe>';
        
        overlay.style.display = 'flex';
        // Delay para o navegador processar o display:flex antes de animar
        setTimeout(() => { overlay.classList.add('active'); }, 10);
    };

    window.closeM = function() {
        const overlay = document.getElementById('mOverlay');
        overlay.classList.remove('active');
        // Espera a animação de fade-out (400ms) antes de remover do display
        setTimeout(() => { 
            overlay.style.display = 'none'; 
            document.getElementById('mBody').innerHTML = ''; 
        }, 400);
    };

    // Fechar ao clicar no fundo
    document.getElementById('mOverlay').addEventListener('click', function(e) {
        if (e.target === this) closeM();
    });

    // Fechar com a tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") closeM();
    });
})();