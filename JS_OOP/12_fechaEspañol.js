
//Miércoles, 15 del abril del 2015

const dias = [Domingo, Lunes, Martes, Miércoles, Jueves, Viernes, Sábado ]
const meses = [Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre]
const capitalize = (cadena = '' ) =>
cadena[0].toUpperCase() + cadena.slice(1)

/**fechaEspañol
 * @description devuelve la fecha como
 * @param {date} fecha
 * @returns {string}
 */

function fechaEspañol( fecha = new Date() ) {
    
}


console.log( fecha.getDay(dias[2]) + ',' + fecha.getDay[15-1] + 'del' + fecha.getMonth(meses[3]) + 'del' + fecha.getFullYear)