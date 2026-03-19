// render-layout.js

(function() {
    // 1. O Template Base (Matriz)
    const templateHtmlDescr = `
    <style>
    .botao-padrao-1 {
        background-color: #04AA6D;
        color: white;
        padding: 21px 32px;
        border: none;
        text-align: center;
        font-size: 1.3rem;
        font-weight: bold;
        border-radius: 9px;
        cursor: pointer;
        transition: all 0.3s;
        width: 330px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 1.2;
    }
    .subtexto {
        font-size: 0.9rem;
        font-weight: normal;
        margin-top: 4px;
    }
    .botao-padrao-1:hover { 
        background: #038d5a;
        transform: scale(1.05); 
    }
    </style>

    $APRESENTACAO_LIVRO$<br><br>
    <b>Vantagens</b><br><br>
    $VANTAGENS$<br><br>
    <b>Público Alvo:</b><br><br>
    $PUBLICO_ALVO$<br><br>
    <b>Palavras Chaves:</b><br><br>
    $PALAVRAS_CHAVES$<br><br>
    <b>Informações Gerais</b><br><br>
    ISBN: $ISBN$<br><br>
    <hr size="2" width="70%" border="0" color="#AAAAAA">
    <br><br>
    <font size="5"><b>Versão Impressa</b></font><br><br>Receba em casa o livro comum impresso<br><br>
    <img border="0" style="width: 400px;" src="$IMG_VERSAO_IMPRESSA$"><br><br>
    <b>Características</b><br><br>
    Peso: $PESO_IMPRESSO$<br>
    Dimensões: $DIMENSOES_IMPRESSO$<br>
    Nº Páginas: $NUM_PAGINAS_IMPRESSO$<br>
    Capa: $CAPA_ESPEC_IMPRESSO$<br>
    Data da Publicação: $DATA_PUBLI_IMPRESSO$<br>
    Impressão Interna: $IMPRESSAO_INTERNA_IMPRESSO$<br>
    Tamanho das páginas: $TAMANHO_PAGINAS_IMPRESSO$<br>
    Autor(a): $AUTOR_IMPRESSO$<br>
    Faixa Etária Recomendada: $FAIXA_ETARIA$<br><br>
    <font size="5"><b>Leia um trecho:</b></font><br><br>
    <iframe align="center" style="height: 75vh; width:95%" src="$URL_AMOSTRA_IMPRESSO$" frameborder="0"></iframe>
    <br><br>
    <a href="$URL_COMPRAR_IMPRESSO$" target="_blank">
      <button class="botao-padrao-1">Comprar Livro Impresso<span class="subtexto">Clique para Ver o Preço</span></button>
    </a>
    <br><br>
    <hr size="2" width="70%" border="0" color="#AAAAAA">
    <br><br>
    <font size="5"><b>Versão E-book</b></font><br><br>
    <img border="0" style="width: 400px;" src="$IMG_VERSAO_EBOOK$"><br><br>
    <b>Características</b><br><br>
    Páginas: $NUM_PAG_EBOOK$<br>
    Tamanho: $TAMANHO_ARQ_EBOOK$<br><br>
    <iframe align="center" style="height: 75vh; width:90%" src="$URL_AMOSTRA_EBOOK$" frameborder="0"></iframe><br><br>
    <a href="$URL_COMPRAR_EBOOK$" target="_blank">
      <button class="botao-padrao-1">Comprar Ebook<span class="subtexto">Clique para Ver o Preço</span></button>
    </a>
    <br><br>
    <hr size="2" width="70%" border="0" color="#AAAAAA">
    <br><br>
    <font size="5"><b>Versão Audiobook em Mp3</b></font><br><br>
    <img border="0" style="width: 400px;" src="$IMG_VERSAO_AUDIOBOOK$"><br><br>
    <b>Características</b><br><br>
    Tempo: $TEMPO_AUDIOBOOK$<br>
    Tamanho: $TAMANHO_ARQ_AUDIOBOOK$<br><br>
    <iframe src="https://wagcpregador.github.io/player-audiobook/audio-player.html?audio=$URL_AUDIO_AMOSTRA$&capa=$URL_CAPA$" width="100%" height="100px" frameborder="0" scrolling="no"></iframe>
    <br><br>
    <a href="$URL_COMPRAR_AUDIOBOOK$" target="_blank">
      <button class="botao-padrao-1">Comprar Audiobook<span class="subtexto">Clique para Ver o Preço</span></button>
    </a>
    `;

    // 2. Lógica de Processamento
    window.addEventListener('load', function() {
        if (typeof campos !== 'undefined') {
            let htmlFinal = templateHtmlDescr;
            
            campos.forEach(campo => {
                // Substitui todas as ocorrências de $ID$ pelo conteúdo
                const regex = new RegExp('\\$' + campo.id + '\\$', 'g');
                htmlFinal = htmlFinal.replace(regex, campo.content_text);
            });

            // 3. Injeta no local desejado (ajuste o seletor se necessário)
            const target = document.getElementById('descricao-produto-gerada');
            if (target) {
                target.innerHTML = htmlFinal;
            }
        }
    });
})();