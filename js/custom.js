// $(".banner_conz1").click(function(){
//     $("div").remove(".bnner_imgg");
    
// });


$('.banner_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // dots:true,
    // prevArrow:".prevArrow",
    // nextArrow:".nextArrow",
    arrows:true,
  });
$('.project_card').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // dots:true,
    // prevArrow:".prevArrow",
    // nextArrow:".nextArrow",
    arrows:true,
  });
  $('.slick-next').html('<i class="fas fa-chevron-right" aria-hidden="true" style="color: #a48d72;"></i>');
  
  $('.slick-prev').html('<i class="fas fa-chevron-left" aria-hidden="true" style="color: #a48d72;"></i>');

  jQuery(document).ready(function($) {
    $(".dtls_item h2").counterUp({
        delay: 100,
        time: 5000,
    });
});

var config = document.querySelector('.project_card1');
var mixer = mixitup(config);

AOS.init();

new VenoBox({
  selector: '.venobox'
});


$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,

  
});