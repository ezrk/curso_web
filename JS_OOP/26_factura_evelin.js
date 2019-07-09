const {fechaEsp, fijarLongitudCadena} = require('./15_helpers.js')

function templateFactura (empresa, cliente, items, numFactura, tipoIVA , formaPago, fecha = new Date()) {
this.empresa = empresa
this.cliente = cliente
this.items = items
this.numFactura = numFactura
this.tipoIVA = tipoIVA
this.formaPago = formaPago
} 

function Empresa( nombre, direccion, telefono, nif ){
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
    }

function Cliente( nombre, direccion, telefono, nif ){
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
        this.nif = nif
        }

function Direccion( calle, numero , ciudad){
    this.calle = calle
    this.numero = numero
    this.ciudad = ciudad

}

const empresa = new Empresa(Vodafone, new Direccion('C/ Pescao', 7, 'Sevilla'), 91267575, 'B120385K' )
const cliente1 = new Cliente1(TranSiberiano, new Direccion('C/ Siberia', 8, 'Madrid'), 91267666, 'B145385Q' )

const f1 = new templateFactura ( empresa, cliente1, items,...   )


console.log(f1)

/* HASTA AQUÍ */
/* -------------------------------------------------------------------------- */
templateFactura.prototype

const templateFactura = {
    empresa: {
        nombre: '',
        direccion: '',
        telefono: '',
        nif: '',
    },
    cliente: {
        nombre: '',
        direccion: '',
        telefono: '',
        nif: '',
    },
    items : [
        {descripcion: '', precioU: 0, cantidad: 0} 
    ],
    numFactura: '',
    tipoIVA: '',
    formaPago: '',
    fecha: new Date()
    }

templateFactura.calcularImporte = function() {}
templateFactura.mostrarImporte = function() {}


const factura = {
    empresa: {
        nombre: 'Ediciones Tuatalug',
        direccion: 'c/ Pez 1, Madrid',
        telefono: '625875921',
        nif: 'T-34761234',
    },
    cliente: {
        nombre: 'Librería Boracai',
        direccion: 'c/ Carranza 5, Cádiz',
        telefono: '625493421',
        nif: 'F-76521743',
    },
    items : [
        {descripcion: 'Angular 8.0', precioU: 30, cantidad: 10},   
        {descripcion: 'JS para torpes', precioU: 32, cantidad: 12},   
        {descripcion: 'Typescrip Avanzado', precioU: 45, cantidad: 8},   
        {descripcion: 'Introducción a las aplicaciones Web', precioU: 37, cantidad: 11}],
    numFactura: '000000012',
    tipoIVA: 0.04,
    formaPago: 'Contado',
    fecha: new Date()
    }

factura.calcularImporte = function() {
    const importe = {} 
    importe.base = 
        this.items
        .map( libro => libro.precioU * libro.cantidad)
        .reduce( (total, item) => total + item ) 
    importe.iva = importe.base * this.tipoIVA
    importe.total = importe.base + importe.iva
    return importe
}

factura.listarItems = function() {
    let items = ``
    this.items.forEach(
        item => {
            let desc = fijarLongitudCadena(item.descripcion, 30)
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

factura.prepararFactura = function() {
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

factura.render = function () {
    console.log(this.prepararFactura())
}


factura.render()