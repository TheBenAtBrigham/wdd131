const today = new Date();

const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;


const temperature = 8; 
const conditions = "Partly cloudy"
const windSpeed = 15;  


function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("temperature").textContent = temperature + " °C";
    document.getElementById("conditions").textContent = conditions;
    document.getElementById("wind").textContent = windSpeed + " km/h";

    const windChillElement = document.getElementById("wind-chill");
    let windChill = "N/A";


    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = Math.round(calculateWindChill(temperature, windSpeed)) + " °C";
    }

    windChillElement.textContent = windChill;
});

