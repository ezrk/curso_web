/**
 * @description recorre un objeto  a tantos niveles como contenga
 * @param {object} object
 * @returns {string}
 *  
 */

 function objectToString(obj= {}) {
     let cadena = ``
     for (const key in obj) {
         if (obj.hasOwnProperty(key)) {
             const value = obj[key];
            if (typeof value == 'object') {
                cadena += 
             `
             ${key}: ${objectToString(value)}
             `
                objectToString(value)
            } else {
                 cadena += 
             `
             ${key}: ${value}
             `
            }
         }
     }
     return cadena
 }

/*  let cadena = objectToString(p2)
 console.log(cadena) */


 let p2 = { 
    nombre: 'Rosa',
    edad: 35, 
    isAlumno: true
}

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


let cadena = objectToString(p1)
console.log(cadena)
