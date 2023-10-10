let input = document.getElementById("input");

let btn = document.getElementById("btn");
let aks = document.getElementById("ax");
btn.addEventListener("click", weather);
let temp = document.getElementById("temp");
let city = document.getElementById("city");
let wind_speed = document.getElementById("wind_speed");
// wind_speed.innerHTML = `${

// }`;

function majid(data) {
  temp.textContent = `${parseInt(data.main.temp - 273)}درجه`;
  console.log(data);
  city.textContent = `${data.name}`;
  wind_speed.textContent = `${data.weather[0].main}`;
}
function axe(dataa) {
  switch (dataa) {
    case "Rain":
      aks.innerHTML = `<img src="./media/rain.png" alt="">`;
      break;
    case "Light rain":
      aks.innerHTML = `<img src="./media/rain.png" alt="">`;
      break;
    case "Clouds":
      aks.innerHTML = `<img src="./media/cloudy.png" alt="">`;
      break;
    case ("sunny", "Clear"):
      aks.innerHTML = `<img src="./media/sun.png" alt="">`;
      break;
  }
}
async function weather() {
  let key = "2c9d5909a71e9e41886f2f0f7c06bd7a";
  let wet = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`
  );

  wett = wet.json();
  mamad = await wett.then((r) => r);
  console.log(mamad);
  majid(mamad);
  axe(mamad.weather[0].main);

  let tempp = await mamad.main.temp;
  console.log(tempp);
  return tempp;
}
