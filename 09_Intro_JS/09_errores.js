//COPIAR CODIGO DE PROFESOR!!!!!



/******** Separación de responsabilidades *********/

//mejor ponerlo en dos funciones las dos acciones : comprobar edad y devolver el mensaje >>> funciones puras
function codificaEdad (edad) {
    let i = 3 
    if (!isValidNumber(edad) {
        i = -2
    } else if (edad < 18) {
        i = 0
    } else if (edad < 35) {
        i = 1
    } else if (edad < 50) {
        i = 2 
    }
    return i 
}

function ResponderEdad (edad) {
    let mensajes = [
        'eres menor de edad' ,
        'eres joven' ,
        'cuidaooo' ,
        'sorry for you'
    ]
    let i = codificaEdad(edad)
    if (i >= 0 && i <= 3 ) {
        console.log(`Con ${edad} años`, mensajes[i] ) 
    } else {
        console.log('Error' ${i})
    }
}

let e = 53
ResponderEdad(e)

//Comprobar si un numero es válido
function isValidNumber(e) {
    r = true
    if ( isNaN(e) || typeof n == 'boolean'
    || Array.isArray(e) ) {
        r = false
    }
    return r
}

function probar () {
   e = 25
e = 34
e = '46'
e = '34 pepes'
e =  true
e =  false
e = undefined
e = []
e = {}
e = null 
}

probar ()



isValidNumber(e)
console.log(e, isValidNumber(e))