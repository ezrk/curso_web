'use strict'

let x = 2
let y = 3
let z = x * y

y = '3'
z = x * y //Función de casting: Durante la operación la variable y sería Number, en el lugar de string 

console.log(x, typeof x)  // 2 number
console.log(z, typeof z) //6 number
console.log(y, typeof y) //3 string

/* //Sobrecarga del símbolo +
+3
3+3
'pepe' + 'pepa' */

let w = x + y //no da 8, da '23', porque hemos declarado 'y' como string
console.log(w, typeof w)

/* x = 23
y = '20'
w = w * 1 //2320
let w = x + y //da '2320', la concatenación tiene preferencia sobre la suma
console.log(w, typeof w)
 */



 
/* Lenguaje:
* not !
* or ||   > tecla alt gr + 1
* and &&
*/

//Opcion 1
/* function suma (a,b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return 'No se puede sumar' 
    }   
    let r = a + b
    return 'La suma es ' + r
} */

//Opción 2 //LA MEJOR OPCIÓN
//convertimos las variables en number >>> forzar el casting
function suma (a,b) {
    let r = Number(a) + Number(b)
    return 'La suma es ' + r
}

//Opción 3
//Parse in/ parse float >>> convierte un numero a un numero flotante
function suma (a,b) {
    let r = parseFloat(a) + parseFloat(b) 
    return 'La suma es ' + r
}

//Opción 4
//Aprovechar la sobrecarga
function suma (a,b) {
    let r = +a + +b
    return 'La suma es ' + r
}

//Opción 5
//comprobar si es numero o variables convertibles a número
function suma (a,b) {
    if (isNaN(a)|| isNaN(b)) { //NaN : not a number
        return 'No se puede sumar' 
    }   
    let r = a + b
    return 'La suma es ' + r
}

function suma (a,b) {
    if ( isNaN(a) || isNaN(b) //NaN : not a number
        || typeof a == 'boolean' || typeof b == 'boolean' //== es comparación
        || typeof a == 'object' || Array.isArray(b)
        ) { 
        return 'No se puede sumar' 
    }  
    let r = +a + +b
    return 'La suma es ' + r
}

console.log(suma()) //no se puede sumar
console.log(suma(undefined, undefined)) //no se puede sumar
console.log(suma(5)) //no se puede sumar
console.log(suma(2,2)) //4
console.log(suma(2,0)) //2
console.log(suma(0,2)) //2
console.log(suma(2,'5')) //25
console.log(suma('2','5')) //7
console.log(suma('2','pepe')) //no se puede sumar
console.log(suma('Juan','Pepe')) //no se puede sumar
console.log(suma(2, true)) //casting de true da 1 >> 3
console.log(suma(2, false)) //2
console.log(suma(true, false)) //no se puede sumar
console.log(suma({}, {})) // no se puede sumar
console.log(suma([], [])) //0

