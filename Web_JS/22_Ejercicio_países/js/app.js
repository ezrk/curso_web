import { allworld, filter } from './api.js'

export function app() {
    console.log('Cargada app')
    let allCountries = []
    let thecountry = {}

    // Nodos del DOM
    let continent = document.querySelector('#continent')
    let country = document.querySelector('#country')
    let showData = document.querySelector('#showData')

    // Asociación de manejadores de eventos
    continent.addEventListener('change', showContinent)
    country.addEventListener('change', showCountry)

    // Funciones manejadoras de eventos
    function showContinent(ev) {
        console.dir(ev.target.value)
        console.log()
        if (ev.target.value) {
            let url = allworld + ev.target.value + filter
            fetch(url).then(response => response.json()).then(data => {
                allCountries = data
                console.log(allCountries)
                getCountry()
            })
        } else {
            showData.innerHTML = ""
        }


        function getCountry() {
            country.innerHTML = `<option value="" id="${country.name}">${country.name}</option>`
        }

        function showCountry(ev) {
            thecountry = allCountries.find(item => item.name == ev.target.value)
            console.dir(thecountry)
            renderData()
        }

        function renderData() {
            showData.innerHTML =
                ` 
                <p>${thecountry.name}</p>
                <img src="${thecountry.flag}" alt="${thecountry.name}">      
                <ul>
                    <li><span>Capital: </span> ${thecountry.capital}</li>
                    <li><span>Population: </span> ${thecountry.population}</li>
                </ul>
                `
        }
    }
