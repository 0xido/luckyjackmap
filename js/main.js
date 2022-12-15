

/*
 * Function: Hide or Show the sidebar
 */         

function hideshow() {
    const button = document.getElementById("main__button-input");
    const sidebar = document.getElementById("main");

    const isHidden = button.classList.contains('main__button-input--show');

    if (!isHidden) {
        button.classList.add("main__button-input--show");
        sidebar.classList.add("sidebar--show");
    }
    else {
        button.classList.remove("main__button-input--show");
        sidebar.classList.remove("sidebar--show");
    }
}


// Overlay menu & Abrir filtros - Integrar con la funcion de arriba
$(document).ready(function () {
    $('.menu-overlay').click(function() {
     $('.menu-overlay, .wrapper').toggleClass('on');
    });
  });
$(document).ready(function () {
    $('.btn-open-filters').click(function() {
     $('.btn-open-filters, .filter-content').toggleClass('on');
    });
  });

