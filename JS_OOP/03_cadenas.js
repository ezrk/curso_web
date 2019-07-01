'use strict'

let version = 'ES6'

let cadena = "Esto no es buena práctica" //
let otraCadena = 'Es mejor usar comillas simples'
let nuevaCadena = `Nuevo en ${version}` // Template String: permiten interpolar variables las comillas francesas

//string, number y boolean surgen de forma automatica cuando tratamos el elemento de forma de objeto
//wrapper object - forma automática y temporal se crea un objeto envolviendo al string
//metodos de manipulacion de strings
//funciones no mutables

console.log(cadena, otraCadena, nuevaCadena)
console.log(cadena.toLocaleUpperCase())

console.log(cadena.length)
console.log(cadena[0])

for (let i = 0; i < cadena.length; i++) {
    const item = cadena[i];
    console.log(item)
}



// rest se puede tener funciones que no sepan el numero de parametros
/* function rest(...agrupador) {
    console.log(agrupador[5])
} */



let x = cadena.split(' ')
console.log(x)

//Expresiones regulares//
/* cadena.slice(inicio, final) //el ppio y el final del string
cadena.substring(inicio, final) 
cadena.substr(inicio, desplazamiento) //ppio y la longitud

cadena.match()
cadena.search()
cadena.replace()

cadena.indexOf(clave) //recibe una expresion o cadena, devuelve en que posicion de mi cadena aparece
cadena.lastIndexOf(clave) //contanto desde atrás

cadena.charAt(posicion) //pasamos una posicion y y te devuelve el caracter que hay en esta posicion = cadena[position]
cadena.charCodeAt //devuelve el codigo del caracter en unicode

String.fromCharCode(num) */

let numero = 23.97875546343
console.log(numero)
console.log(numero.toString())
console.log(numero.toString(2))
console.log(numero.toPrecision(4))
console.log(numero.toExponential())