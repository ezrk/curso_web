/* 
Definir la estructura de un objeto que almacena una factura. 
Las facturas están formadas por:
- la información de la propia empresa:
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- la información del cliente
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- una lista de elementos, cada uno de los cuales dispone de:
    - descripción
    - precio por unidad
    - cantidad 
- otra información básica de la factura
    - el número de factura
    - tipo de IVA
    - forma de pago
    - la fecha
Añadir al menos dos métodos:
- el que calcula el importe total de la factura
- el que muestra por pantalla la factura 
    o al menos el importe total de la factura.
*/


const datosEmpresa = {
    nombre: 'Pepephone',
    direccion : {
        calle: 'Calle Alcalá 1.',
        ciudad: 'Madrid',
        provincia: 'Madrid'
    },
    teléfono: '91 222 333',
    NIF: 'A29268166. B.' 
}

const datosCliente = {
    nombre: 'José Manuel Pérez',
    direccion : {
        calle: 'Bonito, 1',
        ciudad: 'Zahara de los Atunes',
        provincia: 'Cádiz'
    },
    teléfono: '91 555 333',
    NIF: 'A29268255. B.' 
}


const listaCompra = {
    descripcion: '',
    preciounidad: price ,
    cantidad: ud ,

}

const datosFactura = {
    nfactura: ,
    iva: 16,
    formapago: ,
    fecha: ,

}

//Fecha
var f = new Date();
document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());


const factura1 = new Factura();
const factura1 = [datosFactura, datosEmpresa, datosCliente, listaCompra]


/** function importeTotal
 * @description calcula importe total de la factura
 * @param {number} price, ud, iva
 * @returns {number}
 */


 /** function mostrarFactura
 * @description mostrar los detalles de la factura
 * @param {number, string} 
 * @returns {number, string}
 */
 
function mostrarFactura(datosFactura, datosEmpresa, datosCliente, listaCompra) {
    var resultado = ``;
    for (var i in objeto) {
      //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
      if (objeto.hasOwnProperty(i)) {
          resultado += `${nombreObjeto}.${i} = ${objeto[i]}\n`;
      }
    }
    return resultado;
  }





  console.log(factura1)