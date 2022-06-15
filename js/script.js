const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", startGame);

function startGame() {
  const diffilculty = document.getElementById("difficulty").value;
  let numberOfSquares;
  const grid = document.querySelector("#grid");
  grid.className = "";
  grid.innerHTML = "";
  if (diffilculty === "easy") {
    numberOfSquares = 100;
    grid.classList.add("easy");
  } else if (diffilculty === "medium") {
    numberOfSquares = 81;
    grid.classList.add("medium");
  } else if (diffilculty === "hard") {
    numberOfSquares = 49;
    grid.classList.add("hard");
  }

  const squares = [];

  for (let i = 1; i <= numberOfSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = i;
    squares.push(square);
    grid.appendChild(square);
  }
  //   Creo un ciclo while che pushi dei numeri unici dentro l'array bomb, fino al massimo di bombNumber, inoltre aggiungo la classe "bomb" ai div square corrispondenti ai numeri pushati dentro l'array bomb
  const bombNumber = 16;
  let bombArray = [];

  while (bombArray.length < bombNumber) {
    let randomNumber = Math.floor(Math.random() * numberOfSquares + 1);

    if (!bombArray.includes(randomNumber)) {
      bombArray.push(randomNumber);
      squares[randomNumber].classList.add("bomb");
    }
  }
  let result = document.getElementById("result");
  // Imposto il funzionamento di cambiare lo sfondo alle caselle cliccate, e verifico se questa è una bomba
  for (let i = 0; i < squares.length; i++) {
    const squareToClick = squares[i];
    let score = 0;
    squareToClick.addEventListener("click", function () {
      if (squareToClick.classList.contains("bomb")) {
        alert("BOOOM! Hai perso");
        return;
      } else {
        squareToClick.classList.add("checked");
        score++;
        result.innerText = score;
      }
    });
  }
}

/*
// Chiedo all'utente il grado di difficoltà tramite prompt
const gameDifficulty = parseInt(
  prompt("Scegli un grado di difficoltà da 1 a 3")
);
// Determino il range di numeri in base alla difficoltà scelta e dichiaro il numero di bombe presenti
const minRange = 1;
let maxRange;

if (gameDifficulty === 1) {
  maxRange = 100;
} else if (gameDifficulty === 2) {
  maxRange = 81;
} else if (gameDifficulty === 3) {
  maxRange = 49;
}
const bombNumber = 16;

// Invoco la funzione di creazione delle bombe e inserisco il risultato in una variabile
bombGenerator(bombNumber, minRange, maxRange);
let bombArray = bombGenerator(bombNumber, minRange, maxRange);

// Creo un array dove inserire i numeri inseriti dall'utente, se rispettano le condizioni, e interrompo il gioco qualora trovasse un numero bomba. Dichiaro la variabile di continuazione del gioco, dandole come valore iniziale true
let gameContinues = true;
let userArray = [];
const winningScore = maxRange - minRange - bombNumber + 1;

// Imposto un ciclo while per l'inserimento dei numeri seconda le condizioni scelte
while ((gameContinues = true)) {
  // Controllo se la condizione di vittoria è stata raggiunta
  if (userArray.length === winningScore) {
    alert("Congratulazioni!! Hai vinto!!");
    gameContinues = false;
    break;
  }
  // Chiedo all'utente un numero
  let userNumber = parseInt(
    prompt(`Scegli un numero compreso tra ${minRange} e ${maxRange}`)
  );
  // Inserico il numero nell'array dei numeri utente se questo non è presente sia nell'array delle bombe sia in quello utente
  if (bombArray.includes(userNumber)) {
    alert(`BOOOOM!!! Hai Perso!! Il tuo punteggio è: ${userArray.length}`);
    gameContinues = false;
    break;
  } else if (!userArray.includes(userNumber)) {
    userArray.push(userNumber);
    console.log(userArray);
  }
}

// -----------------------
// --------Funzioni-------
// -----------------------

// Imposto una funzione che crei un array di numeri bomba, in base al numero di bombe e range di numeri
const bombGenerator = function (bombNumber, minRange, maxRange) {
  let bombArray = [];
  //   Creo un ciclo while che pushi dei numeri unici dentro l'array bomb, fino al massimo di bombNumber
  while (bombArray.length < bombNumber) {
    let randomNumber =
      Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

    if (!bombArray.includes(randomNumber)) {
      bombArray.push(randomNumber);
    }
  }
  return bombArray;
};
*/
