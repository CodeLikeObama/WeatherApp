let isSearchBarVisable;

const searchbutton = document.getElementById("searchButton");
const cityName = document.getElementById("CityNameText");
const windspeed = document.getElementById("windTxt");
const humiditytxt = document.getElementById("humidityTxt");
const temp = document.getElementById("tempTxt");
const conditionstxt = document.getElementById("conditionsTxt");
const searchbar = document.getElementById("searchBar");
let conditionsIcon = document.getElementById("weatherIcon");
let conditionsIconName;
const API_KEY = "48452d64f2867b7d828631f4f4768764";


isSearchBarVisable = false;
//Search bar appears on button click
function showSearchbar() {
    cityName.style.display = "none";
    searchbar.style.display = "block";
}

//Searches the Query and hides Searchabr
//TODO Build Animation
function search(){
    //TODO Submit function
    searchbar.style.display = "none";
    cityName.style.display = "block";
}


//searchbutton.onclick = searchButtonFunction;


searchbutton.addEventListener("click",function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchbar.value}&appid=41b4147b4b75fbaba5e0e514756b1051&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let name = data.name
            let temperature = Math.round(data.main.temp)+ "°C";
            let humidity = data.main.humidity + "%";
            let windspd = data.wind.speed.toFixed(1) + "km/h";
            let conditions = data.weather[0].description;
            conditionsIconName = data.weather[0].main;

            windspeed.innerHTML = windspd;
            temp.innerHTML = temperature;
            conditionstxt.innerHTML = conditions.charAt(0).toUpperCase() + conditions.slice(1);;
            humiditytxt.innerHTML = humidity;
            cityName.innerHTML = name;

            changeweatherIcon(conditionsIconName);
            }
        )


        .catch(err => console.log(err))

})
searchbutton.addEventListener("click", cyclesearchButton)

function cyclesearchButton() {
    if (isSearchBarVisable === false) {
        searchbar.style.display = "block";
        cityName.style.display = "none";
        isSearchBarVisable = true;
    }
    else {
        searchbar.style.display = "none";
        cityName.style.display = "block";
        isSearchBarVisable = false;
    }
}


function changeweatherIcon (conditionName) {
switch (conditionName) {
    case 'Thunderstorm': conditionsIcon.src = "./weatherIcons/rain.png";;
    break;
    case 'Clear': conditionsIcon.src = "./weatherIcons/clear.png";
    break;
    case 'Rain' : conditionsIcon.src = "./weatherIcons/rain.png";
    break;
    case 'Clouds' : conditionsIcon.src = "./weatherIcons/clouds.png";
    break;
    case 'Drizzle': conditionsIcon.src = "./weatherIcons/drizzle.png";
    break;
    case 'Atmosphere': conditionsIcon.src = "./weatherIcons/mist.png";
    break;
    case 'Snow' : conditionsIcon.src = "./weatherIcons/snow.png";
    break;
}
}