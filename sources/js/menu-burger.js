const menuBurger = document.getElementById("menu-burger");
const menuBurgerIcon = menuBurger.querySelector("img");
const classList = menuBurger.parentElement.classList;

menuBurger.addEventListener("click", () => {
    const OPENED = "menu-burger_opened";

    if (classList.contains(OPENED)) {
        classList.remove(OPENED);
        menuBurgerIcon.src = "../sources/svg/menu-burger.svg";
    } else {
        classList.add(OPENED);
        menuBurgerIcon.src = "/sources/svg/cross.svg";
    }
});