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

