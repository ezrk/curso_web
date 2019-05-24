let a = 4
console.log(a)
a = 5
console.log(a)
a = 6
console.log(a)
a = 555
console.log(a)

// ES6
const b = 6 //valores que no cambian (ej. nombre)
console.log(b)

// los constantes tienen el mismo ámbito que los let

// constante let datos = [12, 42, 33]  >> constante es para PROTEGER el OBJETO PARA QUE NO SE DESTRUYA ACCIDENTALMENTE, el tipo, se puede añadir igual elementos, sigue siendo dinámico
// si lo dejamos let, se puede cambiar el objeto: let datos = [12, 42, 33] let datos = 166

let datos = [12, 42, 33] 
let persona = {nombre : 'Pepe', edad : 22}

datos[datos.length] = 43
datos.push(63)
datos.unshift(1)

persona.altura = 178

console.log(datos[0]) //empieza a contar desde 0, entonces da 12
console.log(persona.nombre)
console.log(datos) //muestra 1, 12, 42, 33, 43, 63
console.log(persona) // nombre: 'Pepe', edad: 22, altura: 178

// los arrays y los objetos son dinámicos