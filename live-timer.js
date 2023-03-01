// Get a reference to the timer element
var timer = document.getElementById("timer");

// Set the initial timer value
var seconds = 0;
var minutes = 0;
var hours = 0;

// Update the timer display every second
setInterval(function() {
  // Increment the timer
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  // Format the timer display
  var secStr = padNumber(seconds);
  var minStr = padNumber(minutes);
  var hourStr = padNumber(hours);
  var timeStr = hourStr + ":" + minStr + ":" + secStr;

  // Update the timer element
  timer.innerText = timeStr;
}, 1000);

// Helper function to pad a number with leading zeros
function padNumber(num) {
  var str = num.toString();
  if (str.length < 2) {
    str = "0" + str;
  }
  return str;
}
