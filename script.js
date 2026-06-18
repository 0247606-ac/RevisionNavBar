let botonContacto = document.getElementById("btnContacto");
let parrafoContacto = document.getElementById("contacto");

let mostrando = false;

botonContacto.onclick = function ()
{
    if (mostrando == false)
    {
        parrafoContacto.innerHTML = '<span class="contact-line"><span><i class="bi bi-envelope-fill"></i><a href="mailto:anacristina.rdzc@gmail.com">anacristina.rdzc@gmail.com</a></span><span><i class="bi bi-telephone-fill"></i><a href="tel:+527229809151">722 980 9151</a></span></span>';
        botonContacto.innerHTML = '<i class="bi bi-x-lg me-1"></i> Ocultar contacto';
        mostrando = true;
    }
    else
    {
        parrafoContacto.innerHTML = "";
        botonContacto.innerHTML = '<i class="bi bi-envelope me-1"></i> Mostrar contacto';
        mostrando = false;
    }
};

let cajas = document.querySelectorAll(".reveal");

function revisarCajas()
{
    for (let i = 0; i < cajas.length; i++)
    {
        let posicion = cajas[i].getBoundingClientRect();
        if (posicion.top < window.innerHeight - 80)
        {
            cajas[i].classList.add("is-visible");
        }
    }
}

window.addEventListener("scroll", revisarCajas);
window.addEventListener("load", revisarCajas);

let enlaces = document.querySelectorAll(".navbar .nav-link");

function marcarActivo()
{
    for (let i = 0; i < enlaces.length; i++)
    {
        let destino = enlaces[i].getAttribute("href");
        let seccion = document.querySelector(destino);

        if (seccion)
        {
            let pos = seccion.getBoundingClientRect();
            if (pos.top <= 150 && pos.bottom >= 150)
            {
                for (let j = 0; j < enlaces.length; j++)
                {
                    enlaces[j].classList.remove("active");
                }
                enlaces[i].classList.add("active");
            }
        }
    }
}

window.addEventListener("scroll", marcarActivo);
window.addEventListener("resize", marcarActivo);
window.addEventListener("resize", revisarCajas);

let barra = document.querySelector(".navbar");

for (let i = 0; i < enlaces.length; i++)
{
    enlaces[i].onclick = function (evento)
    {
        let destino = enlaces[i].getAttribute("href");
        let seccion = document.querySelector(destino);

        if (seccion)
        {
            evento.preventDefault();

            for (let j = 0; j < enlaces.length; j++)
            {
                enlaces[j].classList.remove("active");
            }

            enlaces[i].classList.add("active");

            let altoBarra = barra.offsetHeight;
            let posicion = seccion.getBoundingClientRect().top + window.pageYOffset - altoBarra - 20;

            window.scrollTo({ top: posicion, behavior: "smooth" });

            let menu = document.getElementById("navbarCV");

            if (menu.classList.contains("show"))
            {
                menu.classList.remove("show");
            }
        }
    };
}



