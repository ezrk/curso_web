const aDatos = [ 'luis' , 'juan', 'rosa', 'maria']
console.log(aDatos.__proto__)
console.log(Array.prototype)

Array.prototype.saludar = function () {
    console.log('Hola, soy un array')
}

aDatos.push('Ernesto')
aDatos.saludar() 