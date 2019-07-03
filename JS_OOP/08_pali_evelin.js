/** function isPalindromo
 * @description comprobar si una frase (string) es palíndroma
 * @param {string} cadenaLetras
 * @returns {boolean}
 */

const isPalindromo = (cadenaLetras = '') => {
    let r = false
    const cadenasinEspacios = cadenaLetras.split(' ').join('').toLowerCase()
    const cadenaInversa = cadenasinEspacios.split('').reverse().join('')
    if (cadenasinEspacios === cadenaInversa) {
        r = true
    }
    return r
}

isPaliShort = (cadena = '') => {
    sinEspacios = cadena.split(' ').join('').toLowerCase()
    return sinEspacios === 
        sinEspacios.split('').reverse().join('') ? true : false 
}

module.exports = {}
module.exports.isPalindromo = isPalindromo
module.exports.isPaliShort = isPaliShort









