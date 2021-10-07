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

//modo noturno
$('.btn-cb').click(function(){
    $('html').toggleClass('dark-mode');  
});

//modo noturno mobile
$('.mobile-toggle-theme').click(function(){
    let icon = $(this).find('svg');
    if($('html').hasClass('dark-mode')){
        icon.attr('data-icon', 'sun');
    }else{
        icon.attr('data-icon', 'moon');
    }
    $('html').toggleClass('dark-mode');  
});

//sidebar
$('.nav-item').click(function(){
    $('.nav-item').not($(this)).removeClass( "active" );
    $(this).addClass('active');
    if( $(window).width() <= 992){
        setTimeout(function(){
            $('.navbar-toggler').trigger('click');
        }, 300);   
    }
});