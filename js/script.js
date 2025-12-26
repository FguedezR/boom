// generar número aleatorio del 1 al 3
// cuenta atrás de 5 segundos setTimeout()
// -> vamos a capturar el input en una const userInput
// después de la cuenta atrás compara el número aleatorio y el del usuario.
// si coinciden los números ganas si son diferentes pierdes
// debe salir el número elegido y el número correcto en pantalla
// no se sabrá que número es hasta pasado 5 segundos.

// numero aleatorio
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomNumber(4));

const userInput = document.getElementById("userInput");

function countDown(userInput) {
  if (userInput === getRandomNumber) {
    alert('has ganado');
  } else {
    alert('has perdido');
  }
  setTimeout(() => {
    console.log("Hola, esto funciona");
  }, 5000);
}



/* setTimeout(() => {
  alert("Hola, esto funciona");
}, 5000); */
