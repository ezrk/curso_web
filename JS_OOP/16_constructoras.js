// Objeto JSON o literal
const saludo = 'Hola amigo'

console.log(saludo)

const p1 = {
    nombre: 'Louie',
    edad: 23,
    altura: 178,
    pais: 'España',
}

/* new Object()
new Array()
new Date() */

function Persona(nombre, edad, altura, pais) {
    this.cerebro = true
    this.nombre = nombre
    this.edad = edad
    this.altura = altura
    this.pais = pais
    this.profesion = ''
    this.saludar = function(otro = 'amig@') {
        let msg = `Hola ${otro} soy ${this.nombre}`
        console.log(msg)
    }

    this.serContratado = function(puesto) {
        this.profesion = puesto
    }
}

Object.freeze() //no se usa mucho, congelar el objeto

const p2 = new Persona('pepe', 12, 180, 'Bulgaria')
const p3 = new Persona('pepa', 27, 179, 'Italia')
delete p2.cerebro
p2.ia = true

console.log(p1)
console.log(p2)
console.log(p3)

p2.profesion ='medico'
p3.profesion ='CEO'

p2.saludar(p3.nombre)
p3.saludar(p2.nombre)

const x = [] //new Array()
console.log(x)
Array.prototype.