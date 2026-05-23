const today = new Date();
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

//display wind chill factor in Weather section; calculated and displayed when page loads

//define variables that use static values for the temperature and wind speed, matching
// the static, displayed values you have in your weather section content

// write a function named "calculateWindChill" that returns the wind chill factor when passed
// necessary arguments (temp and wind speed)
// function should use one line of code that returns the result of the wind chill calculation
// formula should be based on location's preferred units (C)

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return 13.12 + (0.6215 * temp) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temp * windSpeed ** 0.16)
    } else { return "N/A" }
}

let longWindChill = calculateWindChill(10, 9);
let windChill = longWindChill.toFixed(2);

document.getElementById("windChill").innerHTML = windChill;



// formula:
// W = 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
// W= wind chill T=Air temperature V = wind speed in kilometers per hour

// do not call calculateWindChill function unless the following conditions are met:
//      temperature <=10 C
//      wind speed >4.8km/h
// if conditions are not met, display "N/A"