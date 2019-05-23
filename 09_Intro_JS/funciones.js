'use strict' //declarar uso estricto de JS, ponerlo al principio

/*let saludo= 'hola' //asi se usa!
 let hola //declarar una variable >> undefined
saludo = 'Hola' //inicializar la variable >> mala práctica */

/* let user = 'Pepe' //declarar string e inicializar >> asi se define
curso = 'Javascript' // inicializar la variable >> mala práctica */


//
/*  let saludo = 'hola'
console.log(saludo)  */
//


//Agrupar un bloque de código, darle un nombre, y podemos llamarlo. Estos bloques se llaman funciones
//cuerpo-declaración de una función
//los nombres suelen ser verbos
//una función es un trozo del codigo, teniendolo entre llaves y llamarlo cuando la necesitemos

//Declaración de la función:
function saludar() {   
    let saludo = 'hola'
    console.log(saludo)
}   

//Invocación o ejecución de una función:
saludar()
//

//
/* function saludar() {   
    let saludo = 'hola'
    console.log(saludo)
}  
 */


//las variables se usan en el ámbito de las funciones que se usan


//Podemos poner nombres entre los parentesis>
function saludar(nombre) {   
    let saludo = 'hola ' //dejar un espacio
    console.log(saludo + nombre)
}   

saludar('Pepe')

// >> resultado por la consola: hola Pepe



/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


// CONCEPTO DE SEPARACIÓN DE LAS RESPONSABILIDADES O INTERESES - SEPARATION OF CONTENTS (Edsger W. Dijkstra)

/** Documentación de la función
 * 
 * @param {number}
 * @param {number}
 * @returns {number}
 * 
*/

//mi intento no tenerlo en cuenta
/* function suma () {
    let a = 2
    let b = 3
    console.log (a+b)
}
return suma () */

//Función pura (sólo usa proprias variables, es independiente de las variables exteriores)
function suma (a, b) {
   /*  let c = a + b
    return c */
    return a + b
}

console.log(suma(2,2))

/** Documentación/Descripción técnica de la función
 * 
 * Función Mostrar:
 * Recibe un texto y lo saca por pantalla
 * @description
 * @param (string | number)
 * @return (void) //nada, vacío
*/

function mostrar (cadena = '') {
    console.log(cadena)
}

mostrar (suma(2,2))


/* 0/4 = 0
4/0 =infinito
0/0=indeterminado */

//Indeterminaciones matemáticas se representan en JS > NaN
// Si hay un valor indeterminado, un numero por ejemplo, JS entiende 0
mostrar (suma(2,2)) //4
mostrar (suma(2)) //2
mostrar (suma(undefined,2)) //2
mostrar (suma()) //0
mostrar()

/////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////

function division (a, b) {
     return a / b
 }
 mostrar (division(6,2))


 function restar (a, b) {
    return a - b
}
mostrar (restar(6,2))

/////////////////////

function probar (){
    let x = 2
    let y = 3
    mostrar (suma(x,y)) 
    mostrar (suma(x)) 
    mostrar (suma(undefined,y)) 
    mostrar (suma())
    mostrar()
    mostrar (division(x,y))
    mostrar (restar(x,y))
}

/// Variable global es la que no reside en ninguna función, si está dentro de la función es local.
probar()

/////////////////////////////////////////////////////////////////////////////////////////////////////////


/** Documentación/Descripción técnica de la función>> Función sumar
 * @description
 * @param (number)
 * @param (number)
 * @returns (number)
*/


function suma (a:number, b:number) :string {
    let c = a + b
    return 'El resultado es ' + c
}

suma()

