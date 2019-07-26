export function app() {
    console.log('Cargada app')

let aBtn = document.querySelectorAll('.boton')
let text2 = document.querySelector('#text2')

aBtn.forEach (btn => 
    btn.addEventListener('click', onclickBoton))

function onclickBoton() {
    text2.classList.toggle('oculto')
    aBtn.forEach(btn => btn.classList.toggle('oculto'))
}
}