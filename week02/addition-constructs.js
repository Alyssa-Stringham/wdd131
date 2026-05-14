let numbersList = [3, 10, 45, 8, 17, 33, 2];

for (let i = 0; i < numbersList.length; i++) {
    if (numbersList[i] < 20) {
        console.log(numbersList[i]);
    }
}
let i = 0;
while (i < numbersList.length) {
    if (numbersList[i] < 20) {
        console.log(numbersList[i]);
    }
    i++;
}

numbersList.forEach(function (number) {
    if (number < 20) {
        console.log(number);
    }
})

let numbersList2 = [5, 37, 89, 12, 14];

for (i = 0; i < numbersList2.length; i++) {
    if (numbersList2[i] < 20) {
        console.log(numbersList2[i]);
    }
}

let i = 0;
while (i < numbersList2.length) {
    if (numbersList2[i] < 20) {
        console.log(numbersList2[i]);
    }
    i++
}

numbersList2.forEach(function (number) {
    if (number < 20) {
        console.log(number);
    }
})


const DAYS = 6;
const options = { weekday: "long" };

const today = new Date();
let todayString = new Intl.DateTimeFormat("en-US", options).format(today);
document.getElementById("today").innerHTML = `Today is <strong>${todayString}</strong>`;

// from CodePen
// next n days
for (let i = 1; i <= numberOfDays; i++) {
    const nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
    const item = document.createElement("li"); // list item
    item.textContent = nextdaystring;
    document.querySelector("ul").appendChild(item);
}