const countryName = document.querySelector("#countryNames_");
const selectedCountry = document.querySelector(".country_");
const countryCity = document.querySelector(".countryCity_")
const localTime = document.querySelector(".localTime_");
const currentDate = document.querySelector(".date_");
const tempFarhenheit = document.querySelector(".tempFahren_");
const tempCelcius = document.querySelector(".tempCelcius_");
const weatherCondition = document.querySelector(".weatherCondition_");
const windKph = document.querySelector(".wind_kph");
const windDir = document.querySelector(".wind_dir");
const humidity = document.querySelector(".humidity");
const feelsLikeC = document.querySelector(".feelsLike_c");
const weatherImage = document.querySelector('#conditionImage')
const uvIndex = document.querySelector('.uv_index')
const pressureBar = document.querySelector('.pressure_Bar')

countryName.addEventListener("change", (e) => {
  fetchWeather(e.target.value);
  // fetchWeather();
});
const fetchCountry = async (countryName) => {
  const apiResponse = await fetch(
    "https://countriesnow.space/api/v0.1/countries"
  );
  const ParsedData = await apiResponse.json();
  const result = ParsedData.data;
  // const r = []
  // ['nepal','china','xyz'].filter(i => {
  //   //[n,e,p,a,l].includes(countryName) ? i 
  // })
  // result.filter(i => {
  //   i.split()
  // })
  // console.log(result)
  result.forEach((i) => {
    const countryOption = document.createElement("option");
    countryOption.innerHTML = i.country;
    // const countryValue = i.value;
    countryName.appendChild(countryOption);
  });
};
fetchCountry(countryName);

const fetchWeather = async (country) => {
  try{
  const req = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=29d3472cf0ba4a0e83782327241906&q=${country}&aqi=no`
  );
  const result = await req.json();
  // countryCity.innerHTML = result.location.name;
  currentDate.innerHTML = `Date:
  ${result.location.localtime.split(' ')[0]}
  `;
  countryCity.innerHTML = result.location.name
  localTime.innerHTML = `Time: ${result.location.localtime.split(' ')[1]}`;
  tempFarhenheit.innerHTML = `${result.current.temp_f}°`
  tempCelcius.innerHTML = `${result.current.temp_c}°`
  weatherCondition.innerHTML = result.current.condition.text
  // console.log(result.current.condition.icon)
  weatherImage.src= result.current.condition.icon
  windKph.innerHTML = `${result.current.wind_kph} km/h`
  humidity.innerHTML = `Humidity: ${result.current.humidity}%`
  feelsLikeC.innerHTML = `Feels like ${result.current.feelslike_c}°`
  uvIndex.innerHTML = result.current.uv >= 6 ? `${result.current.uv} High` : `${result.current.uv} Low`
  windDir.innerHTML = result.current.wind_dir
  pressureBar.innerHTML = `${result.current.pressure_mb} mBar`
}catch(err){
  console.log(err,'here')
}
};
