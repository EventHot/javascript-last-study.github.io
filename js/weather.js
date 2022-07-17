const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const weather_icon = document.querySelector("#weather_icon");

const API_KEY = "18adbc1da5558b3f2f949d3fa5e142ae";

const weatherImage = {
  Rain: "https://cdn-icons.flaticon.com/png/512/2112/premium/2112368.png?token=exp=1658050305~hmac=65b3b7153d6539430d08d103836b86c9",
  Clear: "https://cdn-icons-png.flaticon.com/512/3093/3093303.png",
  snow: "https://cdn-icons-png.flaticon.com/512/1163/1163629.png",
};

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lang=kr&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      console.log(data);
      weather.innerText = `${data.main.temp}`;
      weather_icon.src = weatherImage[data.weather[0].main];
      weather_icon.style.display = "block";
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
