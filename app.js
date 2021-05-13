const url = "https://pokeapi.co/api/v2/pokemon/"

let pokeName= "";
let points = 8;

const pokePic = document.getElementById("pic");
const play = document.getElementById("play");
const info = document.getElementById("rules");
const awnser = document.getElementById("btn");
const input = document.getElementById("text");
const pointCount = document.getElementById('points')

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
    pokeName = poke.species.name
    console.log(pokeName);
}

awnser.addEventListener('click', function checkAnswer(e) {
    console.log(input.value);
    if(input.value.toLowerCase() === pokeName){
        console.log("correct");
        points ++
        pointCount.innerText = points
        checkWin()
    }
    else{
        console.log(`${pokeName} is not ${input.value}`);
        console.log("wrong");
    }
    e.preventDefault()
})

function checkWin() {
    if(points = 10){
        console.log(win);
    }

    else{
        input.value = "";
        getPoke(Math.floor(Math.random()*898))
    }
    Event.preventDefault()
}



