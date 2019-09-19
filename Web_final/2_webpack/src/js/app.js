import { App } from './app.js'

export class app{

    constructor() {
    console.log('Cargada app')

    // Nodos del DOM
    let button = document.querySelector('#btn')
    let message = document.querySelectorAll('#message')

    // Asociación de manejadores de eventos
    button.addEventListener('click', showMessage)
    
    // Funciones manejadoras de eventos
    function showMessage() {
        message.innerHTML = `Hola Hola`
        }
    }}
