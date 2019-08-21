
const weatherForm = document.querySelector('#weather_form')
const search = document.querySelector('#location_input')
const messageOne = document.querySelector('#location_output')
const messageTwo = document.querySelector('#overview')
const messageThree = document.querySelector('#degree')
const bellevue = document.querySelector('#bellevue')



weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    messageOne.textContent = ''
    messageTwo.textContent=''
    messageThree.textContent='Loading...'

    fetch('/weather?address=' + search.value).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent=data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
    fetch('/weather1?address=' + search.value).then((response) => {
        response.json().then((data) => {

                messageThree.textContent = data.forecast1
            
        })
    })
})

// fetch('/Bellevue').then((response)=>{
//     response.json().then((data)=>{
//         bellevue.textContent=data.bellevue
//     })
// })



