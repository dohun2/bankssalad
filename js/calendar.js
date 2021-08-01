let date = new Date();

const renderCalendar = () => {

const year = date.getFullYear();
const month = date.getMonth();

document.querySelector('.month-text').textContent = `${year}년 ${month + 1}월`;

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

const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(nowMonthDate);
  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
                      ? 'this'
                      : 'other';

    dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
  })

document.querySelector('.dates').innerHTML = dates.join('');
}

renderCalendar();