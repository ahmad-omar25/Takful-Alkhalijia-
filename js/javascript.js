/*global $, window, wow*/

$(function () {
    "use strict";
    $(".our-slider").height($(window).height() - $(".main-nav").height());
    $(".comp-slider").height($(window).height() * .5);
    $("body").css({
        paddingTop: $(".main-nav").height()
    });
    $(window).resize(function () {
        $(".our-slider").height($(window).height() - $(".main-nav").height());
        $(".comp-slider").height($(window).height() * .5);
    });
    $(".navbar-toggle").on("click", function () {
        $(".icon-bar").toggleClass("icon-barx");
    });

    $(window).on("load", function () {
        $("body").css("overflow", "auto");
        $(".loader").fadeOut(1000);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > $(window).height() - 200) {
            $(".main-nav").css({
                position: "fixed",
                boxShadow: "0px 0px 10px 0px #000",
                top: "-100px"
            }, 1000);
        } else if ($(window).scrollTop() < $(window).height()) {
            $(".main-nav").css({
                position: "absolute",
                boxShadow: "none",
                top: "0px"
            }, 1000);
        }
    });
    
    $(".verification .toggle").on("click", function () {
        $(".verification").fadeOut(1000);
    });
    
    $(".navbar-nav li #verif, .footer ul #verif2").on("click", function () {
        event.preventDefault();
        $(".verification").fadeIn(500);
    });

});

wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
});
wow.init();