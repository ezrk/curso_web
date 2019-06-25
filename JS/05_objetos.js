// Si estamos en Java, C#, PHP...
//los objetos dependen de clases

//class Persona {}
//p1 = new Persona()
//p2 = new Persona()


//los objetos son independientes de las clases
//en JS tenemos objetos literales:
//se basan en la notación JSON - (javaScript object notation)

let p1 = { 
    nombre: 'Pepe',
    edad: 33, 
    direccion: {
        calle: 'C/ Pez',
        numero: '24',
        ciudad: 'Cádiz',
        pais: 'España'
    },
    aficiones: ['pintar', 'música', 'montañismo'],
    isAlumno: true
}

let p2 = { 
    nombre: 'Rosa',
    edad: 35, 
    isAlumno: true
}

p1.altura = 179
p2.colorPelo = 'rubio'

console.log(p1)
console.log(p2)

console.log(p1.direccion)
console.log(p1.aficiones[0])

console.log(p2['nombre'])


let prop = 'profesion'
p2[prop] = 'escritora'
console.log(p2[prop])

//bucle para los objetos : for in

for (const key in p2) {
        const value = p2[key];
        console.log(`La propiedad ${key} vale ${value}`)
    }

console.log("....................")

for (const key in p1) {
    const value = p1[key];
    console.log(`La propiedad ${key} vale ${value}`)
}
