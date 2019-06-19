$(document).ready(function() {

    //Preloader
    $(window).on("load", function() {
        preloaderFadeOutTime = 2000;

        function hidePreloader() {
            var preloader = $('.preloader');
            preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    });
});