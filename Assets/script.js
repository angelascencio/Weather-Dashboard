var buttons = document.getElementById("buttons");
var searchInput = document.getElementById("searchInput");
var cities = document.getElementById("cities");
var cityIcon = document.getElementById("cityIcon");
var temperature = document.getElementById("temperatureNum");
var wind = document.getElementById("windNum");
var humidity = document.getElementById("humidityNum");
var uvIndex = document.getElementById("uvIn");
var fiveDays = document.getElementById("fiveDays");
var cities = document.getElementById("cities");
var counter = 0;

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");

var placeholder = "Chicago"

var dateNum = moment().format("MMMM Do YYYY");
console.log(dateNum)

function getApi(inputStorage){
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputStorage + ",us&units=imperial&APPID=d38851407b874b51cfa24d8ab452271a"
}