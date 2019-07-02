let ob = {} //new Object()
let aDatos = [2, 8, 9, 76] //elementos referenciados, tienen posición //new Array()

//2 características que distinguen:
// 1. se hacen arrays con cualquier tipo de datos 
// 2. 


aDatos[aDatos.length] = [87, 90] //crea una array en la posición [5]
aDatos[aDatos.length] = [56] //crea una array en la posición [6]
aDatos[0] = 9 //sustituye 2 por 9
aDatos[100] = 9 //crea 100 posiciones, los huecos quedan undefined
console.log(aDatos[78]) //undefined


for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    if(!item) { //si no tiene valor item
        aDatos[i] = parseInt(Math.random() * 100)
    }
}

console.log(String(aDatos))