// generar número aleatorio del 1 al 3
// cuenta atrás de 5 segundos setTimeout()
// -> vamos a capturar el input en una const userInput
// después de la cuenta atrás compara el número aleatorio y el del usuario.
// si coinciden los números ganas si son diferentes pierdes
// debe salir el número elegido y el número correcto en pantalla
// no se sabrá que número es hasta pasado 5 segundos.

const userInput = document.getElementById("userInput");
const countdownDisplay = document.getElementById("countdown");
const resultDisplay = document.getElementById("result");
const restartBtn = document.getElementById("restart");

// numero aleatorio
function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}
// console.log('numero aleatorio:', getRandomNumber())

function startGame() { 
  // comprobación para que el número siempre sea entero
  const userValue = parseInt(userInput.value);

  if ( isNaN(userValue) || userValue < 1 || userValue > 3 ) {
    alert("Introduce un número entre 1 y 3");
    return;
  }

  let timeLeft = 5;
  resultDisplay.innerHTML = "";
  userInput.disabled = true;

  const timer = setInterval(() => {
    countdownDisplay.innerHTML = `La bomba explotará en ${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(timer); // detener contador
      checkResult(userValue); // compara los números
    }

    timeLeft--;
  }, 1000);
}

// comparar resultados
function checkResult(userValue) {
  const bombNumber = getRandomNumber();

  if (userValue === bombNumber) {
    resultDisplay.innerHTML = `<span style="color: green;">👑 ¡HAS GANADO! Salvaste el mundo. El número era ${bombNumber} 👑</span>`;
  } else {
    resultDisplay.innerHTML = `<span style="color: red;">😭 ¡BOOOOM! Has perdido. La bomba era el número ${bombNumber} 😭</span>`;
  }
}

userInput.addEventListener("change", () => {
  startGame();
});

// reiniciamos las constantes del juego
restartBtn.addEventListener("click", () => {
  userInput.value = "";
  userInput.disabled = false;
  countdownDisplay.innerHTML = "";
  resultDisplay.innerHTML = "";
});

/* function countDown() {
  const userValue = Number(userInputElement.value);
  console.log("Calculando valor... Vamos a esperar 5 segundos");

  setTimeout(() => {
    const targetNumber = getRandomNumber(4);
    console.log("Número aleatorio generado:", targetNumber);
    console.log("Tu número era:", userValue);

    if (userValue === targetNumber) {
      alert("has ganado");
    } else {
      alert("has perdido, tu número era:", targetNumber);
    }
  }, 5000);
} */

/* setTimeout(() => {
  alert("Hola, esto funciona");
}, 5000); */
