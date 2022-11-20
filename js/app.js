$(document).ready(()=>{
  AOS.init({
    duration: 1200,
  })

  $('#exhibitor_product').select2({
    "language": {
        "noResults": function() {
            return "<span style=font-family:'Poppins'>Surah tidak ditemukan</span>";
        }
    },
    escapeMarkup: function(markup) {
        return markup;
    }
});
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



$("#show_hide_password a").on('click', function(event) {
  event.preventDefault();
  if($('#show_hide_password input').attr("type") == "text"){
      $('#show_hide_password input').attr('type', 'password');
      $('#show_hide_password i').addClass( "fa-eye-slash" );
      $('#show_hide_password i').removeClass( "fa-eye" );
  }else if($('#show_hide_password input').attr("type") == "password"){
      $('#show_hide_password input').attr('type', 'text');
      $('#show_hide_password i').removeClass( "fa-eye-slash" );
      $('#show_hide_password i').addClass( "fa-eye" );
  }
});


$(".form-outline .form-control").keyup(function() {
  var c = $(this).val();
  // console.log(c.length<1);
  if (c.length > 0) {
      $(this).addClass('activex')
  } else {
      $(this).removeClass('activex')
  }
})



$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite:false,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  infinite:true,
  arrows:false,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  // centerMode: true,
  focusOnSelect: true
});

