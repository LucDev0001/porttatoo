window.onload = function() {
    var loader = document.querySelector('.loader');

    // Remove a tela de carregamento após um certo tempo (5 segundos neste exemplo)
    setTimeout(function() {
        loader.style.display = 'none';
        document.querySelector('.main-content').style.display = 'block';
    }, 5000);
};
