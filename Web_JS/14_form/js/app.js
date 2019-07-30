export function app() {
    console.log('Cargada app') 

    //VARIBALES
    let oDatos = {
        userName: ""

         
    }
    
    // Nodos del DOM
     let form = document.querySelector('[name = "complete-post"]')
     let btnReset = document.querySelector('#btn_reset')
     let aFormData = document.querySelectorAll('.form-data')
     let aCheckbox = document.querySelectorAll('[[type="checkbox"]')
     let aSelects = document.querySelectorAll('select')
     let aRadiositio = document.querySelectorAll('[name="sitio"]')
     
  

     // Definir manejadores
     form.addEventListener('submit', onSubmit)
     btnReset.addEventListener('click', onReset)

     // Funciones manejadoras de eventos
     function onSubmit(ev) {
        ev.preventDefault()
        console.log('Iniciando submit')
        aFormData.forEach(item => oDatos[item.name] = item.value)
        aCheckbox.forEach(item => oDatos[item.name] = item.checked)
        console.log(oDatos)
       // console.dir(aSelects[0])
     }

     function onReset(ev) {
         ev.preventDefault()
        console.dir(aRadiositio)
     }


     function getRadio(aNodos) {
        aNodos.forEach(item => {
            if
        })
     }
 }