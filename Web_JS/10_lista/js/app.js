export function app() {
    //Existe un input #in-new
    //Existe un elemento #out-lista

    let animales= []

    //Nodos
    let inAnimal = document.querySelector('#in-new')
    let outAnimal = document.querySelector('#out-lista')

    //Asignar manejador de eventos
    inaAnimal.addEventListener('change', addAnimal)

    //Function
    function addAnimal() {
        animales.push(inAnimal.value)
        inAnimal.value = ''
        render()
    }

    function render() {
        let html = ''
        html += '<ul>'
        animales.forEach(item => html += `<li>${item}</li>`)
        html += '</ul>'
        outAnimal.innerHTML = html
    }
}