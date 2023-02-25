export async function getPkmn(num){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`);
    const data = await res.json();
    console.log(data);
    return data;
}