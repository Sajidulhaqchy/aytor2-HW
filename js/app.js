
$(document).ready(function(){

    // *SLICKSLIDER(banner)
    $('.bannerSlider').slick({
      arrows:false,
      dots:true,
      dotsClass:'bannerDots container',
      autoplay: true,
      autoplaySpeed: 2000,
    });









    // * ToolTip File
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



    // * New product slider
    $('.productSlider').slick({
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:"#productLeftArrow",
      nextArrow:"#productRightArrow",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
          }
        },
        
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          }
        },
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });