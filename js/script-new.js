$(document).ready(function(){
 
    $(document).on('click', '.calc__minus', function(){ 
        var val=parseInt($(this).parent('.calc').find('.calc__input').val());
        var new_val=val-1;
        if(new_val<1)
        {
            new_val=0;
            $(this).addClass('disabled');
            $(this).parent('.calc').find('.calc__input').addClass('disabled');   
        } 
        $(this).parent('.calc').find('.calc__input').val(new_val);           
        return false;  
    })
    
    $(document).on('click', '.calc__plus', function(){ 
        var val=parseInt($(this).parent('.calc').find('.calc__input').val());
        var new_val=val+1;

        $(this).parent('.calc').find('.calc__minus').removeClass('disabled');        
        $(this).parent('.calc').find('.calc__input').removeClass('disabled');        
        $(this).parent('.calc').find('.calc__input').val(new_val);    
        
        $('.y-section-choose-aside-btn').addClass('active');
        return false;  
    })
    
    $('#sidebar').stickySidebar({
        topSpacing: 80,
        bottomSpacing: 30,
        minWidth: 1200
    });
    
    
    function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth > 576 ? 'vertical' : 'horizontal';
        return direction;
      }
    
    if($('.y-product-images').length){
        var swiperThumbs = new Swiper(".y-product-images", {
            direction: getDirection(),
            spaceBetween: 10,
            slideToClickedSlide: true,
            slidesPerView: 'auto',
            //loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            on: {
              resize: function () {
                swiperThumbs.changeDirection(getDirection());
              },
            },

            breakpoints: {
              576: {
                slidesPerView: 4,
              }
            }
        });

        $(window).on('resize', function () {
             swiperThumbs.changeDirection(getDirection());
        });

        var swiper = new Swiper('.y-product-images-main', {
            spaceBetween: 10,
            thumbs: {
              swiper: swiperThumbs,
            },
        });
    }

    var solutions = undefined;    
    var init = false;

    /* Which media query
    **************************************************************/
    function swiperMode() {
        let mobile = window.matchMedia('(min-width: 0px) and (max-width: 992px)');
        let desktop = window.matchMedia('(min-width: 1025px)');

        // Enable (for mobile)
        if(mobile.matches) {
            if (!init) {
                init = true;
                solutions = new Swiper('.solutions', {
                    slidesPerView:'auto',
                    spaceBetween:0,
                    loop:false,
                    mousewheel: false          
                })
            }
        }
        else {        
            if (solutions != undefined) {
               solutions.destroy();
            } 
            init = false;      
        }
    }
    
    swiperMode();
    
    $(window).on('load resize', function() {        
        swiperMode();
    });

});
