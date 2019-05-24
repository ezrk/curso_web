/* consola muestra, voy a ver lo que va dentro del punto, metodo log,  */
console.log('hola amiguis')

//comentario en línea


/* DATOS */

//Tipos primitivos:
20 // tipo number
'Alejandro' // tipo string
true // tipo boolean
undefined //tipo undefined

//Tipos complejos o referenciados:
//tipo objeto {nombre: 'Pepe', edad: 27}

//VARIABLES: poner nombre a los datos

//Los lenguajes pueden ser:
//Tipado fuerte o débil
//Tipado estático o dinámico

//JS en concreto es tipado débil y dinámico.
//Las variables no tienen un tipo definido, se definen en el momento que cobran valor, dinámico significa que el tipo puede cambiar.

/* //En Java o en C# el tipado es fuerte y estático
a: int //tipo int sin valor, sería error
a = 3
a = 'pepe' //error de tipos, no se puede cambiar el tipo. */


let a //a es una variable, donde puedo guardar los datos.
console.log(a)
console.log(typeof a)
// sería tipo undefined

a = 2
console.log(a)
console.log(typeof a)
// sería tipo number

a = 25
console.log(a)
console.log(typeof a)

a = '2'
console.log(a)
console.log(typeof a)
// sería tipo string

a = false
console.log(a)
console.log(typeof a)
// sería tipo boolean


//USO NORMAL DE DATOS Y VARIABLES

let precio = 45.60
let producto = 'gafas'

let precioPrevio = precio
precio = 45.60
console.log(precioPrevio, precio)

//JS deja cambiar el tipo de las variables 

a = {nombre: 'Pepe', edad: 27}
console.log(a)
console.log(typeof a)
// sería tipo object

// {objetos} [listas]

a = [
    {nombre: 'Pepe', edad: 27 }, //nombre seria propriedad
    {nombre: 'Juan', edad: 26 },
    {nombre: 'Elena', edad: 25}
]
console.log(a)
console.log(typeof a)
//Array de objetos


//Array: es una lista indexada de elementos, tienen posición
