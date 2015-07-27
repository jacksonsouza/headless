(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        //this scroll functionality should only be active
        //on the home page, not mobile or other pages
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 0);


        var $nav = $(".navigation_partial"),
            $splash = $(".splash_partial"),
            $content = $(".page-content"),
            delay = 1000;

        $(window).on("scroll", function() {  
             $(window).one("scroll", function() { 
                if(window.pageYOffset > 1) {
                    $splash.fadeOut(delay)
                    setTimeout(function() {
                        $content.addClass("splash-absent")
                        $nav.fadeIn(delay / 2)
                    }, delay)
                }
            });
        });

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
