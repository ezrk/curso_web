// 4 formas de ejecutar una función - Patrones de invocación
//Cambian el significado del this

function algo() {
    console.log(this)
}

//1. como función
algo() //this es process(Node) o window(Browser)

//2.  como método
const o = {nombre: 'Pepe', edad: 23}
o.algo = algo

o.algo()

//3.  como constructora
const nuevo = new algo()

//4. e indirectamente (apply o call)
const otro = {
    tipo: 'perro',
    nombre: 'Rufus'
}

//algo.call()
algo.apply(otro)

console.log('--------------------------------')
persona.saludarArrow = () => {
     console.log(`Hola soy ${this.nombre}`)
}
persona.saludar = function() {
   
}
persona.saludar()
setTimeout( persona.saludar, 2000)