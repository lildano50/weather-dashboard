// Initializing variables
var cityName = document.querySelector("#city-name")

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
        currentWeather(city, data.main.temp, data.wind.speed, data.main.humidity);
        getForecast(data.coord.lat, data.coord.lon);
    })
}

function getForecast(latitude,longitude){
    const weatherAPIKey = "635a9e9b5509af0d2dd19994efa78b66";

    fetch("http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + weatherAPIKey + "&units=imperial") 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            forecast1(data.city.name, data.list[1].main.temp, data.list[1].wind.speed, data.list[1].main.humidity)
            forecast2(data.city.name, data.list[9].main.temp, data.list[9].wind.speed, data.list[9].main.humidity)
            forecast3(data.city.name, data.list[17].main.temp, data.list[17].wind.speed, data.list[17].main.humidity)
            forecast4(data.city.name, data.list[25].main.temp, data.list[25].wind.speed, data.list[25].main.humidity)
            forecast5(data.city.name, data.list[33].main.temp, data.list[33].wind.speed, data.list[33].main.humidity)
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

//Forecast Day 1
function forecast1 (city, temperature, wind, humid) {
    const displayWeather = document.querySelector("#future-weather-d1")
    const displayTemp = document.querySelector("#temp1")
    const displayWind = document.querySelector("#wind1")
    const displayHumid = document.querySelector("#humid1")

    displayWeather.textContent = city;
    displayTemp.textContent = temperature + "°F";
    displayWind.textContent = wind + " mph";
    displayHumid.textContent = humid + "% humidity";

}

//Forecast Day 2
function forecast2 (city, temperature, wind, humid) {
    const displayWeather = document.querySelector("#future-weather-d2")
    const displayTemp = document.querySelector("#temp2")
    const displayWind = document.querySelector("#wind2")
    const displayHumid = document.querySelector("#humid2")

    displayWeather.textContent = city;
    displayTemp.textContent = temperature + "°F";
    displayWind.textContent = wind + " mph";
    displayHumid.textContent = humid + "% humidity";

}

//Forecast Day 3
function forecast3 (city, temperature, wind, humid) {
    const displayWeather = document.querySelector("#future-weather-d3")
    const displayTemp = document.querySelector("#temp3")
    const displayWind = document.querySelector("#wind3")
    const displayHumid = document.querySelector("#humid3")

    displayWeather.textContent = city;
    displayTemp.textContent = temperature + "°F";
    displayWind.textContent = wind + " mph";
    displayHumid.textContent = humid + "% humidity";

}

//Forecast Day 4
function forecast4 (city, temperature, wind, humid) {
    const displayWeather = document.querySelector("#future-weather-d4")
    const displayTemp = document.querySelector("#temp4")
    const displayWind = document.querySelector("#wind4")
    const displayHumid = document.querySelector("#humid4")

    displayWeather.textContent = city;
    displayTemp.textContent = temperature + "°F";
    displayWind.textContent = wind + " mph";
    displayHumid.textContent = humid + "% humidity";

}

//Forecast Day 5
function forecast5 (city, temperature, wind, humid) {
    const displayWeather = document.querySelector("#future-weather-d5")
    const displayTemp = document.querySelector("#temp5")
    const displayWind = document.querySelector("#wind5")
    const displayHumid = document.querySelector("#humid5")

    displayWeather.textContent = city;
    displayTemp.textContent = temperature + "°F";
    displayWind.textContent = wind + " mph";
    displayHumid.textContent = humid + "% humidity";

}



// Event Listeners
cityName.addEventListener('submit', getWeather);