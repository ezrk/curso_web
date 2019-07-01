'use strict'

/** function comprobar( )
 * @description: comprobar si la cadena tiene : 
 * sólo mayúsculas
 * sólo minúsculas
 * mayúsculas y minúsculas
 * @param {string} cadena
 * @returns {number}
 */

let a = 2
console.log(a) 

function comprobarCaso(cadena = '') {
    let r = 2
    if (cadena === cadena.toLocaleUpperCase() ) { 
        r = 0
    } else if(cadena === cadena.toLocaleLowerCase() ) {
        r = 1
    } 
    return r
}

function mostrarComprobacionCaso(cadena = '') {
    const msg = ['sólo mayúsculas', 'sólo minúsculas', 'mayúsculas y minúsculas']
    console.log(msg[comprobarCaso(cadena)])
}


module.exports = {}
module.exports.comprobarCaso = comprobarCaso
module.exports.mostrarComprobacionCaso = mostrarComprobacionCaso
 