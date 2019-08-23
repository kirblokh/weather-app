
const weatherForm = document.querySelector('#weather_form')
const search = document.querySelector('#location_input')
const location_output = document.querySelector('#location_output')
const overview = document.querySelector('#overview')
const degree = document.querySelector('#degree')
const windspeed = document.querySelector('#windspeed')
const percip = document.querySelector('#percip')
const bellevue = document.querySelector('#bellevue')




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

// fetch('/Bellevue').then((response)=>{
//     response.json().then((data)=>{
//         bellevue.textContent=data.bellevue
//     })
// })



