'use strict'
//variable en el ámbito global (scope)

var  antes =2 //antes se usaba var
let a = 2

function prueba () { //se llama función
    //variable de ámbito local a la función
    var int = 3
    let i = 6
    let b = 4

    if (true) { //se llama bloque de código
        var z = 4 //corresponde en la función que estamos independientemente de que esté en un bloque
        
        //variable de ámbito local al bloque if, más impreciso
        ///gracias a let se puede crear bloque de codigo
        let w = 7 //más concreto, más inteligente, se muestra dentro del bloque
        console.log ('Es verdad')
        console.log ('Desde el if', a)
        console.log ('Desde el if', b)
        console.log ('Desde el if', w)
    }

    console.log ('Desde la función', a) //mala práctica variable es global
    console.log ('Desde la función', b) // variable es local 
    //console.log ('Desde la función', w) // Error
    console.log ('Desde la función', z) // Error

}
// c = 3 daría error debido añ use strict

prueba()

console.log ('Desde el programa', a)
console.log ('Desde el programa', b)



///////////////////////////////////////////////////////////////////////////////////////////

function ejemplo () {
    let coche = { //datos organizados
        v : 160,
        a : 4,
        modelo : 'RAV'
        marca : 'Toyota', 
        usuarios : ['Pepe','Elena','Rosa'] //Array es un listado de items
    }
    aDatos = [2, 4, 6, 7, 37] // los corchetes [] delimitan los arrays
    console.log (coche)
    console.log (coche, marca)
}

function sample () {
    //console.log(v) //error no está definida la variable dentro de la función
}

sample ()

////// si usamos variables globales fuera de la función lo llamamos "acoplar el código" ////////