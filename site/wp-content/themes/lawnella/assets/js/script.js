(function($) {
    "use strict";

    $(document).ready(function() {

        $('.law_project_container').isotope({
            itemSelector: '.project-wrapper',
        });

        // filter items on button click
        $('.law_project_filter').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $('.law_project_container').isotope({ filter: filterValue });
            $('.law_project_filter li').removeClass('current');
            $(this).addClass('current');
        });
    });



    $('#onepage_header_enable').on('click', 'li a', function() {
        $('.bsnav-mobile').removeClass('in');
    });
       



    $(function() {
        $(document).ready(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('#scroll').fadeIn();
                } else {
                    $('#scroll').fadeOut();
                }
            });
            $('#scroll').click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 2000);
                return false;
            });
        });
    });
    /*-------counter---js---------*/
    jQuery(window).scroll(startCounter);

    function startCounter() {
        if (jQuery(window).scrollTop() > 0) {
            jQuery(window).off("scroll", startCounter);
            jQuery('.symbolwithout').each(function() {
                var $this = jQuery(this);
                jQuery({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter) + '');
                    }
                });
            });
        }
        if (jQuery(window).scrollTop() > 0) {
            jQuery(window).off("scroll", startCounter);
            jQuery('.symbol').each(function() {
                var $this = jQuery(this);
                jQuery({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter) + '+');
                    }
                });
            });
        }
    }
    //Javascript
    $('.single_items').owlCarousel({
        items: 1,
        loop: false,
        margin: 0,
        lazyLoad: true,
        merge: true,
        video: true,
        nav: true,
        dots: true,
        center: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 5000,
        navText: ['<span class="clearfix prev icon-next"></span>', '<span class="clearfix icon-next"></span>'],
        responsive: {
            480: {
                items: 1
            },
            678: {
                items: 1
            },
            960: {
                items: 1
            }
        }
    });
    $(function() {
        $("#project_estimate").selectmenu();
        $("#contactpage").selectmenu();
        $("#service").selectmenu();
        $("#servicetwo").selectmenu();
        $("#service02").selectmenu();
        $("#servicesingleselect").selectmenu();
        $("#cat").selectmenu();
        $("#archives-dropdown--1").selectmenu();
        $("#categories-dropdown--1").selectmenu();
        $(".orderby").selectmenu();


        $("#datepicker").datepicker();

    });

    $(document).ready(function() {

        var CurrentUrl = document.URL;
        var CurrentUrlEnd = CurrentUrl.split('/').filter(Boolean).pop();
        console.log(CurrentUrlEnd);
        $("#primary_menu .nav-item a").each(function() {
            var ThisUrl = $(this).attr('href');
            var ThisUrlEnd = ThisUrl.split('/').filter(Boolean).pop();

            if (ThisUrlEnd == CurrentUrlEnd) {
                $(this).closest('.nav-item').addClass('current-page-active')
            }
        });

    });



    // Show the first tab and hide the rest
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab_content').hide();
    $('.tab_content:first-child').show();
    // Click function
    $('#tabs-nav li').click(function() {
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').hide();
        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });
    (function($) {
        $('.accordion > li:eq(0) h3').addClass('active').next().slideDown();
        $('.accordion h3').click(function(j) {
            var dropDown = $(this).closest('li').find('p');
            $(this).closest('.accordion').find('p').not(dropDown).slideUp();
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).closest('.accordion').find('a.active').removeClass('active');
                $(this).addClass('active');
            }
            dropDown.stop(false, true).slideToggle();
            j.preventDefault();
        });
    })(jQuery);
    (function() {
        var accordion = {
            init: function() {
                $('dd').filter(':nth-child(n+4)').addClass('hide');
                $('dt:first-child').addClass('active');
                $('dt').on('click', this.show);
            },
            show: function() {
                var $this = $(this),
                    $ddToShow = $this.next(),
                    $ddToClose = $this.next().siblings('dd');
                $this.addClass('active');
                $this.siblings('dt').removeClass('active');
                $ddToShow.slideDown(200);
                accordion.hide($ddToClose);
            },
            hide: function(elem) {
                elem.slideUp(200);
            }
        };
        accordion.init();
    })();
    // preloader js
    function prealoader() {
        if ($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500);
        }
    }
    jQuery(window).on('load', function() {
        (function($) {
            prealoader();
        })(jQuery);
    });
})(window.jQuery);