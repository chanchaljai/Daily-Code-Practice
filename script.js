let inp = document.querySelector("input");
inp.addEventListener("input", function(evt){
    if(evt.data !== null){
        console.log(evt.data);
    }
});
  