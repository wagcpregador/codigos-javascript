// render-layout.js

(function() {
    // 1. O Template Base (Matriz)
    const templateHtmlDescr = `
    <style>
a {
  display: inline-block; /* Faz o link ter o tamanho exato do botão */
  text-decoration: none;
}
    .botao-padrao-1 {
        background-color: #04AA6D;
        color: white;
        padding: 21px 32px;
        border: none;
        text-align: center;
        text-decoration: none;
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
        text-decoration: none;
    }
    .botao-padrao-1:hover { 
        background: #038d5a;
        transform: scale(1.05);
        text-decoration: none;
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
    <img border="0" style="width: 400px;" src="$IMG_VERSAO_IMPRESSA$">
<br><br>
O livro comum impresso, também conhecido como livro de capa mole, é um tipo de publicação encadernada com cola e uma capa feita de papel flexível. Esses livros são populares devido à sua acessibilidade e portabilidade. São mais leves e fáceis de manusear.<br><br>
Os livros comuns impressos oferecem várias vantagens práticas:<br><br>
<b>Portabilidade:</b> São fáceis de transportar e podem ser lidos em qualquer lugar, sem a necessidade de dispositivos eletrônicos ou baterias.<br><br>
<b>Facilidade de uso:</b> Não requerem configurações ou atualizações. Basta abrir e começar a ler.<br><br>
<b>Conforto visual:</b> Muitos leitores acham mais confortável ler em papel do que em telas, pois não causa cansaço visual.<br><br>
<b>Interação física:</b> A possibilidade de marcar páginas, fazer anotações nas margens e sentir o peso e a textura do livro são aspectos valorizados por muitos leitores.<br><br>
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
    <iframe align="center" style="height: 75vh; width:90%" src="$URL_AMOSTRA_IMPRESSO$" frameborder="0"></iframe>
    <br><br><br>
    <a href="$URL_COMPRAR_IMPRESSO$" target="_blank">
      <button class="botao-padrao-1">Comprar Livro Impresso<span class="subtexto">Clique para Ver o Preço</span></button>
    </a>
    <br><br>

<a href="javascript:void(0)" onclick="openM('https://letraalfa.magehub.com.br/como-usar-o-livro-impresso')"><b>Saiba mais como usar o Livro Impresso. Clique aqui.</b></a>

<br><br>

    <hr size="2" width="70%" border="0" color="#AAAAAA">
    <br><br>
    <font size="5"><b>Versão E-book</b></font><br><br>
Adquira o E-book para ler em Computador, Celular ou Tablet:<br><br>
    <img border="0" style="width: 400px;" src="$IMG_VERSAO_EBOOK$"><br><br>
Os e-books oferecem várias vantagens práticas:<br><br>
<b>Acesso imediato:</b> Você pode comprar e baixar um e-book instantaneamente, sem precisar ir a uma loja física.<br><br>
<b>Portabilidade:</b> Um único dispositivo pode armazenar centenas de livros, permitindo que você leve uma biblioteca inteira com você.<br><br>
<b>Personalização:</b> É possível ajustar o tamanho da fonte, o brilho da tela e até o fundo, tornando a leitura mais confortável.<br><br>
<b>Busca rápida:</b> Você pode procurar palavras ou frases específicas dentro do texto, facilitando a localização de informações.<br><br>
<b>Sustentabilidade:</b> E-books não requerem papel, o que os torna uma opção mais ecológica.<br><br>
    <b>Características</b><br><br>
Formato: PDF<br>
    Páginas: $NUM_PAG_EBOOK$<br>
    Tamanho: $TAMANHO_ARQ_EBOOK$<br><br>
<font size="5"><b>Leia um trecho:</b></font><br><br>
    <iframe align="center" allow="autoplay" style="height: 75vh; width:90%; border: 2px solid gray;" src="$URL_AMOSTRA_EBOOK$" frameborder="0"></iframe><br><br><br>
    <a href="$URL_COMPRAR_EBOOK$">
      <button class="botao-padrao-1">Comprar Ebook<span class="subtexto">Clique para Ver o Preço</span></button>
    </a>
    <br><br>

<a href="javascript:void(0)" onclick="openM('https://letraalfa.magehub.com.br/como-usar-o-ebook')"><b>Saiba mais como usar o Ebook. Clique aqui.</b></a>

<br><br>

    <hr size="2" width="70%" border="0" color="#AAAAAA">
    <br><br>
    <font size="5"><b>Versão Audiobook em Mp3</b></font><br><br>
Arquivo de áudio com narração em <a href="javascript:void(0)" onclick="openM('https://letraalfa.magehub.com.br/voz-tecno-natural')"><b>Voz Tecno-natural (Clique aqui)</b></a> de alta qualidade para ouvir em qualquer reprodutor digital - Computador, Celular ou Mp3 Player:<br><br>
    <img border="0" style="width: 400px;" src="$IMG_VERSAO_AUDIOBOOK$"><br><br>
O audiobook é uma versão em áudio de um livro, narrada por uma pessoa ou por atores. Ele permite que os leitores “ouçam” o conteúdo do livro em vez de lê-lo. Os audiobooks podem ser acessados em dispositivos como smartphones, tablets e computadores, e são especialmente práticos para quem deseja consumir literatura enquanto realiza outras atividades, como dirigir, fazer exercícios ou tarefas domésticas.<br><br>
Os audiobooks oferecem várias vantagens práticas:<br><br>
<b>Multitarefa:</b> Você pode ouvir um audiobook enquanto realiza outras atividades, como dirigir, fazer exercícios ou tarefas domésticas.<br><br>
<b>Portabilidade:</b> Assim como os e-books, os audiobooks podem ser armazenados em dispositivos móveis, permitindo que você leve uma biblioteca inteira com você sem ocupar espaço físico.<br><br>
<b>Acessibilidade:</b> São uma excelente opção para pessoas com deficiência visual ou dificuldades de leitura, proporcionando inclusão social.<br><br>
<b>Flexibilidade:</b> Você pode ajustar a velocidade da narração e pausar ou retomar a leitura a qualquer momento.<br><br>
<b>Economia de tempo:</b> Permitem que você aproveite momentos ociosos, como deslocamentos, para consumir conteúdo literário ou educativo.<br><br>
    <b>Características</b><br><br>
Formato: Mp3<br>
    Tempo: $TEMPO_AUDIOBOOK$<br>
    Tamanho: $TAMANHO_ARQ_AUDIOBOOK$<br>
Tipo de Narrador: Tecno-natural<br><br>
<font size="5"><b>Ouça um trecho:</b></font><br><br>
    <iframe src="https://wagcpregador.github.io/player-audiobook/audio-player.html?audio=$URL_AUDIO_AMOSTRA$&capa=$URL_CAPA$" width="100%" height="100px" frameborder="0" scrolling="no"></iframe>
    <br><br><br>
    <a href="$URL_COMPRAR_AUDIOBOOK$">
      <button class="botao-padrao-1">Comprar Audiobook<span class="subtexto">Clique para Ver o Preço</span></button>
    </a>
<br><br>

<a href="javascript:void(0)" onclick="openM('https://letraalfa.magehub.com.br/como-usar-o-audiobook')"><b>Saiba mais como usar o Audiobook. Clique aqui.</b></a>

<br><br>
<hr size="2" width="70%" border="0" color="#AAAAAA">
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
