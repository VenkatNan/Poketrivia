const url = "https://pokeapi.co/api/v2/pokemon/"
const lvl1 = [1,2,3,4,5,6,7,8,9]
const lvl2 = [10,11,12,13,14,15,16,17,18,19]
const lvl3 = [101,102,103,104,105,106,107,108,109]

const pokePic = document.getElementById("pic")
const start = document.getElementById("play")

start.addEventListener("click",getPoke())

function setLvl(){
   getPoke(lvl1)
}

function getPoke(){
    fetch(url + (Math.floor(Math.random()*898)))
        .then( res => res.json())
        .then( parseJson => displayPoke(parseJson))
}
    
function displayPoke(poke){
    console.log(poke.species.name);
    console.log(pokePic.innerHTML);
    pokePic.src = poke.sprites.front_default
}
     

