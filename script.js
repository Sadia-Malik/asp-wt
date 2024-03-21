// document.addEventListener('DOMContentLoaded', function() {
//     const items = document.querySelectorAll('.accordion-item');
  
//     items.forEach(item => {
//       const title = item.querySelector('.accordion-title');
//       const content = item.querySelector('.accordion-content');
  
//       title.addEventListener('click', () => {
//         content.classList.toggle('active');
//       });
//     });
//   });
// document.addEventListener('DOMContentLoaded', function() {
//     const items = document.querySelectorAll('.accordion-item');
  
//     items.forEach(item => {
//       const title = item.querySelector('.accordion-title');
//       const content = item.querySelector('.accordion-content');
  
//       title.addEventListener('click', () => {
//         content.classList.toggle('active');
//       });
//     });
//   });


//Nav Bar
$(document).ready(function () {
  $('.navbar-light .dmenu').hover(function () {
          $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
      }, function () {
          $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
      });
  });
  
  //Navbar Toggle
  $('.toggle').click(function(){
     $(this).toggleClass('active');
  });
  
  // Back to top button
  (function() {
    $(document).ready(function() {
      return $(window).scroll(function() {
        return $(window).scrollTop() > 200 ? $("#back-to-top").addClass("show") : $("#back-to-top").removeClass("show")
      }), $("#back-to-top").click(function() {
        return $("html,body").animate({
          scrollTop: "0"
        })
      })
    })
  }).call(this);
  
  //Active Menu
  jQuery(document).ready(function($){
      // Get current path and find target link
      var path = window.location.pathname.split("/").pop();
  
      // Account for home page with empty path
      if ( path == '' ) {
      path = 'index.html';
      }
        
      var target = $('header .navbar a[href="'+path+'"]');
      // Add active class to target link
      target.addClass('active');
  });
  
  // Scrolling Add Class
  $(window).scroll(function(){
      if ($(this).scrollTop() > 0) {
         $('#header').addClass('sticky');
      } else {
         $('#header').removeClass('sticky');
      }
  });
  
  $('#comp_slider').owlCarousel({
      loop:true,
      dots: true,
      nav: true,
  
      autoplay: true,
      smartSpeed: 2000,
      margin: 20,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav: false
          },
          768:{
              items:2,
              nav: false
          },
          992:{
              items:3,
              nav: true
          },
          1200:{
              items:4,
              nav: true
          }
      }
  })
  