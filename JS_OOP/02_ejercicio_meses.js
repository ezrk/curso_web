/* objeto meses, 
propiedades son los meses,
valores son los nombres en otro idioma
bucle (nombre de mes: január) */

//const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ]
//const mesesHungaro = ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Agusztus', 'Szeptember', 'Október', 'November', 'December']

function traducir () {
    const meses = {
        enero : 'Január',
        febrero: 'Február',
        marzo: 'Március',
        abril: 'Április',
        mayo: 'Május',
        junio: 'Június',
        julio: 'Július',
        agosto: 'Agusztus',
        septiembre: 'Szeptember',
        octubre:  'Október',
        noviembre: 'November',
        diciembre:'December'
    }

let texto = ``

    for ( const mes in meses) {
        const hungaro = meses[mes];
       texto += `El mes de ${mes} en húngaro es ${hungaro} \n`
        }
      console.log(texto)
}

traducir()









