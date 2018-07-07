var dateNow = new Date();
var dateLaunch = new Date(2018, 7, 1, 9, 0, 0, 0);
var secondsBeforeLaunch = (dateLaunch - dateNow) / 1000;

if (secondsBeforeLaunch <= 0) {
    showFinalScene();
}

var clock = $('#launch-countdown').FlipClock(secondsBeforeLaunch, {
    clockFace: 'DailyCounter',
    countdown: true
});

setTimeout(function () {
    clock.stop();
    $('#launch-countdown').fadeOut();
    var video = $("#video");
    video.attr('src', "content/launch.mp4");
    video[0].load();
    prepareFinalCut();
}, (secondsBeforeLaunch - 10) * 1000);

function prepareFinalCut() {
    setTimeout(function () {
        showFinalScene();
    }, 60 * 1000);
}

function showFinalScene() {
    $("#video").fadeOut();
    $(".description").fadeOut();
    $("#live_message").fadeIn();
}