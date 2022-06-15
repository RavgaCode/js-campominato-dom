const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", startGame);
// Funzione inizio gioco
function startGame() {
  // Dichiaro le variabili per recuperare le informazioni di difficoltà scelta
  const diffilculty = document.getElementById("difficulty").value;
  let numberOfSquares = 0;
  const grid = document.querySelector("#grid");
  // Resetto la griglia
  grid.className = "";
  grid.innerHTML = "";
  // Stabilisco l'ampiezza della griglia in base alla difficoltà scelta
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

  let squares = [];
  // Riempio la griglia con div di classe square e li pusho dentro un array
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
    let randomNumber = Math.floor(Math.random() * numberOfSquares);

    if (!bombArray.includes(randomNumber)) {
      bombArray.push(randomNumber);
      squares[randomNumber].classList.add("bomb");
    }
  }

  // Imposto la stampa del punteggio
  let result = document.getElementById("score-display");
  let score = 0;
  result.innerText = score;
  const userMessage = document.getElementById("user-message");
  let bombSquares = document.querySelectorAll("bomb");
  // Imposto il funzionamento di cambiare lo sfondo alle caselle cliccate, e verifico se questa è una bomba o se il gioco possa continuare.
  for (let i = 0; i < squares.length; i++) {
    const squareToClick = squares[i];
    const bombSquares = document.querySelectorAll(".bomb");
    squareToClick.addEventListener("click", function () {
      // Verifico la condizione di sconfitta e lo stop del gioco
      if (squareToClick.classList.contains("bomb")) {
        userMessage.innerHTML = `BOOOM! Hai perso!! Il tuo punteggio è ${score}`;
        // Inserisco il blocco ad ulteriori click sulla griglia a gioco concluso
        grid.style.pointerEvents = "none";
        // Evidenzio tutte le bombe a gioco finito
        for (let b = 0; b < bombSquares.length; b++) {
          bombSquares[b].classList.add("explosion");
        }
        return;
      } else {
        // Cambio lo sfondo alle caselle giuste cliccate, ed impedisco che possano essere cliccate di nuovo ed aumento lo score stampando in pagina
        this.classList.add("checked");
        this.style.pointerEvents = "none";
        score++;
        result.innerText = score;
      }
      // Imposto la condizione di vittoria
      if (score === squares.length - bombArray.length) {
        userMessage.innerHTML = "HAI VINTO!";
        return;
      }
    });
  }
}
