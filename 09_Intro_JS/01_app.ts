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

 //En TypeScript el tipado puede ser fuerte y estático
{
 let b: number //tipo number, sin valor
b = 3
/* b = 'pepe' //error de tipos, no se puede cambiar el tipo.  */
let precio = 45.60
let user = 'Pepe'
let producto = 'gafas'
/* precio = producto //error de tipos */
}
// los tipos asignados son tipos fuertes en TypeScript