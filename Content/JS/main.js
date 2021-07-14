$('document').ready(function () {
    // Menu Icon changes to cross Icon and display a white background on the page with links
    let menuResponsive = function () {
        $('#menuIcon').click(function () {
            $(this).toggleClass('icon-cross');
            $(this).css('z-index', '99999');
            $('.navbar-collapse').css('z-index', '99999')
            if ($(this).hasClass('icon-cross')) {
                $('body').css('overflow', 'hidden');
                $('.white-overlay').slideDown(500, function () {
                    $('.navbar-collapse').slideDown(500);
                });
            } else {
                $('.navbar-collapse').slideUp(500, function () {
                    $('.white-overlay').slideUp(500, function () {
                        $('body').css('overflow', 'auto');
                    });
                });
            }
        });
    }
    /*************************************************************************************************/
    // Footer Links collapse in responsive media
    function media(mq) {
        if (mq.matches) {
            $('.header-collapse ul').css('display', 'none');
            $('.icon-arrow-down').css('display', 'block');
            $('.header-collapse').css('cursor', 'pointer')
            $('.header-collapse').click(function () {
                $(this).children('ul').slideToggle(500);
                $(this).parent().siblings().children('.header-collapse').children('ul').slideUp(500);
            });
        } else {
            $('.header-collapse ul').css('display', 'block');
            $('.icon-arrow-down').css('display', 'none');
            $('.header-collapse').css('cursor', 'default');

        }
    }

    // Email Validation
    let emailValidate = function () {
        let emailElement = document.getElementById('email'),
            submitBtn = document.getElementById('submit'),
            alertEmail = document.getElementById('alertEmail'),
            emailFormElement = document.getElementById('emailForm'),
            regex = /^[a-z0-9]*@[a-z0-9]*\.[a-z]{2,4}$/;

        alertEmail.style.display = 'none';
        submitBtn.disabled = true;

        emailElement.addEventListener('input', function () {
            if (regex.test(emailElement.value) !== true) {
                $(alertEmail).slideDown(200);
                emailFormElement.style.border = '1px solid red';
                submitBtn.disabled = true;
            } else {
                $(alertEmail).slideUp(200);
                emailFormElement.style.border = '1px solid green';
                submitBtn.disabled = false;
            }
        });

    }
    /************************************************************************************************************/
    // Home Page
    if ($('.home-page').length > 0) {
        // Change Icon of Menu
        menuResponsive();
        // Event Time Countdown
        let currentDate,
            eventDate;


        function eventTime() {
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
        }

        if (eventDate < currentDate) {
            document.querySelector('.event__info').innerHTML = `There's No Event Available!!!`;
            $('.event__info').css({
                fontSize: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '198px'
            });
        } else {
            console.log(setInterval(eventTime, 1000));
        }



        // Countup Timers
        let counters = document.querySelectorAll('#counters'),
            speed = 3000,
            increment;

        let countUp = function () {
            counters.forEach((counter) => {
                let target = Number(counter.getAttribute('data-number'));
                increment = Number(target / speed);

                if (Number(counter.textContent) < target) {
                    counter.textContent++;
                }
            });
            setTimeout(countUp, Number(increment));
        }

        $(window).scroll(function () {
            let scrollTop = Math.trunc($(window).scrollTop()),
                counterOffset = Math.trunc($('.home-page__counter').offset().top),
                subscribeOffset = Math.trunc($('.generic-subscribe').offset().top);

            if (scrollTop >= counterOffset && scrollTop < subscribeOffset) {
                countUp();
            }
        });

        // Email Validation
        emailValidate();

        // Footer Slide down list
        let mq = window.matchMedia('(max-width: 481px)');
        window.addEventListener('resize', media(mq));
    }
    /************************************************************************************************************/
    // Course Page
    if ($('.course-page').length > 0) {
        // Change Icon of Menu
        menuResponsive();

        // Email Validation
        emailValidate();

        // Footer Slide down list
        let mq = window.matchMedia('(max-width: 481px)');
        window.addEventListener('resize', media(mq));
    }


});











