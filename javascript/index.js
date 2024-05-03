function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format(" MMMM,dddd Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM, dddd Do YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", "");
  console.log(cityTime.format("MMMM Do YYYY"));
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" id="los-angeles">
          <div>
            <h2>${cityTimeZone}</h2>
            <div class="date"> ${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time"> ${cityTime.format(
            "h:mm:ss"
          )} <small> ${cityTime.format(A)} </small>
          </div>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
