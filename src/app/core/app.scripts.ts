
declare var jQuery: any;

export class AppScripts {

    public static setupFlexSlider(): void{
      if (jQuery().flexslider) {
        var $introSlider = jQuery(".page_mainslider .flexslider");
        $introSlider.each(function(index){
        // if ($introSlider.length) {
            var $currentSlider = jQuery(this);
            $currentSlider.flexslider({
            animation: "fade",
            pauseOnHover: true, 
            useCSS: true,
            controlNav: true,   
            directionNav: false,
            prevText: "",
            nextText: "",
            smoothHeight: false,
            slideshowSpeed:10000,
            animationSpeed:600,
            start: function( slider ) {
                slider.find('.slide_description').children().css({'visibility': 'hidden'});
                  slider.find('.flex-active-slide .slide_description').children().each(function(index){
                  var self = jQuery(this);
                  var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                  setTimeout(function(){
                    self.addClass("animated "+animationClass);
                  }, index*200);
                });
                // vertical position of navigation dots
                var offsets = jQuery(".page_mainslider .slide_description").map(function ()
                  {
                    return jQuery(this).offset().top;
                  }).get();
                var heinghts = jQuery(".page_mainslider .slide_description").map(function ()
                  {
                    return jQuery(this).height();
                  }).get();         
                var maxOffset = Math.max.apply(null, offsets);
                var maxHeight = Math.max.apply(null, heinghts);
                var headerHeight = jQuery(".page_header").height();
                if (jQuery(document).scrollTop() > 0) {
                  headerHeight = 70;
                }
                jQuery(".page_mainslider .flex-control-nav").css("top", maxOffset + maxHeight - headerHeight + 30);
              },
            after :function( slider ){
                slider.find('.flex-active-slide .slide_description').children().each(function(index){
                  var self = jQuery(this);
                  var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                  setTimeout(function(){
                    self.addClass("animated "+animationClass);
                  }, index*200);
                });
              },
            end :function( slider ){
                slider.find('.slide_description').children().each(function() {
                  var self = jQuery(this);
                  var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                  self.removeClass('animated ' + animationClass).css({'visibility': 'hidden'});
                  // jQuery(this).attr('class', '');
                });
              },
            
            // });
          })
          //wrapping nav with container
          .find('.flex-control-nav')
            .wrap('<div class="container nav-container"/>');
        });
    
        // vertical position of navigation dots on resize
        jQuery(window).on("resize", function() {
          var offsets = jQuery(".page_mainslider .slide_description").map(function ()
            {
              return jQuery(this).offset().top;
            }).get();
          var heinghts = jQuery(".page_mainslider .slide_description").map(function ()
            {
              return jQuery(this).height();
            }).get();         
          var maxOffset = Math.max.apply(null, offsets);
          var maxHeight = Math.max.apply(null, heinghts);
          var headerHeight = jQuery(".page_header").height();
          if (jQuery(document).scrollTop() > 0) {
            headerHeight = 70;
          }
          jQuery(".page_mainslider .flex-control-nav").css("top", maxOffset + maxHeight - headerHeight + 30);
        });  
    
        //}//eof introSlider check
    
        jQuery(".flexslider").each(function(index){
          var $currentSlider = jQuery(this);
          //exit if intro slider already activated 
          if ($currentSlider.find('.flex-active-slide').length) {
            return;
          }
          $currentSlider.flexslider({
            animation: "fade",
            useCSS: true,
            controlNav: true,   
            directionNav: false,
            prevText: "",
            nextText: "",
            smoothHeight: false,
            slideshowSpeed:5000,
            animationSpeed:800,
            // after :function( slider ){
            // }
          });
        });
      }
    }

    public static setupPrettyPhoto(): void{
      if (jQuery().prettyPhoto) {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
          hook: 'data-gal',
          theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
        });
      }
    }

    public static setupCarousel(selector: string): void {
        //owl carousel
        if (jQuery().owlCarousel) {
          jQuery(`${selector}.owl-carousel`).each(function () {
            var $carousel = jQuery(this);
            var loop = $carousel.data('loop') ? $carousel.data('loop') : false;
            var margin = ($carousel.data('margin') || $carousel.data('margin') == 0) ? $carousel.data('margin') : 30;
            var nav = $carousel.data('nav') ? $carousel.data('nav') : false;
            var dots = $carousel.data('dots') ? $carousel.data('dots') : false;
            var themeClass = $carousel.data('themeclass') ? $carousel.data('themeclass') : 'owl-theme';
            var center = $carousel.data('center') ? $carousel.data('center') : false;
            var items = $carousel.data('items') ? $carousel.data('items') : 4;
            var autoplay = $carousel.data('autoplay') ? $carousel.data('autoplay') : false;
            var responsiveXs = $carousel.data('responsive-xs') ? $carousel.data('responsive-xs') : 1;
            var responsiveSm = $carousel.data('responsive-sm') ? $carousel.data('responsive-sm') : 2;
            var responsiveMd = $carousel.data('responsive-md') ? $carousel.data('responsive-md') : 3;
            var responsiveLg = $carousel.data('responsive-lg') ? $carousel.data('responsive-lg') : 4;
            var responsivexLg = $carousel.data('responsive-xlg') ? $carousel.data('responsive-xlg') : 5;
            // var responsive = $carousel.data('responsive') ? jQuery.parseJSON($carousel.data('responsive')) : {0:{items:1},767:{items:2},992:{items:2},1200:{items: 4}};
    
            $carousel.owlCarousel({
              loop: loop,
              margin: margin,
              nav: nav,
              autoplay: autoplay,
              dots: dots,
              themeClass: themeClass,
              center: center,
              items: items,
              responsive: {
                0: {
                  items: responsiveXs
                },
                767: {
                  items: responsiveSm
                },
                992: {
                  items: responsiveMd
                },
                1200: {
                  items: responsiveLg
                },
                1450: {
                  items: responsivexLg
                }
              },
            })
           
          });
        } 
      }

}