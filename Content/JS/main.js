$('document').ready(function () {
    if ($('.home-page').length > 0) {
        // Event Time Countdown
        let eventTime = setInterval(function () {
            let currentDate = new Date().getTime(),
                eventDate = new Date('Jul 17 2021 19:00:00').getTime(),
                remTime = eventDate - currentDate,
                days = Math.trunc(remTime / (1000 * 60 * 60 * 24)),
                hours = Math.trunc(remTime / (1000 * 60 * 60)),
                minutes = Math.trunc(remTime / (1000 * 60)),
                seconds = Math.trunc(remTime / 1000);

            hours %= 24;
            minutes %= 60;
            seconds %= 60;

            hours = (hours < 10) ? `0${hours}` : hours;
            minutes = (minutes < 10) ? `0${minutes}` : minutes;
            seconds = (seconds < 10) ? `0${seconds}` : seconds;

            document.getElementById('days').innerHTML = days;
            document.getElementById('hours').innerHTML = hours;
            document.getElementById('minutes').innerHTML = minutes;
            document.getElementById('seconds').innerHTML = seconds;
        }, 1000);

        // Countup Timers
        
        

    }
});











