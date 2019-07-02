/** function listaReyes
 * @description crear una lista de reyes, comprobar si el nombre está en la lista
 * @param {string} names
 * @returns {boolean}
 */

 function listaReyes(names){
     const n = ['Fernando','Isabel','Juana','Carlos','Felipe','Luis','Jose',"Amadeo",'Alfonso','Juan Carlos']
    for (let i = 0; i < n.length; i++) {
        const item = n[i];
        if(names.toUpperCase() == item.toUpperCase()) {
            return [true, i]
        }   
    }
    return [false, -1]
 }


 function mostrarIsRey(names) {
    let [listaReyes, position] = mostrarIsRey(names)

    let mensajes = [
        `El nombre ${names.toUpperCase() }, no ha sido usado por ningún rey de España`,
        `El nombre ${names.toUpperCase() }, sí ha sido usado por algún rey de España 
        y es el número ${position++} de la lista`
    ]
 console.log(mensajes[+listaReyes(names)])
 }

 //mostrarIsRey('fernando')
 //mostrarIsRey('Federico')

console.log(n.indexOf('Fernando'))
console.log(n.indexOf('Amadeo'))
