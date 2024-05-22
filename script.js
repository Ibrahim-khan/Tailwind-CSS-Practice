const dark = document.getElementById('#darkMode');
const mainElement = document.getElementById('#main');
darkMode.addEventListener("click", ()=>{
    mainElement.classList.toggle("dark");
})