// Traitement du lightbox des images

document.addEventListener("DOMContentLoaded", function() {

    const image_de_album_photos = document.querySelectorAll(".image-de-album-photos");
    const image_du_lightbox_de_l_album_photos = document.getElementById("image-du-lightbox-de-l-album-photos");
    const lightbox_de_l_album_photos = document.getElementById("lightbox-de-l-album-photos");
    const modal = new bootstrap.Modal(lightbox_de_l_album_photos);

    const bouton_suivant = document.querySelector(".bouton-suivant");
    const bouton_precedent = document.querySelector(".bouton-precedent");

    let currentIndex = 0;

    image_de_album_photos.forEach((img, index) => {
        img.addEventListener("click", function() {

            if (document.activeElement) {
                document.activeElement.blur();
            }

            currentIndex = index;
            image_du_lightbox_de_l_album_photos.src = this.src;
            modal.show();
        });
    });

    if (bouton_suivant) {
        bouton_suivant.addEventListener("click", function() {
            currentIndex = (currentIndex + 1) % image_de_album_photos.length;
            image_du_lightbox_de_l_album_photos.src = image_de_album_photos[currentIndex].src;
        });
    }

    if (bouton_precedent) {
        bouton_precedent.addEventListener("click", function() {
            currentIndex = (currentIndex - 1 + image_de_album_photos.length) % image_de_album_photos.length;
            image_du_lightbox_de_l_album_photos.src = image_de_album_photos[currentIndex].src;
        });
    }

    lightbox_de_l_album_photos.addEventListener("hide.bs.modal", function () {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    });

});