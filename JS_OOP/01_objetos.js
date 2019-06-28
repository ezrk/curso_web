'use strict'

const obj = new Object()
// es lo mismo que: 
const pulga = 123

const garrapata = 124

const animal1 = {
    nombre: 'Rufo',
    edad: 3,
    parasitos: [pulga, garrapata] //variable
}

animal1.peso = 12

const animal2 = { }

const persona1 = {
    nombre: 'Pepe',
    edad: 35,
    mascotas : [animal1, animal2]
}



//const animal2 = ['Piolín', 6, 'caballo', 134]
//const animales = ['Piolín', 'Rufo', 'Peggy']
//const participantes = [persona1, animal1]

console.log(animal1)
console.log(animal1.nombre)
let propiedad = 'raza'
console.log(animal1['raza']) //nunca se usa
console.log(animal1[propiedad])