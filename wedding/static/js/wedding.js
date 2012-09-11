$(function() {    
    if($('#countdown').length > 0)  {
        calculate_time();
    }

    $('.detroit-nav').click(function() {
        var go = $(this).data('nav');
        console.log($('#'+go).offset().top);
        $('html, body').animate({
            scrollTop: $('#'+go).offset().top
        }, 500);
    });

    $('#scrolltop').click(function() {
        $('html, body').animate({
            scrollTop: $('#detroit-top').offset().top
        }, 300);
    });

    $(window).scroll(function() {
        var top = $('#detroit-top').offset().top;
        if(top < $(this).scrollTop()) {
            $('#scrolltop').show();
        } else {
            $('#scrolltop').hide();
        }
    });

    $('html, body').animate({
        scrollTop: $('.top-element').offset().top
    }, 800);
});

function calculate_time() {
    var d = new Date();
    var today = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds());
    var wedding = new Date(2012, 8, 14, 16, 0);
    var dif = get_time_difference(today,wedding);
    var t = double_digits(dif.days) + ':' + double_digits(dif.hours) + ':'+double_digits(dif.minutes)+':'+double_digits(dif.seconds);
    $('#countdown').text(t);
    var time = setTimeout("calculate_time()", 1000);
}

function get_time_difference(earlierDate,laterDate) {
    var nTotalDiff = laterDate.getTime() - earlierDate.getTime();
    var oDiff = new Object();
    oDiff.days = Math.floor(nTotalDiff/1000/60/60/24);
    nTotalDiff -= oDiff.days*1000*60*60*24;
    oDiff.hours = Math.floor(nTotalDiff/1000/60/60);
    nTotalDiff -= oDiff.hours*1000*60*60;
    oDiff.minutes = Math.floor(nTotalDiff/1000/60);
    nTotalDiff -= oDiff.minutes*1000*60;
    oDiff.seconds = Math.floor(nTotalDiff/1000);
    return oDiff;
}

function double_digits(n) {
    if(n < 10) {
        n = '0' + n
    }
    return n;
}