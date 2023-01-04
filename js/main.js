



// Overlay menu & Abrir filtros - Integrar con la funcion de arriba
$(document).ready(function () {
    $('.menu-overlay').click(function() {
     $('.menu-overlay, .wrapper').toggleClass('on');
    });
    $('.main__button').click(function() {
     $('.sidebar--hidden, .main__button').toggleClass('on');
    });
    $('.close__button').click(function() {
        $('.sidebar--hidden, .main__button').removeClass('on');
       });
    $('.btn__filters').click(function() {
        $('.filter-content').toggleClass('on');
       });
  });
  

    

