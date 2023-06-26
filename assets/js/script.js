// Função para mostrar o botão de rolar a tela para cima
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if(scroll >= 480){
        $(".up").addClass("scrollUp");
    }else{
        $(".up").removeClass("scrollUp");
    }
});

// Função para rolar a tela para cima
$(".up").click(function () {
    $(window).scrollTop(0);
});

// Função para simular escrita de texto
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

// Modo noturno
$(".btn-cb").click(function(){
    $("html").toggleClass("dark-mode");  
});

// Modo noturno mobile
$(".mobile-toggle-theme").click(function(){
    let icon = $(this).find("svg");
    if($("html").hasClass("dark-mode")){
        icon.attr("data-icon", "sun");
    }else{
        icon.attr("data-icon", "moon");
    }
    $("html").toggleClass("dark-mode");  
});

// Atualizar menu ativo no evento de scroll da tela
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    $(".nav-item").removeClass("active");
    if(scroll < 430){
       $("#nav-about").addClass("active");
    }else if(scroll >= 430 && scroll < 800){
        $("#nav-education").addClass("active");
    }else if(scroll >= 800 && scroll <= 1050){
        $("#nav-experience").addClass("active");
    }else if(scroll > 1050){
        $("#nav-skills").addClass("active")
    }
});