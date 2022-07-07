! function(l) {
    "use strict";
    setTimeout(function() {
        0 < l(".preloader").length && l(".preloader").removeClass("show")
    }, 1), l(window).scroll(function() {
        110 < l(this).scrollTop() ? l("header").addClass("fixed-top") : l("header").removeClass("fixed-top")
    }), l("nav ul li:first-child").addClass("active");
    var t = l("nav ul li a, .slider-btn .btn");
    t.click(function(e) {
        // e.preventDefault(),
        l("body,html").animate({
            scrollTop: l(this.hash).offset().top - 110
        }, 500)
    }), l(window).scroll(function() {
        var e = l(this).scrollTop();
        t.each(function() {
            l(this.hash).offset().top - 111 <= e && (l(this).parent().addClass("active"), l(this).parent().siblings().removeClass("active"))
        })
    }), l("nav > ul").slicknav({
        label: "",
        prependTo: ".mobile-menu",
        closeOnClick: !0
    }), l(".offcanvas-bars").on("click", function() {
        return l(".offcanvas, .offcanvas-overlay").addClass("show"), !1
    }), l(".offcanvas-times, .offcanvas-overlay").on("click", function() {
        return l(".offcanvas, .offcanvas-overlay").removeClass("show"), !1
    }), l("[data-background]").each(function() {
        l(this).css("background-image", "url(" + l(this).attr("data-background") + ")")
    }), l(".slider-carousel").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !1,
        autoplay: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1e3: {
                items: 1
            }
        }
    }), l(".popup-video").magnificPopup({
        type: "iframe"
    }), (new WOW).init(), l(".popup-img").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        }
    }), l(".portfolio-filter li:first-child").addClass("active");
    var o = l(".portfolio-list").imagesLoaded(function() {
        o.isotope({
            itemSelector: ".col-lg-4",
            percentPosition: !0,
            masonry: {
                columnWidth: ".col-lg-4"
            }
        }), l(".portfolio-filter").on("click", "li", function() {
            var e = l(this).attr("data-filter");
            o.isotope({
                filter: e
            }), l("li").removeClass("active"), l(this).addClass("active")
        })
    });
    l(".cta").parallax("50%", .4), l(".single-counter span").counterUp({
        delay: 10,
        time: 1e3
    }), l(".testimonials-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !1,
        autoplay: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    }), l(function() {
        var o = l(".contact-form form"),
            s = l(".form-messages");
        l(o).submit(function(e) {
            e.preventDefault();
            var t = l(o).serialize();
            l.ajax({
                type: "POST",
                url: l(o).attr("action"),
                data: t
            }).done(function(e) {
                l(s).removeClass("error"), l(s).addClass("success"), l(s).text(e), l("input, textarea").val("")
            }).fail(function(e) {
                l(s).removeClass("success"), l(s).addClass("error"), "" !== e.responseText ? l(s).text(e.responseText) : l(s).text("Oops! An error occured and your message could not be sent.")
            })
        })
    }), l.scrollUp({
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: '<i class="far fa-chevron-up"></i>',
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    })
}(jQuery)