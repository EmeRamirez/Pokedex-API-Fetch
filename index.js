import { getPkmn } from "./class/funciones.js";


const btnBusqueda = document.querySelector("#btn-busqueda");
const btnBusqueda2 = document.querySelector("#btn-busqueda2");


btnBusqueda.addEventListener("click",()=>{
    const inputNum = document.querySelector("#input-num");
    let num = parseInt(inputNum.value);

    if (num < 1 || num > 1008){
        const img = document.querySelector(".imagen-dex > img");
        img.src="img/sukamon1.png"
    } else {
        getPkmn(num)
        .then(pkmn => {
            const img = document.querySelector(".imagen-dex > img");
            img.src=pkmn.sprites.front_default;
            // img.src=pkmn.sprites.other["official-artwork"].front_default
        })
    }
})

btnBusqueda2.addEventListener("click",()=>{
    const inputNum = document.querySelector("#input-num");
    let num = parseInt(inputNum.value);

    if (num < 1 || num > 1008){
        const img = document.querySelector(".imagen-dex > img");
        img.src="img/sukamon1.png"
    } else {
        getPkmn(num)
        .then(pkmn => {
            const img = document.querySelector(".imagen-dex > img");
            // img.src=pkmn.sprites.front_default;
            img.src=pkmn.sprites.other["official-artwork"].front_default
        })
    }
})



