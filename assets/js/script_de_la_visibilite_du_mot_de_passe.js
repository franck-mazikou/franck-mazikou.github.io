// Traitement de la visibilité du mot de passe (Du champs de saisi password)

const input = document.getElementById("password");
const btn = document.getElementById("togglePassword");
const icon = btn.querySelector("i");

btn.addEventListener("click", () => {
    const show = input.type === "password";
    input.type = show ? "text" : "password";

    icon.classList.toggle("bi-eye");
    icon.classList.toggle("bi-eye-slash");
});
