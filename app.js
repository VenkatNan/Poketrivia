const url = "https://pokeapi.co/api/v2/pokemon/"

let name= "";

const pokePic = document.getElementById("pic");
const play = document.getElementById("play");
const info = document.getElementById("rules");
const awnser = document.getElementById("btn");
const input = document.getElementById("text");

info.addEventListener('click', function(){
    console.log("clicked info")
})

play.addEventListener('click', function(){
    getPoke(Math.floor(Math.random()*898))
})


function getPoke(num){
    fetch(url + num)
        .then( res => res.json())
        .then( parseJson => displayPoke(parseJson))
}

function displayPoke(poke){
    pokePic.src = poke.sprites.front_default;
    let name = poke.species.name
    console.log(name);

    awnser.addEventListener('click', function checkAnswer(e) {
        console.log(input.value);
        if(input.value.toLowerCase() === name){
            console.log("correct");
            e.preventDefault();
        }
        else{
            console.log("wrong");
            e.preventDefault();
        }
        
    })
}




