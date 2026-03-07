document.querySelectorAll(".bouton-de-visibilite-du-mot-de-passe").forEach(btn => {

    const input = document.getElementById(btn.dataset.target);
    const icon = btn.querySelector("i");

    btn.addEventListener("click", () => {

        const show = input.type === "password";
        input.type = show ? "text" : "password";

        icon.classList.toggle("bi-eye");
        icon.classList.toggle("bi-eye-slash");

    });

});