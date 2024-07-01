// Carousel functionality
$('.carousel').carousel({
    interval: 5000
  });
  
  // Add event listener to navbar links
  $('.nav-links li a').on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
