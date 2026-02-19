let p = document.querySelector("p");
function dblclick (){
    p.style.color = "red";
}
p.addEventListener("dblclick", dblclick);
p.removeEventListener("dblclick",dblclick);