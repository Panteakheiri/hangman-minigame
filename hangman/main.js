const secretPhrases = ["pantea" ,"maman", "guitar" , "jerry" , "gymnastic" , "programming" , "hamster"];

let randomItem = "" ;
let clicked = [];
let result = "" ;
let mistake = 0 ;

function selectRandomItem() {
     randomItem = secretPhrases[Math.floor(Math.random() * secretPhrases.length)];
     document.getElementById("letters").addEventListener("click" , buttonHandler)
     window.addEventListener("keydown", keyhandler);
     console.log(randomItem)
}

function setUnderScore() {
     let splitedWord = randomItem.split("");
     let mappedWord =splitedWord.map(letter => (clicked.indexOf(letter) >= 0 ? letter : "_") );
     result = mappedWord.join("");
     document.getElementById("clue").innerHTML = `<p> ${result} </p>`
}

function checkIfWon () {
     if (randomItem === result){
     document.getElementById("gameover").querySelector("p").style.display = "block";
     document.getElementById("image").querySelector("img").src = "assets/winner.png";}
}

function updateHangmanpicture() {
     const image = document.getElementById("image").querySelector("img");
     image.src = `assets/hangman${mistake}.png`
}

function checkIfLost() {
     if (mistake === 6) {
     document.getElementById("gameover").querySelector("p").style.display = "block";
     document.getElementById("clue").innerHTML = `<p> Random Word is ${randomItem} </p>`;}
}

function letterHandler(letter) {
     letter = letter.toLowerCase()
     clicked.indexOf(letter) === -1 ? clicked.push(letter) : null ;
     document.getElementById(letter.toUpperCase()).className = "used";
     if (randomItem.indexOf(letter) >= 0) {
          setUnderScore();
          checkIfWon();
     } else if (randomItem.indexOf(letter) === -1){
          mistake++ ;
          checkIfLost();
          updateHangmanpicture();
     }
}


function buttonHandler(event) {
      letterHandler(event.target.id)
}


function keyhandler (event) {
     letterHandler(event.key)
}

selectRandomItem()
setUnderScore()