var now = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var checkTime = function() {
  var today = weekday[now.getDay()];
  var timeDiv = document.getElementById('timeDiv');
  var dayOfWeek = now.getDay();
  var hour = now.getUTCHours();
  var minutes = now.getUTCMinutes();

  if (dayOfWeek == 6 || dayOfWeek == 0){
    timeDiv.innerHTML = 'The NYSE is currently closed.';
    timeDiv.className = 'closed';
  } 

  else if (newYear.getDate()) {
    timeDiv.innerHTML = 'The NYSE is currently open.';
    timeDiv.className = 'open';
  }  

  else if ((dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5) && hour >= 14 + minutes == 30 && hour <= 21 + minutes == 0) {
    timeDiv.innerHTML = 'The NYSE is currently open.';
    timeDiv.className = 'open';
  }
  
  else if ((dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5) && hour >= 21 + minutes == 0 && hour <= 14 + minutes == 30) {
    timeDiv.innerHTML = 'The NYSE is currently closed.';
    timeDiv.className = 'closed';
  }
};

var currentDay = weekday[now.getDay()];
var currentDayID = "#" + currentDay; //gets todays weekday and turns it into id
$(currentDayID).toggleClass("today"); //hightlights today in the view hours modal popup

setInterval(checkTime, 0);
checkTime();

var newYear  = new Date('November 10, 2018');