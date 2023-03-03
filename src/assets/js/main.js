const btnMenuMobile = document.getElementById("menuBtn");
const navbar = document.getElementById("navbarList");
//iconos del apertura y cierre del botón menu
const iconMenuOpen = document.getElementById("iconMenuOpen");
const iconMenuClose = document.getElementById("iconMenuClose");

//función para agregar una clase a un elemento
function addClass(disparador, objetivo , clase) {
  disparador.addEventListener("click",function () {
    objetivo.classList.toggle("opacity-100");
    objetivo.classList.toggle("pointer-events-auto");
  });
}
addClass(btnMenuMobile, navbar, "grid");
addClass(btnMenuMobile, );