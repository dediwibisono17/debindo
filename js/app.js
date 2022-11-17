$(".youtube__img").click(() => {
  $(".youtube__img").hide();
  $(".youtube__real").css("display", "block");
});

$(document).ready(()=>{
  AOS.init({
    duration: 1200,
})
})

$(".slider-hero").slick({
  dots: true,
  infinite: true,
  speed: 300,
  arrows:true,
  autoplay: false,
  fade: true,
  // autoplaySpeed: 3000,
  // slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});


