//1-2
function isValidNumber(n) {
    let r = true
    if ( isNaN(n) || typeof n == 'boolean' 
    || Array.isArray(n) || n === ''  || n === null) {
        r = false
    }
    return r
}

//3
function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

console.log(factorial(6))


//4
function mostrarError (n) {   
    let r = true
    if ( isNaN(n) || typeof n == 'boolean' 
    || Array.isArray(n) || n === ''  || n === null) {
        r = false
        console.log(`El número indicado ${n} no es un número`)
    }
    return r
}

function probar() {
    let n = 2
    n = 18
    n = 25
    n = 35
    n = 45
    n = 55
    n = 65
    n = 0
    n = -3
    n = '34'
    n = 'Pepe'
    n = true
    n = false
    n = {}
    n = []
    n = undefined
    n = ''
    n = null
    n = NaN
    mostrarError(n)
}
probar(2)