'use strict'
/* 
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

sample () */

////// si usamos variables globales fuera de la función lo llamamos "acoplar el código" ////////




//colecciones con objetos

// let persona = 'Pepe Pérez, ingeniero, 20 años' //string

//los objetos son colecciones de propiedades (nombre + valor)

let persona = {
    fullNombre :  {
        nombre : 'Pepe',
        apellidos : 'Pérez',
    } ,
    edad : {
        valor : 20 ,
        unidad : ' años',
    } ,
    altura : 178 ,
    formacion : 'Ingeniero',
    aficiones : ['leer', 'música', 'deportes'] , //array/lista/arreglo > subtipo de objeto
    isMujer : false ,
}

console.log (persona)