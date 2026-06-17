// ==========================
// BOTÓN DE CONTACTO
// ==========================

const botonContacto =
    document.getElementById("btnContacto");

const contacto =
    document.getElementById("contacto");

let visible = false;

botonContacto.addEventListener("click", () => {

    if (!visible) {

        contacto.innerHTML =
            "📱 WhatsApp: 722 980 9151";

        botonContacto.innerHTML =
            "Ocultar contacto";

        visible = true;

    } else {

        contacto.innerHTML = "";

        botonContacto.innerHTML =
            "Mostrar contacto";

        visible = false;
    }

});


// ==========================
// NAVBAR
// ==========================

const navbarCollapse =
    document.getElementById("navbarCV");

const navLinks =
    document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        // Espera a que termine el scroll
        setTimeout(() => {

            // Solo si está abierta (móvil)
            if (
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    new bootstrap.Collapse(
                        navbarCollapse,
                        {
                            toggle: false
                        }
                    );

                bsCollapse.hide();

            }

        }, 350);

    });

});



