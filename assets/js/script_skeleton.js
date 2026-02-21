// Traitement des skeletons

window.addEventListener("load", function () {

    setTimeout(() => {

        // Explotetris
        document.getElementById("skeleton-explotetris")?.remove();
        document.getElementById("contenu-explotetris")?.classList.remove("d-none");

        // Suggestions
        document.getElementById("skeleton-suggestions")?.remove();
        document.getElementById("contenu-suggestions")?.classList.remove("d-none");

    }, 2000); // durée du skeleton

});