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

/* let k
k = 34
k = '46'
k = '34 pepes'
k =  true
k =  false
k = undefined
...
console.log(Number(k)) */

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
