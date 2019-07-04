let x = {} //new Object()
let a = {} //new Array()
let c = 'Pepe'
c.toUpperCase() //implicitamente new string(c)
let n = 41
n.toFixed(2) // implicitamente new Number(n)
function algo() {} //new Function()
const e = new Error('msg')

//Otros objetos
const d = new Date()
const r = new RegExp
const r1 = / /

//Objetos no instanciables
Math.random
Math.PI
//JSON.stringify()
//JSON.parse()

const fecha = new Date()
const america = new Date(1492, 6, 4)
console.log(fecha.valueOf())
console.log(america.valueOf())
console.log(zz)
console.log(zx.valueOf())


//Mostrar fechas
console.log(fecha)
console.log(fecha.toString())
console.log(fecha.toUTCString())
console.log(fecha.toJSON())
console.log(fecha.toLocaleString())
console.log(fecha.toDateString())

//operaciones con las fechas

//get | getters

//set | setters
console.log(fecha.getTime())
fecha.getMonth

