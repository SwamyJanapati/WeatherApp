let cityName = document.getElementById('cityName')
let cityValue = document.getElementById('cityValue')
let countryName = document.getElementById('countryName')
let temperature = document.getElementById('temperature')

let search = async () => {
    if (cityValue.value.length == 0) {
        alert('please enter city name before search')
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
            let response = await fetch(url)
            let data = await response.json()
            cityName.textContent = data.name
            countryName.textContent = data.sys.country
            temperature.textContent = data.main.temp
        }
        catch {
            alert('please enter the valid city name')
        }
    }
}