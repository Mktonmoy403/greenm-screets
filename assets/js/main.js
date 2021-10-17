$(document).ready(function(){
    $('.slider-wrapper').slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        speed: 1500,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        prevArrow:"<button type='button' class='slider-prev'><i class='fas fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slider-next'><i class='fas fa-angle-right'></i></button>",
        responsive: [
        {
          breakpoint: 981,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 851,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
      });
    $('.bd_carousel').slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        fade: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        prevArrow:"<button type='button' class='slider-prev'><i class='fas fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slider-next'><i class='fas fa-angle-right'></i></button>",
        responsive: [
        {
          breakpoint: 981,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 851,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
      });
      
});