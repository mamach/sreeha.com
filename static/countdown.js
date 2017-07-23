var endTime = "2017-12-19";
var clock = document.getElementById('clockdiv');
var daysSpan = clock.querySelector('.days');
var hoursSpan = clock.querySelector('.hours');
var minutesSpan = clock.querySelector('.minutes');
var secondsSpan = clock.querySelector('.seconds');

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function updateClock() {
  var t = getTimeRemaining(endTime);
  daysSpan.innerHTML = t.days;
  hoursSpan.innerHTML = t.hours;
  minutesSpan.innerHTML = t.minutes;
  // secondsSpan.innerHTML = t.seconds;
  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  if (t.total <= 0) {
    clearInterval(timeinterval);
  }
}

function initializeClock(id) {
  var clock = document.getElementById(id);
  var timeinterval = setInterval(updateClock, 1000);
}

// updateClock();
initializeClock('clockdiv', endTime);
