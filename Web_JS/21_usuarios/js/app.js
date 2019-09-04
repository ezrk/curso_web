import { USERS} from './api.js'
export function app() {
    console.log('Cargada app')
    let aUsers =[]

    // Nodos del DOM
    let btnBuscar = document.querySelector('#btn-buscar')
    let inClave = document.querySelector('#in-clave')   
    let ulLibros = document.querySelector('#ul-libros')
    let pError = document.querySelector('#p-error')
    
 
    // Asociación de manejadores de eventos
    //btnGuardar.onclick = onClickGuardar
    btnBuscar.addEventListener('click', onClickBuscar2017)
    inClave.addEventListener('change', onClickBuscar2017)

    // Funciones manejadoras de eventos

    function onClickBuscar(ev) {
        console.log('onClickBuscar')
        if (!inClave.value) {
            return
        }
        let url = LBGOOGLE + '/' + inClave.value
        inClave.value = '' 
        fetch(url)
        .then(response => {
            if(response.status == 200) {
                return response.json()
            } 
            throw(new Error(response.status))
        })
        .then( (data) => {
            data = data.items
            data = data.map(item => { return {title: item.volumeInfo.title,
                                              authors: item.volumeInfo.authors  } 
            }) 
            console.log(data)
            renderData(data)
        })
        .catch( (error) => {
            renderError(error) 
        }) 
    }

    //OTRAS FUNCIONES
    function getDatos() {
        fetch(USERS)
        .then( response => response.json())
        .then( data => {
            aUsers = data
            renderData()
        }) 
    }

    // ES2017

    async function onClickBuscar2017() {
        console.log('onClickBuscar2017')
        if (!inClave.value) {
            return
        }
        let url = LBGOOGLE + '/' + inClave.value 
        try {
            let response = await fetch(url)
            if(response.status == 200) {
                let data = await response.json()
                data = data.items
                data = data.map(item => { return {title: item.volumeInfo.title,
                                              authors: item.volumeInfo.authors  } 
                }) 
                console.log(data)
                renderData(data)
            } else {
                throw(new Error(response.status))
            }    
        } catch (error) {
            renderError(error)
        }
    }

    function renderData(data) {
        let html = '
        `
        <tr>
            <th>ID </th>
            <th class="title">Nombre</th> |
            <th class="autor">Edad</th>
        </tr>`
        '
        aUsers.forEach(item => html += `
        <tr>
            <td>${item.id}</td>
            <td>${item.nombre}</td> |
            <td>${item.edad}</td>
        </tr>` );
        ulLibros.innerHTML = html

    } 

    function renderError(error) {
        pError.innerHTML = 'error de conexión: ' + error
    }
    
}