(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $nav = $(".navigation_partial"),
            $splash = $(".splash_partial"),
            $content = $(".page-content"),
            delay = 750,
            href = window.location.pathname;

        //had to explicitly declare this, would not grab functionality from else
        if (href.indexOf("tag") >= 0) {
            $splash.css("display", "none")
            $content.addClass("splash-absent")
            $nav.fadeIn(delay)
        }

        if(href == "/" ) {
            setTimeout(function() {
                window.scrollTo(0, 0);
                $splash.fadeIn(delay * 2);
            }, 0);

            // for scroll triggered splash
            $(window).on("scroll", function() {  
                 $(window).one("scroll", function() { 
                    if(window.pageYOffset > 1 && window.innerWidth > 850) {
                        $splash.fadeOut(delay, function () {
                            $content.addClass("splash-absent")
                            $nav.fadeIn(delay)
                        });
                    }
                });
            });
        } else {
            $splash.css("display", "none")
            $content.addClass("splash-absent")
            $nav.fadeIn(delay)
        }

        //validate abbreviation
        console.log($(".header-text").text().length)
        if ($(".header-text").text().length > 8) {
            $(".header-text").text("BLOG")
            $(".fancy-header .bg-overlay").text("BLOG")
        }

        //alter tag text
        var tagText = $(".tag_partial .page-title").text().toUpperCase();
        $(".tag_partial .page-title").text(tagText)

        //for auto triggered splash
        // setTimeout(function () {
        //     $splash.fadeOut(delay)
        //     setTimeout(function() {
        //         $content.addClass("splash-absent")
        //         $nav.fadeIn(delay/2)
        //     }, delay)
        // }, delay)


        // var $postContent = $(".post-content");
        // $postContent.fitVids();

        // $(".scroll-down").arctic_scroll();

        // $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
        //     e.preventDefault();
        //     $("body").toggleClass("nav-opened nav-closed");
        // });

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);
