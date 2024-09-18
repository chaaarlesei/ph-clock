const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

const hourNumbersContainer = document.getElementById("hour-numbers");
const minuteNumbersContainer = document.getElementById("minute-numbers");
const secondNumbersContainer = document.getElementById("second-numbers");

function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const displayedHour = hours === 0 ? 12 : hours;
  updateNumbers(hourNumbersContainer, displayedHour, 3); 
  updateNumbers(minuteNumbersContainer, minutes, 5); 
  updateNumbers(secondNumbersContainer, seconds, 5); 
}

function updateNumbers(container, number, repetitions) {
  container.innerHTML = ""; 
  for (let i = 0; i < repetitions; i++) {
    const span = document.createElement("span");
    span.textContent = number;
    span.className = "hand-number";
    container.appendChild(span);
  }
}

setInterval(setClock, 1000);
setClock(); 
