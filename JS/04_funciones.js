/* function calcularSC(x, y ,...rest) { //resto de los argumentos se guardan en rest (se le puede dar el nombre que queramos no es un parámetro reservado)
    console.log(arguments)
    return (x*x) + (y*y)
} */
/* 
calcularSC(2,4) //20

let a = 2
let b = 4
calcularSC(a, b) //20

let x = 2
let y = 4
//console.log(calcularSC(x, y)) //20

//console.log(calcularSC('pepe', 'juan')) //NaN
console.log(calcularSC(4, 6, 8, 4, 3)) // 52 */

/**
 * 
 * @param  {array} aDatos
 * @returns {number}
 */

function calcularSC(...aDatos) {
    let r = 0
    let aCuadrados = []
    console.log(aDatos)
    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        let x = item * item
        aCuadrados.push(x)
        r += x
    }
    return {sumaTotal: r, aCuadrados: aCuadrados}
}
console.log(calcularSC(1, 5, 7))

let sumaTotal
let aCuadrados 
/* let aResultados = calcularSC(1, 5, 7)
sumaTotal = aResultados[0] */

 //let [sumaTotal, aCuadrados] = calcularSC(1, 5, 7, 8)
 let {sumaTotal, aCuadrados} = calcularSC(1, 5, 7, 8)

console.log(sumaTotal)
console.log(aCuadrados)