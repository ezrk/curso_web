//const {fechaEsp, fijarLongitudCadena} = require('./15_helpers.js')

function templateFactura (  empresa = {}, 
    cliente = {}, 
    items = [{}], 
    numFactura = '', 
    tipoIVA = '', 
    formaPago = '', 
    fecha = new Date()
    ) {
this.empresa = empresa
this.cliente = cliente
this.items = items
this.numFactura = numFactura
this.tipoIVA = tipoIVA
this.formaPago = formaPago
} 

function Empresa ( nombre, direccion, telefono, nif) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
    }

function Item (descripcion = '', precioU = 0, cantidad = 0) {
    this.descripcion = descripcion
    this.precioU = precioU
    this.cantidad = cantidad
}

function Direccion( calle, numero , ciudad){
    this.calle = calle
    this.numero = numero
    this.ciudad = ciudad

}

//PROTOTIPADO
Factura.prototype.calcularImporte = function () {
    const importe = {} 
    importe.base = 
        this.items
        .map( libro => libro.precioU * libro.cantidad)
        .reduce( (total, item) => total + item ) 
    importe.iva = importe.base * this.tipoIVA
    importe.total = importe.base + importe.iva
    return importe
}

Factura.prototype.listarItems = function () {
    let items = ``
    this.items.forEach(
        item => {
            let desc = fijarLongitudCadena(item.descripcion, 30) //rellena espacios con el numero proporcionado
            let pv = item.precioU
                .toLocaleString('es', {style: 'currency', currency: 'EUR'})
            let cant = item.cantidad
            items += 
`
    ${desc}     ${pv}          ${cant}
`
    })
    return items
}

Direccion.prototype.ToString() = function() {
    return `${this.calle} ${this.numero} ${this.ciudad}`
}

Factura.prototype.prepararFactura = function() {
    const importe = this.calcularImporte()
    const factura =
`
    _______________________________________________________________
                                        ${this.empresa.nombre}
                                        ${this.empresa.direccion}
                                        ${this.empresa.telefono}
                                        ${this.empresa.nif}
    Num. Factura: ${this.numFactura}
    ${this.cliente.nombre}
    ${this.cliente.direccion}
    ${this.cliente.telefono}
    ${this.cliente.nif}
    Descripción                         Precio      Cantidad
    _______________________________     _______     ________
    ${this.listarItems()}
    Importe ....................................${importe.base
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    IVA ........................................${importe.iva
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Importe Total ..............................${importe.total
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Forma de Pago ..............................${this.formaPago}
    Madrid, ${fechaEsp(this.fecha)}
    ______________________________________________________________
`
    return factura
}

//Factura.prototype.mostrarImporte = function () {}
Factura.prototype.render = function () {
    console.log(this.prepararFactura())
}

const empresa = new Empresa('Vodafone', new Direccion('C/ Pescao', '7', 'Sevilla'), '91267575', 'B120385K' )
const cliente = new Empresa('TranSiberiano', new Direccion('C/ Siberia', '8', 'Madrid'), '91267666', 'B145385Q' )

const items = [ new Item('Rey León', 24, 100),
                new Item('Aladin', 26, 101),
                new Item('Dumbo', 22, 102),   ]

const f1 = new templateFactura ( empresa, cliente, items, '000000012', 0.04, 'Contado', fecha )


console.log(f1)

