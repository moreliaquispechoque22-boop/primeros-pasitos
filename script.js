// MENÚ PARA CELULARES
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN
document.querySelectorAll(".navbar a").forEach(enlace => {
    enlace.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// GALERÍA DE IMÁGENES
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(imagen => {

    imagen.addEventListener("click", () => {

        lightboxImage.src = imagen.src;
        lightboxImage.alt = imagen.alt;

        lightbox.classList.add("active");

    });

});

/* CARRUSEL AUTOMÁTICO */
let diapositivas =
document.querySelectorAll(".diapositiva");

let indice = 0;

function cambiarImagen() {
    diapositivas[indice].classList.remove("activa");
    indice++;
    if (indice >= diapositivas.length) {
        indice = 0;
    }
    diapositivas[indice].classList.add("activa");
}

if (diapositivas.length >1) {
    setInterval(cambiarImagen, 3000);
} 

// CERRAR IMAGEN AMPLIADA
closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (evento) => {

    if (evento.target === lightbox) {
        lightbox.classList.remove("active");
    }

});

// CERRAR CON ESCAPE
document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {
        lightbox.classList.remove("active");
    }

});

// FORMULARIO DE CONTACTO
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
        formMessage.textContent = "Completa todos los campos.";
        return;
    }

    formMessage.textContent =
        "¡Gracias " + nombre + "! Tu mensaje fue validado correctamente.";

    contactForm.reset();

});

// AÑO AUTOMÁTICO
document.getElementById("year").textContent =
    new Date().getFullYear();