const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const now = new Date();
const currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
let minusOne = true;

const checkDate = new Date(`${currentMonth} 24 ${currentYear} 12:42:00 PM`);
if(now > checkDate) {
  currentMonth = currentMonth + 1
  minusOne = false;
}
const monthsaryDateTime = new Date(`${currentMonth} 24 ${currentYear} 12:42:00 PM`);

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

const monthDiff = (d1, d2, minusOne) => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  if(minusOne === true) {
    return (months <= 0 ? 0 : months) - 1
  }

  return months <= 0 ? 0 : months;
}

// Set background month
const monthsaryStartDateTime = new Date("09 24 2019 12:42:00 PM");
year.innerText = monthDiff(monthsaryStartDateTime, monthsaryDateTime, minusOne);

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = monthsaryDateTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);
