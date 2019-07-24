export function app() {
    console.log('Cargada app')

    // Nodos del DOM
    let aEnlaces = document.querySelectorAll('.social a')

    // Manejadores de eventos
    aEnlaces
        .forEach( enlace => enlace
        .addEventListener('click', onClickEnlace))
    
    // Funciones
    function onClickEnlace(ev) {
        console.dir("ev.target")
        console.dir(ev.target)
        console.dir("ev.target.parentNode")
        console.dir(ev.target.parentElement)

        if (counter <=3) {
            ev.target.parentElement.outerHTML="OPSSS"
            counter++
        } else {
            ev.target.parentElement
            .parentElement.parentElement.outerHTML = 
            '<p>OOPS, NO EXISTO</p>'
        }


    
