var stopwatch;
    var startTime;
    var isRunning = false;

    var timerElement = document.querySelector('.timer');
    var startButton = document.querySelector('.start');
    var stopButton = document.querySelector('.stop');
    var resetButton = document.querySelector('.reset');

    function formatTime(milliseconds) {
      var hours = Math.floor(milliseconds / 3600000);
      var minutes = Math.floor((milliseconds % 3600000) / 60000);
      var seconds = Math.floor((milliseconds % 60000) / 1000);
      var ms = milliseconds % 1000;

      return (
        padZero(hours, 2) +
        ':' +
        padZero(minutes, 2) +
        ':' +
        padZero(seconds, 2) +
        '.' +
        padZero(ms, 3)
      );
    }

    function padZero(num, size) {
      var s = num + '';
      while (s.length < size) {
        s = '0' + s;
      }
      return s;
    }

    function updateTimer() {
      var elapsed = Date.now() - startTime;
      timerElement.textContent = formatTime(elapsed);
    }

    function startTimer() {
      if (!isRunning) {
        startTime = Date.now() - (stopwatch || 0);
        stopwatch = setInterval(updateTimer, 10);
        isRunning = true;
      }
    }

    function stopTimer() {
      if (isRunning) {
        clearInterval(stopwatch);
        stopwatch = null;
        isRunning = false;
      }
    }

    function resetTimer() {
      stopTimer();
      timerElement.textContent = formatTime(0);
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);

    //side
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }


      //countdown
