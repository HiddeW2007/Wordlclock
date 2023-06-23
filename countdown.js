var countdownInterval;
var countdownDate;
var timerElement = document.querySelector('.timer');
var daysElement = document.getElementById('days');
var hoursElement = document.getElementById('hours');
var minutesElement = document.getElementById('minutes');
var secondsElement = document.getElementById('seconds');
var startButton = document.querySelector('.coustart');
var resetButton = document.querySelector('.coureset');
var dateInput = document.querySelector('#dateInput');
var audioInput = document.querySelector('#audioInput');
var selectedFileElement = document.getElementById('selectedFile');
var isCountdownStarted = false;
var audioFile = null; // Variabele om geselecteerd audiobestand bij te houden

function startCountdown() {
  var inputDate = new Date(dateInput.value);
  if (isNaN(inputDate)) {
    alert("Invalid date!");
    return;
  }

  countdownDate = inputDate.getTime();
  clearInterval(countdownInterval); // Reset eventueel actieve countdown

  countdownInterval = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      timerElement.textContent = "Countdown Ended!";
      updateUnits(0, 0, 0, 0);
      playAudio();
      return;
    }

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' +
      formatTime(seconds);
    
    updateUnits(days, hours, minutes, seconds);
  }, 1000);

  isCountdownStarted = true; // Markeren dat de countdown is gestart
}

function resetCountdown() {
  clearInterval(countdownInterval);
  timerElement.textContent = "00:00:00:00";
  daysElement.textContent = "00";
  hoursElement.textContent = "00";
  minutesElement.textContent = "00";
  secondsElement.textContent = "00";
  dateInput.value = "";
  isCountdownStarted = false; // Reset de variabele voor de countdown-startstatus
}

function formatTime(time) {
  return time.toString().padStart(2, '0');
}

function updateUnits(days, hours, minutes, seconds) {
  daysElement.textContent = days;
  hoursElement.textContent = formatTime(hours);
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);
}

function playAudio() {
  if (isCountdownStarted && audioFile) {
    var audioURL = URL.createObjectURL(audioFile);
    var audio = new Audio(audioURL);
    audio.play();
  }
}

startButton.addEventListener('click', function() {
  if (!isCountdownStarted) {
    startCountdown();
  }
});

resetButton.addEventListener('click', resetCountdown);

audioInput.addEventListener('change', function(event) {
  audioFile = event.target.files[0];
  if (audioFile) {
    selectedFileElement.textContent = "Selected File: " + audioFile.name;
  } else {
    selectedFileElement.textContent = "No file selected";
  }
});



//

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
