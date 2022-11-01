var appid = "91f7010a8e5fcd16dbb7833271ef9718";
var currentE1 = document.querySelector('#current');
var searchForm = document.querySelector('#search-Form')
var searchE1 = document.querySelector('#search')
var citySearch = document.querySelector("#searched-Cities")
var fiveDayE1 = document.querySelector('#fiveDay')

var toJSON = function (response) {
  return response.json();
};

var displayWeather = function(data, city) {}

var temp = data.current.temp;
var icon = data.current.weather[0].icon;
var wind = data.current.wind_speed;
var humidity = data.current.humidity;
var uv = data.daily[0].uvi;

