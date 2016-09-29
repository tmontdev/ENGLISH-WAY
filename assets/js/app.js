$(document).ready(function(){

  $(".slider").slick({
    autoplay:true,
    autoplaySpeed:10000,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:false,
    pauseOnDotsHover:true,
    fade:false,
    draggable:true,
    prevArrow:'.controllers .prev',
    nextArrow:'.controllers .next',
  });

})

new WOW().init();

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a.page-scroll').on('click', function (e) { // ^= que contem
            var headerHeight = $('.header-bar').height();
        e.preventDefault();
        //$(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - $('.header-bar').height()
    }, 500, 'swing');
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.page-scroll').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.page-scroll').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}



$(function(){
        var headerHeight = $('.header-bar').height();
        var st = $('.header-st-row').height();
        var sliderHeight = $('.slider').height() - headerHeight;
        sliderHeight = sliderHeight - st;


        $('.page-scroll').hover(function() {
                $(this).addClass("active");
        }, function() {
                $(this).removeClass("active");
        });


        $(window).scroll(function(){
                if($(this).scrollTop() > st){
                        $('.header-bar').addClass("header-bar-fixed");
                }else{
                        $('.header-bar').removeClass("header-bar-fixed");
                }

        });
});
