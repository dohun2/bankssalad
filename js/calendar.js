const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();

const pastMonth = new Date(year, month, 0);
const nowMonth = new Date(year, month + 1, 0);

const pastMonthDate = pastMonth.getDate();
const pastMonthDay = pastMonth.getDay();

const nowMonthDate = nowMonth.getDate();
const nowMonthDay = nowMonth.getDay();

const pastMonthDates = [];
const nowMonthDates = [...Array(nowMonthDate + 1).keys()].slice(1);
const futureMonthDates = [];

if (pastMonthDay !== 6) {
  for (let i = 0; i < pastMonthDay + 1; i++) {
    pastMonthDates.unshift(pastMonthDate - i);
  }
}

for (let i = 1; i < 7 - nowMonthDay; i++) {
  futureMonthDates.push(i);
}

const dates = pastMonthDates.concat(nowMonthDates, futureMonthDates);

dates.forEach((date, i) => {
  dates[i] = `<div class="date">${date}</div>`;
})

document.querySelector('.dates').innerHTML = dates.join('');