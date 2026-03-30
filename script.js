const menu = document.querySelector("#menu-icon");
const ul = document.querySelector("ul");
menu.addEventListener("click", () => {
    ul.classList.toggle("open");
})