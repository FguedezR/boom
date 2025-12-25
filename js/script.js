// generar número aleatorio del 1 al 3
// cuenta atrás de 5 segundos setTimeout()
// después de la cuenta atrás compara el número aleatorio y el del usuario.
// si coinciden los números ganas si son diferentes pierdes
// debe salir el número elegido y el número correcto en pantalla
// no se sabrá que número es hasta pasado 5 segundos.

function getRandomNumber(tomi) {
    return Math.floor(Math.random() * tomi)
}
console.log(getRandomNumber(4))



