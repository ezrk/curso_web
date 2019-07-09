/** triángulo
 * 
 * 
 */

/* function Triangulo(parametro) {
    this.propriedad = lado1,
    
 */



function Triangulo(lado1, lado2, lado3) {
    this._lado1 = lado1,
    this._lado2 = lado2,
    this._lado3 = lado3,
}

Triangulo.prototype.getLados = function() {
    return this 
}

Triangulo.prototype.getPerimetro = function() {
    return this._lado1 + this._lado2 + this._lado3
}

const t = new Triángulo(5, 8, 5)
//console.log(t._lado1 + t._lado2 + t._lado3)
console.log(t.getPerimetro)

Triangulo.prototype.tipos = ['equilátero','isósceles', 'escaleno'] 
Triangulo.prototype.getTipo = function () {
    let tipo = 1
    if (this._lados[0] === this._lados[1] &&
        this._lados[0] === this._lados[1]) { 
            tipo = 0
        } else if ( this._lados[0] !=== this._lados[1] &&
            this._lados[0] === this._lados[1]) {
}



const t1 = new triangulo(1,1,2)