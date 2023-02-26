import { getPkmn } from "./class/funciones.js";


const btnBusqueda = document.querySelector("#btn-busqueda");
const btnBusqueda2 = document.querySelector("#btn-busqueda2");
const inputNum = document.querySelector("#input-num");
const inputNum2 = document.querySelector("#input-num2");
const shinyBtn = document.querySelector('.fa-star');
const randomBtn = document.querySelector('.fa-shuffle');


btnBusqueda.addEventListener("click",()=>{
    let num = parseInt(inputNum.value);

    if (num < 1 || num > 1008 || !(inputNum.value)){
        const img = document.querySelector(".imagen-dex > img");
        img.src="img/sukamon1.png"
    } else {
        getPkmn(num)
        .then(pkmn => {
            const img = document.querySelector(".imagen-dex > img");
            img.src=pkmn.sprites.front_default;
            
            inputNum.style.display = "none"
            inputNum2.style.display = "flex"
            inputNum2.value=mayusPrimera(pkmn.species.name);  
        })
    }
})

btnBusqueda2.addEventListener("click",()=>{
    let num = parseInt(inputNum.value);

    if (num < 1 || num > 1008 || !(inputNum.value)){
        const img = document.querySelector(".imagen-dex > img");
        img.src="img/sukamon1.png"
    } else {
        getPkmn(num)
        .then(pkmn => {
            const img = document.querySelector(".imagen-dex > img");
            img.src=pkmn.sprites.other["official-artwork"].front_default;
            
            inputNum.style.display = "none"
            inputNum2.style.display = "flex"
            inputNum2.value=mayusPrimera(pkmn.species.name);  
        })
    }
})

shinyBtn.addEventListener("click",()=>{
    let num = parseInt(inputNum.value);

    if (num < 1 || num > 1008 || !(inputNum.value)){
        const img = document.querySelector(".imagen-dex > img");
        img.src="img/sukamon1.png"
    } else {
        getPkmn(num)
        .then(pkmn => {
            const img = document.querySelector(".imagen-dex > img");

            if (pkmn.sprites.front_shiny){
                img.src=pkmn.sprites.front_shiny;
            } else {
                img.src="img/sukamon1.png";
            }
            
            inputNum.style.display = "none"
            inputNum2.style.display = "flex"
            inputNum2.value=mayusPrimera(pkmn.species.name);  
        })
    }
})

randomBtn.addEventListener("click",()=>{
    let num = Math.floor((Math.random() *1008)+1);
    inputNum.value = num;

    getPkmn(num)
    .then(pkmn => {
            const img = document.querySelector(".imagen-dex > img");

            if (pkmn.sprites.other.dream_world.front_default){
                img.src=pkmn.sprites.other.dream_world.front_default;
            } else {
                img.src=pkmn.sprites.other["official-artwork"].front_default;
            }
            
            inputNum.style.display = "none"
            inputNum2.style.display = "flex"
            inputNum2.value=mayusPrimera(pkmn.species.name);  
        })
    }
)




inputNum2.addEventListener("click",()=>{
    const inputNum = document.querySelector("#input-num");
    inputNum.style.display = "flex"
    inputNum2.style.display = "none"
})



function mayusPrimera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
