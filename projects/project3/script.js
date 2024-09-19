const clock1 = document.getElementById('clock');
const clock2 = document.querySelector('.clock2')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock1.innerHTML = date.toLocaleTimeString();
  clock2.innerHTML = date.toDateString();
}, 1000);

