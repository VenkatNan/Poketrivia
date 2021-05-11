const url = "https://pokeapi.co/api/v2/pokemon/"
const lvl1 = [1,2,3,4,5,6,7,8,9]
const lvl2 = [10,11,12,13,14,15,16,17,18,19]
const lvl3 = [101,102,103,104,105,106,107,108,109]



function setLvl(){
   getPoke(lvl1)
}

function getPoke(lvl){
    fetch(url + (lvl[Math.floor(Math.random()*lvl.length)]))
        .then( res => res.json())
        .then( parseJson => displayPoke(parseJson))
}
    
function displayPoke(poke){
    console.log(poke.species.name);
    console.log(poke.sprites.front_default);
}
     

