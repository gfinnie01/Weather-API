var appid = "91f7010a8e5fcd16dbb7833271ef9718";
var currentE1 = document.querySelector('#current');
var searchForm = document.querySelector('#search-Form')
var searchE1 = document.querySelector('#search')
var citySearch = document.querySelector("#searched-Cities")
var fiveDayE1 = document.querySelector('#fiveDay')

var toJSON = function (response) {
  return response.json();
};

var getWeather = function(data, city) {

  var temp = data.current.temp;
  var icon = data.current.weather[0].icon;
  var wind = data.current.wind_speed;
  var humidity = data.current.humidity;
  var uv = data.daily[0].uvi;

  var h2E1 = document.createElement('h2');
  var dateE1 = document.createElement('p');
  var humidE1 = document.createElement('p');
  var uvE1 = document.createElement('p');
  var windE1 = document.createElement('p');
  var tempE1 = document.createElement('p');
  var imgE1 = document.createElement('img');
  var spanE1 = document.createElement('span');
  currentE1.innerHTML =null;

  h2El.textContent = city.name;
    tempEl.textContent = 'Temp: ' + temp
    windEl.textContent = 'Wind: ' + wind
    uvSpanEl.textContent = uv;
    humidityEl.textContent = 'Humidity: ' + humidity;
    uvEl.textContent = 'UVI: ';

    imgEl.width = 90;
    imgEl.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    imgEl.height = 90;
    imgEl.alt = icon;

    uvEl.append(uvSpanEl);
    currentEl.append(tempEl);
    currentEl.append(dateEl);
    currentEl.append(imgEl);
    currentEl.append(h2El);
    currentEl.append(humidityEl);
    currentEl.append(windEl);
    currentEl.append(uvEl);



}


