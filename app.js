const url = "https://pokeapi.co/api/v2/pokemon/"

let pokeName= "";
let points = 8;

const body = document.querySelector("body")
const pokePic = document.getElementById("pic");
const awnser = document.getElementById("btn");
const input = document.getElementById("text");
const pointCount = document.getElementById('points')


document.getElementById("play").addEventListener('click', function(){
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
    if(points === 10){
        console.log("win");
        window.confirm()
    }
    else{ 
        input.value = "";
        console.log("new poke");
        getPoke(Math.floor(Math.random()*898))
    }
    
}



