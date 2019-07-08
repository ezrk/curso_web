//Ejercicio 20 Apuntes JS

//3 propiedades + 4.propiedad (iva base) si queremos 

//2 metodos
//iva -> return this.precio *0,21
//mostrar a1.mostrar

//funcion constructora: varios artículos consta1 = new Articulo()

/** Function (class) Producto
 * @property {string} nombre 
 * @property {string} codigo 
 * @property {string} descripcion 
 * @property {number} precio 
 * @property {number} iva
 * @method {object} calcularIVA
 * @method {void} mostrarP
 */

function Producto(nombre, codigo, descripcion, precio) {
    this.nombre = nombre
    this.codigo = codigo
    this.descripcion = descripcion
    this.precio = precio
    }

Producto.prototype.iva = 0.21
Producto.prototype.calcularIVA = function (descuento = 0) {
    const precio = this.precio - (this.precio * descuento)
    return { 
        iva: this.precio * this.iva,
        total: this.precio + (this.precio * this.iva)
    }
}

Producto.prototype.mostrarP = function() {
    const importe = this.calcularIVA()
    const cadena = `
    Descripción: ${this.descripcion} 
    Código: ${this.codigo} 
    Precio: ${this.precio.toFixed(2)} 
    IVA: ${iva.toFixed(2)} 
    Precio total:  ${importe.total}
    `
    console.log(cadena)
}

const p1 = new Producto('Lavadora LG', '000123', '', 489)
const p2 = new Producto('Batidora Bosch', '000456','', 60.99)

p1.descripcion = 'Lavadora carga frontal - LG F4J7TY1W, Carga de 8 kg, 1400 rpm, Clase A+++(-40%), Blanco' //instancia 
p2.descripcion = 'Batidora de mano - Bosch MaxoMixx MSM89160, 1000W, Turbo, Selector 12 velocidades, Silencioso'
p2.iva =  0.16

p1.mostrarP()
console.log(p1)


p2.mostrarP()
console.log(p2)