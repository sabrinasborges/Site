$(document).ready(function () {

    let nav_offset_top = $('.header_area').height() + 450;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();
    $('#servicoPalhaco').hide();
    $('#servicoAfrica').fadeIn('slow');
    $('#tituloHome').hide();
    $('#tituloHome').fadeIn(3000);
   

    $('.navbar-nav').on('click', 'li', function () {
        $('.navbar-nav li.active').removeClass('active');
        $(this).addClass('active')
    });

    $('#projetoMocambique').click(function (){
        $('#servicoPalhaco').hide();
        $('#servicoAfrica').fadeIn('slow');
    });

    $('#projetoPalhacoterapia').click(function(){
        $('#servicoAfrica').hide();
        $('#servicoPalhaco').fadeIn('slow');
    });

});

function abrirProjeto(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function agendarConsulta(){
    window.open('https://wa.me/5511910227455');
}
