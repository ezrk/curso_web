'use strict'

let x = 34
x = -5
console.log(x >= 0)

if (x >= 0) {
    console.log('positivo')
} else {
    console.log('negativo')
}


//Falsy
w = false
w = undefined
w = null
w = ''
w = NaN

// True
w = true 
w = 23
w = -32
w = 'Pepe'
w = {}
w = []


if (w) // comprueba esto si es boolean o no?
//if (Boolean(w) { //convertir el casting de x es boolean
console.log('Verdadero')
} else {
    console.log('Falso')
}

 let k
k = 34
k = '46'
k = '34 pepes'
k =  true
k =  false
k = undefined
...
console.log(Number(k)) 

let q = 5
q = 0
q = undefined

//if(q != 0) 
if (q) {
    console.log('q tiene valor')
} else {
    console.log('q vale 0')
}

if ( q === 0) { 
    console.log('q es exactamente 0')
}

let a = 4
let b = '4'

(a==b) //true
(a===b) //false

let nota = 0
//if (!nota) {
    if (nota != true) {
    console.log('Has sacado la nota mínima')
}

let b = Boolean(nota)

b = !!nota //obtener el valor booleano de una expresión 

let edad = 16 

function probarEdad (edad) {
    let i = 3 // Sería en el lugar del ultimo else
    let mensajes = [
        'eres menor de edad' ,
        'eres joven' ,
        'cuidaooo' ,
        'sorry for you'
    ]
    if (edad < 18) {
        i = 0
    } else if (edad < 35) {
        i = 1
    } else if (edad < 50) {
        i = 2 
    }
   /*  } else {
        i = 3 */
    console.log(`Con ${edad}años ` mensajes[i])
}


/******** Separación de responsabilidades *********/


//mejor ponerlo en dos funciones las dos acciones : comprobar edad y devolver el mensaje >>> funciones puras
function codificaEdad (edad) {
    let i = 3 
    if (edad < 18) {
        i = 0
    } else if (edad < 35) {
        i = 1
    } else if (edad < 50) {
        i = 2 
    }
    return i 
}

function ResponderEdad (edad) {
    let mensajes = [
        'eres menor de edad' ,
        'eres joven' ,
        'cuidaooo' ,
        'sorry for you'
    ]
    console.log(`Con ${edad} años`, mensajes[codificaEdad(edad)])
}


let e = 53
ResponderEdad(e)





