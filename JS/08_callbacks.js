'use strict'

function calcular(a, b, operacion, callback) {
    let msj = `El resultado de una ${operacion} con ${a} y ${b} es `
    return msj + callback(a, b)
}

//calcular(4,6,'suma', function(x,y) {return x + y} )

function producto (a,b) {return a*b}

console.log(calcular(4,6,'suma', (x,y) => return x + y ))
console.log(calcular(4,6,'resta', function(x,y) {return x - y} ))

console.log(calcular(4,6,'producto', producto))