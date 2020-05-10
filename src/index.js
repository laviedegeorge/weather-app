import './styles/style.css' 
import getCityInfo from './js/getWeather';
import displayInfo from './js/displayInfo';

document.getElementById("city_input").value = '';

const displayData = obj => {
  displayInfo(obj);
};

const getCity = () => {
  mainD.classList.remove('side-nav');
  const city = document.getElementById("city_input").value;
  getCityInfo(city, displayData);
};

/* ----------------CLICKING ON THE SEARCH BUTTON ------------------------------*/
const searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", getCity);

/* ---------------CLICKING ON THE SUGGESTED LOCATIONS -------------------------*/
const suggestedLocation = document.querySelectorAll(".suggested-location li");
suggestedLocation.forEach(li => {
  li.addEventListener("click", e => {
    mainD.classList.remove('side-nav');
    const value = e.target.innerHTML;
    getCityInfo(value, displayData);
  });
});

/* --------------------GETTING USER LOCATION ----------------------------------*/
const getLocationByCords = (position)=>{
  const city = '';
  const lat = position.coords.latitude.toFixed(2);
  const long = position.coords.longitude.toFixed(2);
  //console.log(lat,long)
  getCityInfo(city, displayData, lat, long,);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getLocationByCords);
} else {
  alert("Geolocation is not supported by this browser or is disabled.");
}


/* ------------------ FOR MOBILE TOGGLE BUTTON-------------- */
const mainD = document.getElementById('main-details');
const toggleBtn = document.querySelectorAll('.toggle');
toggleBtn.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    if (e.target === btn) {
      mainD.classList.add('side-nav');
    } else {
      mainD.classList.remove('side-nav');
    }
  })
})

const mainWeather = document.getElementById('main_weather')
mainWeather.addEventListener('click', (e)=>{
  if (e.target ===  mainWeather) {
    mainD.classList.remove('side-nav');
  }
})