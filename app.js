const url = "https://pokeapi.co/api/v2/pokemon/"

let pokeName= "";
let points = 0;

const body = document.querySelector("body")
const pokePic = document.getElementById("pic");
const awnser = document.getElementById("submitBtn");
const input = document.getElementById("text");
const pointCount = document.getElementById('points')
const play = document.getElementById("play")


play.addEventListener('click', function(){
    getPoke(Math.floor(Math.random()*898))
    if (play.style.display === "none") {
        play.style.display = "block";
      } else {
        play.style.display = "none";
      }
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
    if(input.value.toLowerCase() === pokeName){
        points ++
        pointCount.innerText = points
        checkWin()
    }
    else{
     window.alert("Wrong Answer, Try again")
    }
    e.preventDefault()
})

function checkWin() {
    if(points === 10){
        body.classList.add("game-over")
    }
    else{ 
        input.value = "";
        getPoke(Math.floor(Math.random()*898))
    }
    
}



