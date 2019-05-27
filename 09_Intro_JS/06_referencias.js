'use strict'
 
//VALORES PRIMITIVOS:
//number, string, boolean

let a = 2
let b = a //asignación de valor, en este momento, si modificamos una variable ya no se mantiene la relación
console.log('Al crear b', a, b) //2, 2
b = b * b
a = a / 2 
console.log('Valor de b', b) //4
console.log('Valor de a', a) //1

b = a 
console.log('Valor de b', b) //1


// VALORES REFERENCIADOS:
//

let p1 = {
    nombre : 'Pepe' ,
    edad : 34
}

let p2 = p1 //asignación de referencia
// Se han creado 2 variables (p1,p2) con 1 referencia (Pepe)
p1.nombre = 'Juan'
// Se han creado 2 variables (p1,p2) con 2 referencias (Pepe, Juan)

console.log(p1) //Juan
console.log(p2) //Juan >>> variable referenciada


/////////////////////////////////////////////////////////////////////////////////////////

let a1 = {
    nombre : 'Raquel' ,
    edad : 34
}
let a2 = {
    nombre : 'Maria' ,
    edad : 34
}

/* function inscribirMal(alumno) {   //Seria la función de inscribir solamente a1, una persona, no es una función que funciona con cualquier nuevo alumno
        a1.curso = 'JS'
    } */
    

function inscribirEnJS(alumno) {
    if (alumno) {
        alumno.curso = 'JS'
    }
    
}

inscribirEnJS(a1) // paso por referencia >>
inscribirEnJS(a2) 
console.log(a1) 
console.log(a2) 


/////////////////////////////////////////////////////////////////////////////////////////

let saldo = 1000
function invertir(x) {
    x = x * 2
    return x
}

saldo = invertir(saldo) //paso por valor
console.log(saldo) //2000