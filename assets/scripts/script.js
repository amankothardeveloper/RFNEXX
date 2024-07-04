$(document).ready(function () {
    let windowHeight = $(".hero-banner-sec").outerHeight() - $(".site_header").outerHeight();
    function headerScrollState() {
        let scroll = $(window).scrollTop();
        console.log(scroll, "==================", windowHeight);
        if (scroll >= 10 && scroll < windowHeight) {
            $(".site_header").addClass("actived");
        } else {
            $(".site_header").removeClass("actived");
        }
        if (scroll >= windowHeight) {
            $(".site_header").addClass("active");
        } else {
            $(".site_header").removeClass("active");
        }
    }
    headerScrollState();
    $(window).scroll(function () {
        headerScrollState();
    });
});

