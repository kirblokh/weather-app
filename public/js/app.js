
const weatherForm = document.querySelector('#weather_form')
const search = document.querySelector('#location_input')
const location_output = document.querySelector('#location_output')
const overview = document.querySelector('#overview')
const degree = document.querySelector('#degree')
const windspeed = document.querySelector('#windspeed')
const percip = document.querySelector('#percip')
const bellevue = document.querySelector('#bellevue')
const nydegree = document.querySelector('#nydegree')
const lddegree = document.querySelector('#lddegree')
const todegree = document.querySelector('#todegree')
const spdegree = document.querySelector('#spdegree')



weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    overview.textContent=''
    degree.textContent=''
    percip.textContent=''
    windspeed.textContent=''
    location_output.textContent = 'Loading...'

    fetch('/weather?address=' + search.value).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                location_output.textContent=data.error
            } else {
                location_output.textContent = data.location
                overview.textContent = data.forecast
            }
        })
    })
    fetch('/windspeed?address=' + search.value).then((response) => {
        response.json().then((data) => {

                windspeed.textContent = data.windspeed
            
        })
    })
    fetch('/degree?address=' + search.value).then((response) => {
        response.json().then((data) => {

                degree.textContent = data.degree
            
        })
    })
    fetch('/percip?address=' + search.value).then((response) => {
        response.json().then((data) => {

                percip.textContent = data.percip
            
        })
    })
})

fetch('/newyork').then((response)=>{
    response.json().then((data)=>{
        nydegree.textContent=data.newyork
    })
})
fetch('/london').then((response)=>{
    response.json().then((data)=>{
        lddegree.textContent=data.london
    })
})
fetch('/tokyo').then((response)=>{
    response.json().then((data)=>{
        todegree.textContent=data.tokyo
    })
})
fetch('/singapore').then((response)=>{
    response.json().then((data)=>{
        spdegree.textContent=data.singapore
    })
})



