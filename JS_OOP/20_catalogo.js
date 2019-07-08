//Ejercicio 20 Apuntes JS

//3 propiedades + 4.propiedad (iva base) si queremos 

//2 metodos
//iva -> return this.precio *0,21
//mostrar a1.mostrar

//funcion constructora: varios artículos consta1 = new Articulo()


function Producto(nombre, categoria, descripcion, unidades, precio, iva) {
    this.nombre = nombre
    this.categoria = categoria
    this.descripcion = ''
    this.cantidad = cantidad
    this.precio = precio
    this.iva = iva
    //this.profesion = ''
    this.mostrarP = function(otro = 'amig@') {
        let msg = `Hola ${otro} soy ${this.nombre}`
        console.log(msg)
    }
   /*  this.serContratado = function(puesto) {
        this.profesion = puesto
    } */
}


const p2 = new Producto('Lavadora LG', 'Lavado', '', 100, 489, 21)
const p3 = new Producto('Batidora Bosch', 'Cocina','', 150, 60.99, 21)


p1.descripcion = 'Lavadora carga frontal - LG F4J7TY1W, Carga de 8 kg, 1400 rpm, Clase A+++(-40%), Blanco'
p2.descripcion = 'Batidora de mano - Bosch MaxoMixx MSM89160, 1000W, Turbo, Selector 12 velocidades, Silencioso'


producto.calcularImporte = function() {
    const importe = {} 
    importe.base = 
        this.items
        .map( Producto => producto.precio * producto.cantidad)
        .reduce( (total, item) => total + item ) 
    importe.iva = importe.base * this.iva
    importe.total = importe.base + importe.iva
    return importe
}

console.log(p1)