/** function randomArray
 * @description function devuelve un array de n numeros aleatorios enteros y positivos menores o iguales a 100
 * @params { number } n
 * @returns { array } 
 */

// >implementación

function randomArray(n = 0) {
    const r = []
    for (let i = 0; i < n; i++) {
        r[i] = parseInt(Math.random() * 100)
        }
    return r
}

console.log(String(randomArray(65)))