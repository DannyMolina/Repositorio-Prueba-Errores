//METODOS STRING

// Array.concat() CONCATENAR 

var array1 = "Danny";
var array2 = "Leonardo";
var array3 = array1.concat(array2);

console.log(array3);

// charAt() 
var nombre = "Danny Molina";
console.log(nombre.charAt(0));
console.log(nombre.charAt(1));
console.log(nombre.charAt(2));
console.log(nombre.charAt(3));
console.log(nombre.charAt(4));
console.log(nombre.charAt(nombre.length-1));
console.log(nombre.charAt(nombre.length-2));
console.log(nombre.charAt(nombre.length-3));
console.log(nombre.charAt(nombre.length-4));
console.log(nombre.charAt(nombre.length-5));
console.log(nombre.charAt(nombre.length-6));

// repeat()

console.log(nombre.repeat(6));

//replace()

var nombreNuevo = nombre.replace("Danny Molina", "Danny Forero");

console.log(nombreNuevo);

//startsWith()

console.log(nombreNuevo.startsWith("ny", 3 ))

//substring()

console.log(nombre.substring(2,8));

//toUpperCase()

var nombreMayus = nombre.toUpperCase();
console.log(nombreMayus);

//slice()

var frase = "Anita lava la tina";
console.log(frase.slice(3,8));

//search()

var parrafo = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur necessitatibus minus, ipsam nostrum et quam explicabo atque! Eius dolores doloremque voluptas, recusandae tempore modi nostrum mollitia neque earum ad sunt!Aspernatur suscipit eaque consequatur eligendi, doloribus ipsa. Aperiam illum accusantium quasi accusamus eligendi perferendis culpa adipisci sunt facere ipsam odit repellat doloribus doloremque sequi explicabo sint quod praesentium, eveniet reprehenderit!";
alert(parrafo.search("elit"));


// FIN METODOS STRING

//METODOS ARRAYS

//splice()
var nombres = ["Danny","Leonardo","Maximiliano","Camila","Maria"];
var res = nombres.splice(2, 0, "Elsa", "Juan");
console.log(nombres);

//unshift()
nombres.unshift("Tobby", "Nahara");

//toString()
nombres.toString();

//push() Agrega un elemento al final del array
var a = nombres.push("eddy");

//pop() Elimina el ultimo elemento del array (Elimina el anterior)
var b = nombres.pop();

// //from()

// var letras = nombres.from("ABCDEFGHIJ");