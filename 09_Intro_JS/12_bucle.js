<<<<<<< HEAD
//Bucles:

let limite = 10
for (let i = 0; i < 10; i++) {
   let cuad = i*i
   console.log(i, cuad) 
   suma= suma + cuad
}

console.log(suma) 



=======
let limite = 10

let suma = 0
for (let i = 0; i < limite; i++) {
   let cuad = i*i
    console.log(i, cuad )
    suma = suma + cuad
}

console.log(suma)


const aDatos = [
    'Perro',
    'Gato',
    'Caballo',
    'Ornitorrinco'
]

for (let i = 0; i < aDatos.length; i++) {
    let item = aDatos[i];
    if (i > 0) {
        item = item + 's'
    }
    console.log(`Tengo ${i+1} ${item}`)
    
}
>>>>>>> 3563a7daf8a13240623a8600fa0e456664dce93b
