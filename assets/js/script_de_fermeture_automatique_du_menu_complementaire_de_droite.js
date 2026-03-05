document.addEventListener("DOMContentLoaded", function () {

    const offcanvasElement = document.getElementById('menu-complementaire-de-droite');
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

    function checkWidth() {
        if (window.innerWidth >= 768) { // breakpoint md
            bsOffcanvas.hide();
        }
    }

    window.addEventListener('resize', checkWidth);

});