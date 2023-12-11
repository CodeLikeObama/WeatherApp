let isSearchBarVisable;

const searchbutton = document.getElementById("searchButton");
const cityName = document.getElementById("CityNameText");
const windspeed = document.getElementById("windTxt");
const humiditytxt = document.getElementById("humidityTxt");
const temp = document.getElementById("tempTxt");
const conditionstxt = document.getElementById("conditionsTxt");
const searchbar = document.getElementById("searchBar");
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

function searchButtonFunction()
{
    //if (isSearchBarVisable === false) {
     //   searchbutton.onclick = showSearchbar;
       // isSearchBarVisable = true;
   // }
    //else {
        searchbutton.onclick = search;
    //}
}

//searchbutton.onclick = searchButtonFunction;


searchbutton.addEventListener("click",function (){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchbar.value}&appid=41b4147b4b75fbaba5e0e514756b1051&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let name = data.name
            let temperature = Math.round(data.main.temp)+ "°C";
            let humidity = data.main.humidity + "%";
            let windspd = data.wind.speed.toFixed(1) + "km/h";
            let conditions = data.weather[0].description;

            windspeed.innerHTML = windspd;
            temp.innerHTML = temperature;
            conditionstxt.innerHTML = conditions;
            humiditytxt.innerHTML = humidity;
            cityName.innerHTML = name;
            }
        )

        .catch(err => console.log(err))

})

