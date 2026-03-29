const menu = document.querySelector("#menu-icon");
menu.addEventListener("click", () => {
    const menuItems = document.querySelector("ul");
    menuItems.classList.toggle("active");
})