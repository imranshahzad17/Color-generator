let changeColor = document.getElementById("change-code");
let btn = document.getElementById("btn");
let color = document.querySelector(".color")

function change(){
    let randomnum = Math.floor(Math.random( )*16777215)
    let randomcode = "#" + randomnum.toString(16);
    color.style.backgroundColor = randomcode;
    changeColor.innerHTML = randomcode   
}
btn.addEventListener("click",change)