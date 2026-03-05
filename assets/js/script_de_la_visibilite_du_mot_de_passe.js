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

// Traitement de la visibilité du mot de passe (Du champs de saisi password1)

const input_one = document.getElementById("password1");
const btn_one = document.getElementById("togglePassword1");
const icon_one = btn_one.querySelector("i");

btn_one.addEventListener("click", () => {
    const show = input_one.type === "password";
    input_one.type = show ? "text" : "password";

    icon_one.classList.toggle("bi-eye");
    icon_one.classList.toggle("bi-eye-slash");
});

// Traitement de la visibilité du mot de passe (Du champs de saisi password2)

const input_two = document.getElementById("password2");
const btn_two = document.getElementById("togglePassword2");
const icon_two = btn_two.querySelector("i");

btn_two.addEventListener("click", () => {
    const show = input_two.type === "password";
    input_two.type = show ? "text" : "password";

    icon_two.classList.toggle("bi-eye");
    icon_two.classList.toggle("bi-eye-slash");
});
