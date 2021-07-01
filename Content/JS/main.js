// Counter Section
let coursesCounter = document.getElementById('courses'),
    expertCounter = document.getElementById('expert'),
    happyCounter = document.getElementById('happy'),
    awardsCounter = document.getElementById('awards'),
    mainCounterOffset = $('.main-counter').offset().top,
    coursesTimer,
    expertTimer,
    happyTimer,
    awardsTimer;


coursesCounter.textContent = 0;
expertCounter.textContent = 0;
happyCounter.textContent = 0;
awardsCounter.textContent = 0;

function countCoursesUp(){
    if(coursesCounter.textContent < 768){
        coursesCounter.textContent++;
    }else{
        clearInterval(this);
    }
}

function countExpertUp(){
    if(expertCounter.textContent < 120){
        expertCounter.textContent++;
    }else{
        clearInterval(this);
    }
}

function countHappytUp(){
    if(happyCounter.textContent < 8300){
        happyCounter.textContent++;
    }else{
        clearInterval(this);
    }
}

function countAwardUp(){
    if(awardsCounter.textContent < 32){
        awardsCounter.textContent++
    }else{
        clearInterval(this);
    }
}

$(window).scroll(function(){
    let windowScrollTop = $(window).scrollTop();
    if(windowScrollTop >= mainCounterOffset){
        coursesTimer = setInterval(countCoursesUp, 1);
        expertTimer = setInterval(countExpertUp, 1);
        happyTimer = setInterval(countHappytUp, 1);
        awardsTimer =setInterval(countAwardUp, 1)
    }else{
        coursesCounter.textContent = 0;
        expertCounter.textContent = 0;
        happyCounter.textContent = 0;
        awardsCounter.textContent = 0;
    }
});

// Email Validation
let regex = /^[a-z0-9]*@[a-z]*\.[a-z]{2,3}$/,
    emailElement = document.getElementById('email'),
    subscribeBtn = document.getElementById('subscribe'),
    mainInput = document.querySelector('.main-subscribe__input');
    
subscribeBtn.disabled = true;
$('#alert-email').css('display', 'none');

emailElement.addEventListener('input',function(){
    
    if(regex.test(emailElement.value) === true){
        $('.main-subscribe__input').css('border', '1px solid green');
        subscribeBtn.disabled = false;
        $('#alert-email').slideUp(100);
    }else if(emailElement.value === ''){
            $('.main-subscribe__input').css('border', '1px solid red');
            subscribeBtn.disabled = true;
    }
});

emailElement.addEventListener('blur', function(){
    if(regex.test(emailElement.value) === false){
        $('.main-subscribe__input').css('border', '1px solid red');
        subscribeBtn.disabled = true;
        $('#alert-email').slideDown(100);
    }
});


// Event Count Down Time
(function event(){
    let currentDate = new Date(),
        eventDate = new Date(2021, 6 , 14),
        currentTime = currentDate.getTime(),
        eventTime = eventDate.getTime(),
        remTime = eventTime - currentTime,
        seconds = Math.floor(remTime / 1000),
        minutes = Math.floor(seconds / 60),
        hours = Math.floor(minutes / 60),
        days = Math.floor(hours / 24);

    
    seconds %= 60;
    minutes %=60;
    hours %= 24;
    
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    hours = (hours < 10) ? `0${hours}` : hours;

    $('#day').html(days);
    $('hour').html(hours);
    $('#minute').html(minutes);
    $('#second').html(seconds);
    setTimeout(event, 1000);

})();