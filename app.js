const url = "https://pokeapi.co/api/v2/pokemon/"


    fetch(url + (3))
        .then( res => res.json())
        .then( parseJson => displayPoke(parseJson))

function displayPoke(poke){
    console.log(poke.species.name);
    console.log(poke.sprites.front_default);
}
     