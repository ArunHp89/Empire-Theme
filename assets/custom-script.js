$(document).ready(function(){
      $('.logolist--inner').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 0,
        speed: 3000,
        autoplay: true,
        pauseOnHover: false,
        cssEase: 'linear',
        prevArrow: '<button class="slick-prev slick-arrow"><svg viewBox="0 0 100 100"><path d="M65.29 11.99L27.28 50L65.3 87.99L70.25 83.06L37.19 50L70.26 16.94L65.29 11.99Z" class="arrow"></path></svg></button>',
        nextArrow: '<button class="slick-next slick-arrow"><svg viewBox="0 0 100 100"><path d="M65.29 11.99L27.28 50L65.3 87.99L70.25 83.06L37.19 50L70.26 16.94L65.29 11.99Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></button>',
        responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
        }
      },
           {
      breakpoint: 400,
      settings: {
        slidesToShow: 3,
      }
    }
    ]
      });
    });