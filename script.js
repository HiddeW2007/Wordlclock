// Clock
function updateClock() {
    var now = new Date();
    var clock = document.getElementById("clock");
    var timezone = document.getElementById("timezone").value;

    if (timezone === "local") { //local
        clock.textContent = now.toLocaleTimeString();
    } 

    // Europe

    if (timezone === "Europe/Amsterdam") { // Amsterdam
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Europe/Berlin") { // Berlin
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Europe/Istanbul") { // Istanbul
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "GMT") { // London
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Europe/Moscow") { // Moscow
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Europe/Paris") { // Paris
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Europe/Rome") { // Rome
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }

    // Africa
    if (timezone === "Africa/Accra") { // Ghana - Accra
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Africa/Johannesburg") { // South Africa - Cape Town
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Africa/Niamey") { // Niger - Abuja
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Indian/Antananarivo") { // Madagascar - Antananarivo
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }

    //North America
    if (timezone === "America/Chicago") { // Austin
        clock.textContent = now.toLocaleTimeString("en-US", { timeZone: timezone });
    }
    if (timezone === "America/Denver") { // Utah - Salt Lake City
        clock.textContent = now.toLocaleTimeString("en-US", { timeZone: timezone });
    }
    if (timezone === "America/New_York") { // New York
        clock.textContent = now.toLocaleTimeString("en-US", { timeZone: timezone });
    }
    if (timezone === "America/Halifax") { // Nova Scotia
        clock.textContent = now.toLocaleTimeString("en-US", { timeZone: timezone });
    }
    if (timezone === "America/St_Johns") { // Saint John's
        clock.textContent = now.toLocaleTimeString("en-US", { timeZone: timezone });
    }
    if (timezone === "America/Anchorage") { // Alaska
        clock.textContent = now.toLocaleTimeString("en-US", { timeZone: timezone });
    }  
    if (timezone === "America/Godthab") { // Alaska
        clock.textContent = now.toLocaleTimeString("en-US", { timeZone: timezone });
    }  

    //Asia

    if (timezone === "Asia/Dubai") { // Gulf Standard Time
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Asia/Kolkata") { // Indian Standard Time
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Asia/Tokyo") { // Japan Standard Time
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Asia/Seoul") { // Korea Standard Time
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Asia/Shanghai") { // China Standard Time
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Asia/Dhaka") { // Bangladesh Standard Time
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Asia/Riyadh") { // Arabian Standard Time
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Australia/Sydney") { // Australian Eastern Standard Time
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Europe/Moscow") { // Moscow Standard Time
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Asia/Karachi") { // Pakistan Standard Time
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }

    //South America
    if (timezone === "America/Argentina/Buenos_Aires") { // Brasil
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "America/Bogota") { // Colombia 
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "America/Halifax") { // Atlantic 
        clock.textContent = now.toLocaleTimeString("en-US", { timeZone: timezone });
    }

    // Australia

    if (timezone === "Pacific/Guadalcanal") { // Arabian Standard Time
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Australia/Adelaide") { // Australian Eastern Standard Time
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Australia/Perth") { // Moscow Standard Time
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
    if (timezone === "Indian/Christmas") { // Pakistan Standard Time
        clock.textContent = now.toLocaleTimeString("GMT", { timeZone: timezone });
    }
        
}


const EU_COUNTRIES = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden"];

const main = async () => {
  placeLocalTime(document.querySelector('#timezone'));
};

const placeLocalTime = async (selectEl) => {
  const userCountry = await getUserCountry();
  if (EU_COUNTRIES.includes(userCountry)) {
    const localOption = selectEl.querySelector('option[value="local"]'),
      europeOptgroup = selectEl.querySelector('#europe-optgroup');
    europeOptgroup.prepend(localOption);
  }
};



const getUserCountry = async () => {
  try {
    const response = await fetch('https://geolocation-db.com/json/', {
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return response.country_name;
  } catch (e) {
  
  }
  return 'Netherlands'; // Default to Germany... in the case of this snippet
};

main(); // Call main

function changeTimezone() {
    updateClock();
}

setInterval(updateClock, 1000);

// Timer
var countdownTimer;
var timerDuration;
var timerDisplay;
var startTime;
var elapsedTime = 0;

function changeValue(inputId, action) {
  var input = document.getElementById(inputId);
  var value = parseInt(input.value) || 0;

  if (action === "up") {
    value++;
  } else if (action === "down") {
    value--;
  }

  if (value < 0) {
    value = 0;
  }

  input.value = value;
}

function resetTimer() {
  clearInterval(countdownTimer); // Stop the timer
  timerDisplay.textContent = "00:00:00:00"; // Reset the timer display
  resetInputFields(); // Reset the input fields and placeholders
  elapsedTime = 0; // Reset the elapsed time
}



function startTimer() {
  var hoursInput = document.getElementById("hours");
  var minutesInput = document.getElementById("minutes");
  var secondsInput = document.getElementById("seconds");
  var millisecondsInput = document.getElementById("milliseconds");

  var hours = parseInt(hoursInput.value) || 0;
  var minutes = parseInt(minutesInput.value) || 0;
  var seconds = parseInt(secondsInput.value) || 0;
  var milliseconds = parseInt(millisecondsInput.value) || 0;

  // Valideer de ingevoerde waarden
  if (hours < 0 || minutes < 0 || seconds < 0 || milliseconds < 0) {
    alert("Negatieve waarden zijn niet toegestaan.");
    return;
  }
  

  if (minutes >= 60 || seconds >= 60 || milliseconds >= 1000) {
    alert("Ongeldige waarde voor minuten, seconden of milliseconden.");
    return;
  }

  timerDuration = (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000) + milliseconds;
  startTime = Date.now();

  clearInterval(countdownTimer);
  timerDisplay = document.getElementById("timer-display");
  countdownTimer = setInterval(updateTimer, 10);
}



function updateTimer() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  var remainingTime = timerDuration - elapsedTime;
  if (remainingTime <= 0) {
    clearInterval(countdownTimer);
    timerDisplay.textContent = "Timer is afgelopen!";
    playAlertSound();

    // Reset de invoervelden en toon de placeholders
    resetInputFields();
  } else {
    timerDisplay.textContent = formatTime(remainingTime);

    // Werk de invoervelden bij
    updateInputFields(remainingTime);
  }
  var remainingTime = timerDuration - elapsedTime;
  if (remainingTime <= 0) {
    clearInterval(countdownTimer);
    timerDisplay.textContent = "Timer ended!";
    playAlertSound();
    alert("Timer ended!"); // Alert toegevoegd
  } else {
    timerDisplay.textContent = formatTime(remainingTime);
  }
}

if (remainingTime <= 0) {
  clearInterval(countdownTimer);
  timerDisplay.textContent = "Timer is afgelopen!";
  playAlertSound();
  showNotification();
}


function resetInputFields() {
  var hoursInput = document.getElementById("hours");
  var minutesInput = document.getElementById("minutes");
  var secondsInput = document.getElementById("seconds");
  var millisecondsInput = document.getElementById("milliseconds");

  hoursInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";
  millisecondsInput.value = "";

  hoursInput.placeholder = "0";
  minutesInput.placeholder = "0";
  secondsInput.placeholder = "0";
  millisecondsInput.placeholder = "0";


}


  function updateInputFields(remainingTime) {
    var hoursInput = document.getElementById("hours");
    var minutesInput = document.getElementById("minutes");
    var secondsInput = document.getElementById("seconds");
    var millisecondsInput = document.getElementById("milliseconds");
  
    var hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    var seconds = Math.floor((remainingTime / 1000) % 60);
    var milliseconds = Math.floor((remainingTime % 1000) / 10);
  
    hoursInput.value = hours !== 0 ? hours : "";
    minutesInput.value = minutes !== 0 ? minutes : "";
    secondsInput.value = seconds !== 0 ? seconds : "";
    millisecondsInput.value = milliseconds !== 0 ? milliseconds : "";
  
    hoursInput.placeholder = hours !== 0 ? "" : "0";
    minutesInput.placeholder = minutes !== 0 ? "" : "0";
    secondsInput.placeholder = seconds !== 0 ? "" : "0";
    millisecondsInput.placeholder = milliseconds !== 0 ? "" : "0";
  }
  


function showPlaceholder(input) {
  input.placeholder = input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function formatTime(duration) {
  var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  var minutes = Math.floor((duration / (1000 * 60)) % 60);
  var seconds = Math.floor((duration / 1000) % 60);
  var milliseconds = Math.floor((duration % 1000) / 10);

  return padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds) + ":" + padZero(milliseconds);
}

function padZero(value) {
  return value < 10 ? "0" + value : value;
}

function playAlertSound() {
  var audio = new Audio("alert_sound.mp3"); // Voeg hier het pad naar je gewenste geluidsbestand toe
  audio.play();
}

// Luister naar de visibilitychange-gebeurtenis van de pagina
document.addEventListener("visibilitychange", handleVisibilityChange);

// Hervat de timer wanneer het tabblad weer zichtbaar is
function handleVisibilityChange() {
  if (!document.hidden && countdownTimer && elapsedTime < timerDuration) {
    clearInterval(countdownTimer);
    countdownTimer = setInterval(updateTimer, 10);
  }
}


// form 
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "One moment please..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong, please try again later.";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  //stopwatch

  