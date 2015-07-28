(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $nav = $(".navigation_partial"),
            $splash = $(".splash_partial"),
            $content = $(".page-content"),
            delay = 750;

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
