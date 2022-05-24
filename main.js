const toggle = document.getElementById('toggle')
let light = true;

toggle.addEventListener('click',function(){
    if (!light) {
        localStorage.setItem('theme','light')
        document.documentElement.style.setProperty("--main-color1","#ffffff")
        document.documentElement.style.setProperty("--main-color2","#fafafa")
        document.documentElement.style.setProperty("--number-color","#000000")
        light = true;
    } else {
        localStorage.setItem('theme','dark')
        light = false;
        document.documentElement.style.setProperty("--main-color1","#191c21")
        document.documentElement.style.setProperty("--main-color2","#252932")
        document.documentElement.style.setProperty("--number-color","#fffffd")
    }
})

window.onload = function () {
    let localStorageTheme = localStorage.getItem('theme')
    if (localStorageTheme ==='dark') {
        document.documentElement.style.setProperty("--main-color1","#191c21")
        document.documentElement.style.setProperty("--main-color2","#252932")
        document.documentElement.style.setProperty("--number-color","#fffffd")
        toggle.checked = true;
        light = false;
    }
}

let allKeyResult = document.querySelector(".calc-all-keydown")
const mainResult = document.querySelector(".calc-main-result")
const allKey = document.querySelectorAll(".show-in-result")

function showResult (event) {
    let x = event.target.innerHTML;
    if (allKeyResult.innerHTML == 0) {
        allKeyResult.innerHTML = x;
    } else {
        allKeyResult.innerHTML += x;
    }
}

allKey.forEach(function(item){
    item.addEventListener("click",showResult)
})

let pOrM = true;
document.querySelector(".p-or-m").addEventListener("click",function(){
    if (allKeyResult.innerHTML.slice(0,1)==="-") {
        allKeyResult.innerHTML=allKeyResult.innerHTML.slice(1);
        pOrM=true;
    } else {
      allKeyResult.innerHTML="-"+allKeyResult.innerHTML;
        pOrM=false;
    }
})

document.querySelector(".clear").addEventListener("click",function(){
    allKeyResult.innerHTML=0;
    mainResult.innerHTML=0;
})

document.querySelector(".equals").addEventListener("click",function () {
    const myResult = allKeyResult.innerHTML;
    mainResult.innerHTML=eval(myResult);
})

const test = "-999";
console.log();
