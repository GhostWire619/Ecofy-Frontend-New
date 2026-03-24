(function($) {
    "use strict";




    function lawnella_blogcarousel_box() {
        /*-----------------------------
      feature_strories
    -----------------------------*/

        var swiper = new Swiper('.blog_slider_three', {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                240: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                540: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });
    }

    function lawnella_tab_box() {
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
    }
    function lawnella_faqs() {
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
    })();}

    function lawnella_client_logo() {
    $('.client_logo').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        lazyLoad: true,
        merge: true,
        video: true,
        nav: true,
        dots: true,
        center: false,
        smartSpeed: 700,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: ['<span class="clearfix prev icon-next"></span>', '<span class="clearfix icon-next"></span>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            678: {
                items: 2,
                autoplay: false
            },
            900: {
                items: 3
            },
            1200: {
                items: 4

            }
        }
    });
    }

    function lawnella_feature_box_one() {
    $('.four-items-two').owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        lazyLoad: true,
        merge: true,
        video: true,
        nav: true,
        dots: true,
        center: false,
        smartSpeed: 700,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: ['<span class="clearfix prev icon-next"></span>', '<span class="clearfix icon-next"></span>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            678: {
                items: 2,
                autoplay: false
            },
            960: {
                items: 3,
                margin: 50,
            },
            1200: {
                items: 4,
                margin: 50,
            }
        }
    });
    }

    function lawnella_feature_box_two() {
        $('.four-items').owlCarousel({
            items: 1,
            loop: true,
            margin: 2,
            lazyLoad: true,
            merge: true,
            video: true,
            nav: true,
            dots: true,
            center: false,
            smartSpeed: 700,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navText: ['<span class="clearfix prev icon-next"></span>', '<span class="clearfix icon-next"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                678: {
                    items: 2,
                    autoplay: false
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
        }


        function lawnella_before_after_carousel() {
        $('.single_item_center').owlCarousel({
            items: 1,
            loop: true,
            margin: 60,
            lazyLoad: true,
            merge: true,
            video: true,
            nav: false,
            dots: true,
            center: true,
            smartSpeed: 700,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navText: ['<span class="clearfix prev icon-next"></span>', '<span class="clearfix icon-next"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                678: {
                    items: 1,
                    autoplay: false
                },
                860: {
                    items: 1
                },
                1100: {
                    items: 1
                }
            }
        });
    }

    function lawnella_two_items() {
    $('.two_items').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        lazyLoad: true,
        merge: true,
        video: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            678: {
                items: 2,
                autoplay: false
            },
            960: {
                items: 2
            }
        }
    });}

    function lawnella_lawone_items() {
    
    $('.lawoneitem').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        lazyLoad: true,
        merge: true,
        video: true,
        nav: false,
        dots: false,
        center: false,
        smartSpeed: 700,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: ['<span class="clearfix prev icon-next"></span>', '<span class="clearfix icon-next"></span>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            678: {
                items: 1,
                autoplay: false
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });}

    function lawnella_three_items() {
    $('.three_items').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        lazyLoad: true,
        merge: true,
        video: true,
        nav: true,
        dots: true,
        center: false,
        smartSpeed: 700,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: ['<span class="clearfix prev icon-next"></span>', '<span class="clearfix next icon-next"></span>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            678: {
                items: 2,
                autoplay: false
            },
            960: {
                items: 3
            }
        }
    });
    }

    function lawnella_lawfouritem() {
    
    $('.lawfouritem').owlCarousel({
        items: 4,
        loop: true,
        margin: 0,
        lazyLoad: true,
        merge: true,
        video: true,
        nav: true,
        dots: true,
        center: false,
        smartSpeed: 700,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: ['<span class="clearfix prev icon-next"></span>', '<span class="clearfix next icon-next"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
                autoplay: false
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
}


function lawnella_lawthreeitem() {
$('.lawthreeitem').owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    lazyLoad: true,
    merge: true,
    video: true,
    nav: true,
    dots: true,
    center: false,
    smartSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ['<span class="clearfix prev icon-next"></span>', '<span class="clearfix icon-next"></span>'],
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        600: {
            items: 2,
            autoplay: false
        },
        1000: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});
}
function lawnella_lawtwoitem() {
$('.lawtwoitem').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    lazyLoad: true,
    merge: true,
    video: true,
    nav: true,
    dots: true,
    center: false,
    smartSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ['<span class="clearfix prev icon-next"></span>', '<span class="clearfix icon-next"></span>'],
    responsive: {
        0: {
            items: 1
        },
        540: {
            items: 1
        },
        600: {
            items: 2,
            autoplay: false
        },
        700: {
            items: 2
        },
        1100: {
            items: 2
        }
    }
});
}

function lawnella_profilter() {

    $(function () {

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
}



function lawnella_procaro() {

$('.four_items_4').owlCarousel({
    items: 4,
    loop: true,
    margin: 20,
    lazyLoad: true,
    merge: true,
    video: true,
    nav: false,
    dots: false,
    center: true,
    smartSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ['<span class="clearfix prev icon-next"></span>', '<span class="clearfix icon-next"></span>'],
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        678: {
            items: 2,
            center: false,
            autoplay: false
        },
        860: {
            items: 3
        },
        1100: {
            items: 4
        }
    }
});}

    //elementor front start
    $(window).on('elementor/frontend/init', function() {


        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-blog-v1.default', lawnella_blogcarousel_box);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-tabs-v1.default', lawnella_tab_box);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-faqs-v1.default', lawnella_faqs);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-client-v1.default', lawnella_client_logo);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-features-v1.default', lawnella_feature_box_one);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-features-v1.default', lawnella_feature_box_two);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-before-after-carousel-v1.default', lawnella_before_after_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-image-carousel-v1.default', lawnella_two_items);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-image-carousel-v1.default', lawnella_lawone_items);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-team-v1.default', lawnella_three_items);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-process-v1.default', lawnella_three_items);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-team-v2.default', lawnella_lawfouritem);

        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-testimonial-caro-v1.default', lawnella_lawone_items);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-testimonial-caro-v1.default', lawnella_lawtwoitem);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-testimonial-caro-v1.default', lawnella_lawthreeitem);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-testimonial-caro-v1.default', lawnella_lawfouritem);

        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-project-filter-v1.default', lawnella_profilter);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-project-filter-v2.default', lawnella_profilter);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-project-caro-v1.default', lawnella_procaro);

        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-service-caro-v1.default', lawnella_lawone_items);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-service-caro-v1.default', lawnella_lawtwoitem);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-service-caro-v1.default', lawnella_lawthreeitem);
        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-service-caro-v1.default', lawnella_lawfouritem);

        elementorFrontend.hooks.addAction('frontend/element_ready/lawnella-service-tab-v1.default', lawnella_three_items);
    });



    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */




})(jQuery);