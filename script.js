// Initializing variables
var cityName = document.querySelector("#city-name")
var searchButton = document.querySelector("#search-button")
let now = dayjs();
let day1 = now.add(1, 'day').format("MM/DD/YYYY")
let day2 = now.add(2, 'day').format("MM/DD/YYYY")
let day3 = now.add(3, 'day').format("MM/DD/YYYY")
let day4 = now.add(4, 'day').format("MM/DD/YYYY")
let day5 = now.add(5, 'day').format("MM/DD/YYYY")

// Functions
function getWeather(event){
    event.preventDefault();

    const weatherAPIKey = config.WEATHAPI;
    var city = document.getElementById("search-input").value;

    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherAPIKey + "&units=imperial")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            currentWeather(data.name, data.weather[0].icon, data.main.temp, data.wind.speed, data.main.humidity);
            getForecast(data.coord.lat, data.coord.lon);
    })
};

function getForecast(latitude,longitude){
    const weatherAPIKey = config.WEATHAPI;
    const forecast = document.querySelector("#forecast")
    forecast.setAttribute("style", "text-align: center")
    forecast.textContent = "5 Day Weather Forecast"

    fetch("http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + weatherAPIKey + "&units=imperial") 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            forecast1(data.city.name, data.list[1].weather[0].icon, data.list[1].main.temp, data.list[1].wind.speed, data.list[1].main.humidity)
            forecast2(data.city.name, data.list[9].weather[0].icon, data.list[9].main.temp, data.list[9].wind.speed, data.list[9].main.humidity)
            forecast3(data.city.name, data.list[17].weather[0].icon, data.list[17].main.temp, data.list[17].wind.speed, data.list[17].main.humidity)
            forecast4(data.city.name, data.list[25].weather[0].icon, data.list[25].main.temp, data.list[25].wind.speed, data.list[25].main.humidity)
            forecast5(data.city.name, data.list[33].weather[0].icon, data.list[33].main.temp, data.list[33].wind.speed, data.list[33].main.humidity)
    })
};

function currentWeather (city, pic, temperature, wind, humid){
    const displayWeather = document.querySelector("#current-weather")
    const displayPic = document.querySelector("#pic")
    const displayTemp = document.querySelector("#current-temp")
    const displayWind = document.querySelector("#current-wind")
    const displayHumid = document.querySelector("#current-humid")

    displayWeather.textContent = city + " - " + now.format("MM/DD/YYYY");
    displayPic.innerHTML = `<img src =https://openweathermap.org/img/wn/` + pic + `@2x.png>`;
    displayTemp.textContent = temperature + "°F";
    displayWind.textContent = wind + " mph";
    displayHumid.textContent = humid + "% humidity";

};

//Forecast Day 1
function forecast1 (city, pic, temperature, wind, humid) {
    const displayWeather = document.querySelector("#future-weather-d1")
    const displayDate = document.querySelector("#day1")
    const displayPic = document.querySelector("#weather1")
    const displayTemp = document.querySelector("#temp1")
    const displayWind = document.querySelector("#wind1")
    const displayHumid = document.querySelector("#humid1")

    displayWeather.textContent = city;
    displayDate.textContent = day1;
    displayPic.innerHTML = `<img src =https://openweathermap.org/img/wn/` + pic + `@2x.png>`;
    displayTemp.textContent = temperature + "°F";
    displayWind.textContent = wind + " mph";
    displayHumid.textContent = humid + "% humidity";

};

//Forecast Day 2
function forecast2 (city, pic, temperature, wind, humid) {
    const displayWeather = document.querySelector("#future-weather-d2")
    const displayDate = document.querySelector("#day2")
    const displayPic = document.querySelector("#weather2")
    const displayTemp = document.querySelector("#temp2")
    const displayWind = document.querySelector("#wind2")
    const displayHumid = document.querySelector("#humid2")

    displayWeather.textContent = city;
    displayDate.textContent = day2;
    displayPic.innerHTML = `<img src =https://openweathermap.org/img/wn/` + pic + `@2x.png>`;
    displayTemp.textContent = temperature + "°F";
    displayWind.textContent = wind + " mph";
    displayHumid.textContent = humid + "% humidity";

};

//Forecast Day 3
function forecast3 (city, pic, temperature, wind, humid) {
    const displayWeather = document.querySelector("#future-weather-d3")
    const displayDate = document.querySelector("#day3")
    const displayPic = document.querySelector("#weather3")
    const displayTemp = document.querySelector("#temp3")
    const displayWind = document.querySelector("#wind3")
    const displayHumid = document.querySelector("#humid3")

    displayWeather.textContent = city;
    displayDate.textContent = day3;
    displayPic.innerHTML = `<img src =https://openweathermap.org/img/wn/` + pic + `@2x.png>`;
    displayTemp.textContent = temperature + "°F";
    displayWind.textContent = wind + " mph";
    displayHumid.textContent = humid + "% humidity";

};

//Forecast Day 4
function forecast4 (city, pic, temperature, wind, humid) {
    const displayWeather = document.querySelector("#future-weather-d4")
    const displayDate = document.querySelector("#day4")
    const displayPic = document.querySelector("#weather4")
    const displayTemp = document.querySelector("#temp4")
    const displayWind = document.querySelector("#wind4")
    const displayHumid = document.querySelector("#humid4")

    displayWeather.textContent = city;
    displayDate.textContent = day4;
    displayPic.innerHTML = `<img src =https://openweathermap.org/img/wn/` + pic + `@2x.png>`;
    displayTemp.textContent = temperature + "°F";
    displayWind.textContent = wind + " mph";
    displayHumid.textContent = humid + "% humidity";

};

//Forecast Day 5
function forecast5 (city, pic, temperature, wind, humid) {
    const displayWeather = document.querySelector("#future-weather-d5")
    const displayDate = document.querySelector("#day5")
    const displayPic = document.querySelector("#weather5")
    const displayTemp = document.querySelector("#temp5")
    const displayWind = document.querySelector("#wind5")
    const displayHumid = document.querySelector("#humid5")

    displayWeather.textContent = city;
    displayDate.textContent = day5;
    displayPic.innerHTML = `<img src =https://openweathermap.org/img/wn/` + pic + `@2x.png>`;
    displayTemp.textContent = temperature + "°F";
    displayWind.textContent = wind + " mph";
    displayHumid.textContent = humid + "% humidity";

};

function searchHistory (){
    const city = document.getElementById("search-input").value;
    const searchHist = document.querySelector("#search-history")
    const button = document.createElement("button")
    const capitalizeWord = city.charAt(0).toUpperCase() + city.slice(1);
    button.innerText = capitalizeWord;
    button.setAttribute("id", city)
    button.setAttribute("style", "padding: 5px; background-color: #3B82F6; color: white; margin: 10px; border-radius: 10px")
    searchHist.appendChild(button)
    button.addEventListener('click', function(){getWeatherFromHistory(city);});
};

function getWeatherFromHistory(cityButton){

    const weatherAPIKey = "635a9e9b5509af0d2dd19994efa78b66";

    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityButton + "&appid=" + weatherAPIKey + "&units=imperial")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            currentWeather(data.name, data.weather[0].icon, data.main.temp, data.wind.speed, data.main.humidity);
            getForecast(data.coord.lat, data.coord.lon);
    })
};



// Event Listeners
cityName.addEventListener('submit', getWeather);
cityName.addEventListener('submit', searchHistory)

searchButton.addEventListener('click', getWeather);
searchButton.addEventListener('click', searchHistory);