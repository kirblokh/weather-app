
const weatherForm = document.querySelector('#weather_form')
const search = document.querySelector('#location_input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const redmond = document.querySelector('#redmond')
const kirkland = document.querySelector('#kirkland')
const bellevue = document.querySelector('#bellevue')
const bothell = document.querySelector('#bothell')
const kenmore = document.querySelector('#kenmore')
const burein = document.querySelector('#burien')
const seatac = document.querySelector('#seatac')
const tukwila = document.querySelector('#tukwila')
const renton = document.querySelector('#renton')
const kent = document.querySelector('#kent')


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

fetch('/Redmond').then((response)=>{
    response.json().then((data)=>{
        redmond.textContent=data.redmond
    })
})
fetch('/Kirkland').then((response)=>{
    response.json().then((data)=>{
        kirkland.textContent=data.kirkland
    })
})
fetch('/Bellevue').then((response)=>{
    response.json().then((data)=>{
        bellevue.textContent=data.bellevue
    })
})
fetch('/Bothell').then((response)=>{
    response.json().then((data)=>{
        bothell.textContent=data.bothell
    })
})
fetch('/Renton').then((response)=>{
    response.json().then((data)=>{
        renton.textContent=data.renton
    })
})
fetch('/Tukwila').then((response)=>{
    response.json().then((data)=>{
        tukwila.textContent=data.tukwila
    })
})
fetch('/SeaTac').then((response)=>{
    response.json().then((data)=>{
        seatac.textContent=data.seatac
    })
})
fetch('/Kent').then((response)=>{
    response.json().then((data)=>{
        kent.textContent=data.kent
    })
})
fetch('/Kenmore').then((response)=>{
    response.json().then((data)=>{
        kenmore.textContent=data.kenmore
    })
})
fetch('/Burien').then((response)=>{
    response.json().then((data)=>{
        burien.textContent=data.burien
    })
})


