//Select all <li> elements and print their text using a loop.

let lis = document.querySelectorAll("li");
lis.forEach(function(val){
    console.log(val.textContent);
});
