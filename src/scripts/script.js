//header
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var opacity = 0;
        if (scroll < 100) {
            opacity = scroll / 100;
            $("#header-container").css('background-color', 'rgba(255, 255,255,' + opacity + ')');
        }
        else {
            opacity = 1;
            $("#header-container").css('background-color', 'rgba(255,255,255,' + opacity + ')');
        }
    })

});