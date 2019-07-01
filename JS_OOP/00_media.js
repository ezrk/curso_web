'use strict'

/**
 * @description: funcion que calcula la media de n numeros independientes
 * @param {...[]number} aDatos
 * @returns {number}
 */
//rest(1,4,6,9,12)

function media(...aDatos) {
    let r = 0
    console.log(aDatos)
    return r
}

media(2, 4, 7, 2, 4, 4)
media([2, 4, 7, 2, 4, 4, 7, 4, 3])

//rest: convierte en array


function mediaArray(aDatos = []) {
    let r = 0
    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        r += item
    }
    return r / aDatos.length
}


funcion mediaTotal(...aDatos) { //rest operator
    let r = 0
    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        if( Array.isArray(item)) {
            r += mediaTotal(item)
        } else {
            r += item
        }
    }
    return r / aDatos.length
}

console.log(mediaArray([2, 4, 7, 2, 4, 4]))
console.log(mediaTotal([2,4], 7, 2, 4, [7, 2, 4, 4], 2, 4, 4))