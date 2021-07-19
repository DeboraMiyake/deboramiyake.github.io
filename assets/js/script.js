//Função para mostrar o botão de rolar a tela para cima
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if(scroll >= 480){
        $('.up').addClass('scrollUp');
    }else{
        $('.up').removeClass('scrollUp');
    }
});

//Função para rolar a tela para cima
$('.up').click(function () {
    $(window).scrollTop(0);
});

//Função para simular escrita de texto
let i = 0;

let textAnimation = $("#textAnimation");
let html = $("#textAnimation").html(); //innerHTML

textAnimation.attr("data", html);
let txt = textAnimation.attr("data");
let speed = 170;

function typeWriter() {
    if (i <= txt.length) {
        $("#textAnimation").html(txt.slice(0, i+1));
        i++;
        setTimeout(typeWriter, speed);
    }       
}

typeWriter();
