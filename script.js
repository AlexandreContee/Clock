const clockEl = document.querySelector('#clock')

function addZero(number) {
  if (number < 10) {
    return `0${number}`;
  } else {
    return number;
  }
}

setInterval(function () {
  let date = new Date();
  let hour =  addZero(date.getHours());
  let minute = addZero(date.getMinutes());
  let second = addZero(date.getSeconds());
  clockEl.textContent = `${hour}:${minute}:${second}`;
}, 1000);
