$( document ).ready(function() {
  $('.clients-sl').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });

// show mobile menu
$('.mob-menu-icon').on('click', function(){
  $('.mob-menu').css('display', 'block')
})
// close mobile menu
$('.mob-menu span').on('click', function(){
  $('.mob-menu').css('display', 'none')
})
//mobile side menu
$('.mob-menu li.has-dropdown').on('click', function(e){
  $(this).children('.dropdown-menu').toggleClass('opened')
  e.stopPropagation();
})
$('.mob-menu li.has-dropdown-sub').on('click', function(e){
  $(this).children('.dropdown-menu').toggleClass('opened')
  e.stopPropagation();
})

//accordion-box
$('.acc-header').on('click', function(){
  $(this).next('.acc-content').toggleClass('opened');
  $(this).toggleClass('rot');
})
// image gallery
baguetteBox.run('.image-gallery');

//video gallery
$(".video-gallery").magnificPopup({
  delegate: "a",
  type: "iframe",
  gallery: {
    enabled: true
  }
});

});

// swiper slider - main slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// steel structure
  var swiper = new Swiper(".prSteelSwiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });

  // swiper slider - main slider
var swiper = new Swiper(".mySwiper-about", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".cert-Swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  $(window).on('scroll', function countFun() { 
    if ($(window).scrollTop() >= $('.counter').offset().top) {
        
        $('.number').easy_number_animate({
            start_value: 0,
            end_value: 500,
            duration: 2000
          });
          $('.number-1').easy_number_animate({
            start_value: 0,
            end_value: 35000,
            duration: 2000
          });
          $('.number-2').easy_number_animate({
            start_value: 0,
            end_value: 12,
            duration: 2000
          });
    } 
}); 


//-------------------------------------- mixitup plugin
var mixer = mixitup('#project-glry');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
  selectors: {
      target: '.proj-gallery'
      },
      animation: {
      duration: 300
}
});
