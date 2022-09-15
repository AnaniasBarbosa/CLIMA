const BASE_URL = "https://api.openweathermap.org/data/3.0/onecall";
const apiKey = "8067bbeba27d3a6bbf88a519200b6562";
const dadosRegiao = JSON.parse(localStorage.getItem("dadosRegiao"));
const lang = "pt_br";
const unidade = "metric";

const { longitude } = dadosRegiao;
const { latitude } = dadosRegiao;
const { cidade } = dadosRegiao;
console.log(latitude);
console.log(longitude);
const url = `${BASE_URL}?lat=${latitude}&lon=${longitude}&units=${unidade}&appid=${apiKey}&lang=${lang}`;

document.getElementById("back").style.visibility = "visible";
document.getElementById("cidade").innerHTML = cidade;
fetch(url)
  .then((response) => response.json())
  .then((dadosTemp) => {
    console.log(dadosTemp);
    renderTemp(dadosTemp);
  })
  .catch((error) => {
    console.log(error);
  });

function renderTemp(dadosTemp) {
  dadosTemp = dadosTemp.daily[0];
  const temp = dadosTemp.temp;
  document.getElementById("weather").innerHTML = dadosTemp.weather[0].description;
  document.getElementById("temp").innerHTML = temp.day;
  document.getElementById("max").innerHTML = temp.max;
  document.getElementById("min").innerHTML = temp.min;
}
