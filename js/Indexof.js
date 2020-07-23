//ARRAYS

/*
array que contenga 5 arrays en forma matricial
formando una matriz de 5x5, adicional
los elementos que contiene deben ser todos
distintos y en la consola se debe llamar
un elemento de cada array 

opción 1: 1,1.1,"as",[],false
opción 2: palabra en las diagonales
*/

/* 
 var matriz = [['D',1,2,3,4],[0,'A',2,3,4],[0,1,'N',3,4],[0,1,2,'N',4],[0,1,2,3,'Y']]
 var matriz2 = [[1,1.1,'as','[]',false],['casa',true,1.2,5,'@'],[6,false,1.3,'/','carro'],[1.4,true,'$','perro',3],['&',1.6,false,7,'gato']]


 console.log(matriz[0][0],matriz[1][1],matriz[2][2],matriz[3][3],matriz[4][4])
 console.log(matriz[4][4],matriz[3][3],matriz[2][2],matriz[1][1],matriz[0][0])

 console.log(matriz2[3][2],matriz2[2][1],matriz2[1][3],matriz2[2][3],matriz2[4][1])
 console.log(matriz2[4][1],matriz2[2][3],matriz2[1][3],matriz2[2][1],matriz2[3][2])

 */


// FIN ARRAYS

// Condicionales y el método de string indexOf()

var examen1 = 9

if (examen1 >= 6){
    console.log("Has Aprobado");
}
else{
    console.log("Has Reprobado");
}
    


// var one = "es una prueba1";
// var two = "prueba";
// var three = "es otra prueba2";   NO ENTENDI ESTE EJERICIO PROFE :'(  ME ATRASE 


var  cadena = "termino la carrera";
var posicion = cadena.indexOf("no");

if (posicion >= 6)
    console.log("La palabra está en la posición " + posicion);
else
    console.log("No encontré lo que estás buscando");


