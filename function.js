const searchbutton = document.querySelector("#searchButton");
const cityName = document.querySelector("#CityNameText");
const searchbar = document.querySelector("#searchBar");

//Search bar appears on button click
function showSearchbar() {
    cityName.style.display = "none";
    searchbar.style.display = "block";
}

searchbutton.onclick = showSearchbar;