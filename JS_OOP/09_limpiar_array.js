/**
 * @description: eliminar de un array los nombres que empiecen por una letra determinada
 * @param {string} : letra
 * @param {array} : aNombres
 * @returns {array} 
 */

 function limpiarArray(letra = '', aNombres = []) {
    let r = []
    for (let i = 0; i < aNombres.length; i++) {
        const item = aNombres[i];
        if ( item[0].toLowerCase() === letra.toLocaleLowerCase() ) {
            aNombres.splice(i, 1)
            i--
        }
    }
    return r
 }
 console.log(limpiarArray)



 let l= 'r'
 let aUsuarios = ['Rosa', 'Raquel', 'Elena', 'María' ]
 limpiarArray(l, aUsuarios)
 console.log(aUsuarios)



 //Parámetros y elementales

 function algo(h) {
     h = h*h
     return h
 }

 let z = 4
 algo(z)
 console.log(z)

 //Parámetros y referencias

 function cuadrados(a) {
     for (let i = 0; i < a.length; i++) {
         const item = a[i];
         item = a[i] * a[i]
     }
     return a // [1, 4, 9]
 }

 let x = [1, 2, 3]
 cuadrados(x)
 console(x)



