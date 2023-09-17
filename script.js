// Initializing variables
var cityName = document.querySelector("#city-name")

// const weatherAPIKey = "7fb3cf0a8247a85ca9d8eb4020139a3b";
// const requestWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + weatherAPIKey;


// Functions
function getWeather(event){
    event.preventDefault();

    const weatherAPIKey = "635a9e9b5509af0d2dd19994efa78b66";
    var city = document.getElementById("search-input").value;
    console.log(city);

    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherAPIKey + "&units=imperial")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        console.log(data);
        console.log(data.main.temp) //temperature
        console.log(data.main.humidity) //humidity
        console.log(data.wind.speed) //wind
        console.log(data.coord.lon) //longitude
        console.log(data.coord.lat) //latitude
        currentWeather(city, data.main.temp, data.wind.speed, data.main.humidity)
        //need: temp(.main.temperature), wind (.wind), humidity(.main.humidity), coordinates(.coordinates)
    })
}

function currentWeather (city, temperature, wind, humid){
    const displayWeather = document.querySelector("#current-weather")
    const displayTemp = document.querySelector("#current-temp")
    const displayWind = document.querySelector("#current-wind")
    const displayHumid = document.querySelector("#current-humid")
    // cityName = document.createElement("h1")
    // cityName.textContent = city;
    // displayWeather.appendChild(cityName)
    displayWeather.textContent = city;
    displayTemp.textContent = temperature + "°F";
    displayWind.textContent = wind + " mph";
    displayHumid.textContent = humid + "% humidity";

};


// Event Listeners
cityName.addEventListener('submit', getWeather);