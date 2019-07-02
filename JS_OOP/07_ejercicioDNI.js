
 /** function formatearDNI
 * @description dar formato al numero del DNI
 * @param {number | string} dni
 * @returns {number}
 */

function formatearDNI(dni) {
    const aLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    return aLetras[formatoDNI(dni)%23]

 }


/** function letraDNI
 * @description calcular letra DNI
 * @param {number | string} dni
 * @returns {string}
 */

 function letraDNI(dni) {
     const aLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
     return aLetras[dni%23]
 }
 console.log(letraDNI('50821728'))
 console.log(letraDNI('50 82 17 28'))
 console.log(letraDNI('50.821.728'))
 console.log(letraDNI('00921728'))
