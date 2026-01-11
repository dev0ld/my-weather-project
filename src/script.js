function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  //get city
  let city = searchInputElement.value;

  //get API url
  let apiKey = "7332a37bdbaf02c4010b2fbtf44ao35f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  console.log(apiUrl);

  //function that gets temperature based on repsonse and sets it
  function setCurrentTemp(response) {
    let tempPlaceholder = document.querySelector("#temperatureValue");
    console.log(response.data.temperature);
    let currentTemperature = Math.round(response.data.temperature.current);

    tempPlaceholder.innerHTML = currentTemperature;
  }

  axios.get(apiUrl).then(setCurrentTemp);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
