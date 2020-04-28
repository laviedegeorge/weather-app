import './styles/style.css' 
import getCityInfo from "./getWeather";

document.getElementById("city_input").value = '';

const displayData = obj => {
  const dataObj = obj;
  document.getElementById("deg").innerHTML = Math.round(obj.main.temp);
  document.getElementById("location").innerHTML = obj.name;
  document.getElementById('weather_icon').setAttribute('src', `http://openweathermap.org/img/wn/${obj.weather[0].icon}.png`)
  document.getElementById('weather_description').innerHTML =  obj.weather[0].description;
  document.getElementById("cloudy").innerHTML = `${obj.clouds.all}%`;
  document.getElementById("humidity").innerHTML = `${obj.main.humidity}%`;
  document.getElementById("wind").innerHTML = `${obj.wind.speed}km/h`;
  console.log(dataObj);
  return dataObj;
};

const getCity = () => {
  const city = document.getElementById("city_input").value;
  getCityInfo(city, displayData);
  //console.log(cityInfo);
};

/* CLICKING OF THE SERCH BUTTON */
const searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", getCity);

/* CLICKING OF THE SUGGESTED LOCATIONS */
const suggestedLocation = document.querySelectorAll(".suggested-location li");
suggestedLocation.forEach(li => {
  li.addEventListener("click", e => {
    const value = e.target.innerHTML;
    getCityInfo(value, displayData);
  });
});

/* GETTING USER LOCATION */
/* const getLocation = () => {
  
}; */
const getLocationByCords = (position)=>{
  const city = '';
  const lat = position.coords.latitude.toFixed(2);
  const long = position.coords.longitude.toFixed(2);
  console.log(lat,long)
  getCityInfo(city, displayData, lat, long,);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getLocationByCords);
} else {
  alert("Geolocation is not supported by this browser or is disabled.");
}
