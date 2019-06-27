/**Asincronía 
 * 
 * En otros lengajes es multihilo - multithread
 * Dándose concurrencia real
 * 
 * En js hay un sólo hilo que gestiona el bucle de eventos
*/
/* 
setTimeout( () => {
    console.log('Pasaron 2 segundos')
}, 2000)

console.log('Fin') */


setTimeout( () => {
    console.log('Mensaje 1')
}, 2000)

console.log('Mensaje 2')
console.log('Mensaje 3')
setTimeout( () => {
    console.log('Mensaje 4')
}, 2000)
console.log('Mensaje 5')


