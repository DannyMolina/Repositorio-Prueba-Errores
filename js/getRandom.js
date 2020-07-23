function getRandom() {
    return Math.floor(Math.random() * 100);
}
var randomNumber = getRandom();
var x = 1;

while(randomNumber != 50){
    randomNumber = getRandom();
    x ++;
}
console.log("El numero 50 se encontro despue de" + x + "veces");
