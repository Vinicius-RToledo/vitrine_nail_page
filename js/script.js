
$(document).ready(function () {
    // Inicializa o sidenav
    $(".button-collapse").sideNav();

    // Fecha o sidenav ao clicar em um item dentro dele
    $('.side-nav li a').click(function () {
        // Fecha o sidenav
        $(".button-collapse").sideNav('hide');
    });
});


$(document).ready(function () {
    // Inicializa o carrossel
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

    // Faz o carrossel rodar automaticamente a cada 5 segundos
    setInterval(function () {
        $('.carousel').carousel('next');
    }, 5000); // 5000 milissegundos = 5 segundos
});

$('.carousel.carousel-slider').carousel({ fullWidth: true });


//Suavizar transição de link da navbar e centralizar elemento na tela
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os links da navbar
    const navbarLinks = document.querySelectorAll('nav ul li a');

    // Para cada link, adicione um evento de clique
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Previne o comportamento padrão do clique
            e.preventDefault();

            // Pega o id do elemento alvo a partir do href (sem o #)
            const targetId = this.getAttribute('href').substring(1);

            // Seleciona o elemento alvo
            const targetElement = document.getElementById(targetId);

            // Rola suavemente e centraliza o conteúdo
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });
});

