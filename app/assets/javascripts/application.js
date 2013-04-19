// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(function(){
  // Side navigation 
  var $sidebar   = $(".sidebar"), 
      $window    = $(window),
      offset     = $sidebar.offset(),
      topPadding = 15,
      todaysDate = new Date().getDay(),
      weekday    = new Array(7);


    // Prepare scroll spy
    $window.scroll(function() {
      if ($window.scrollTop() > offset.top && $window.width() > 928) {
          $sidebar.stop().animate({
              marginTop: $window.scrollTop() - offset.top + topPadding
          }, 200);
      } else {
          $sidebar.stop().animate({ marginTop: 0 }, 200);
      }

      // if($window.scrollTop() <= 220){
      //   $('.sidebar').removeClass('alt')
      // } else {
      //   $('.sidebar').addClass('alt')
      // }
    });

    // Prepare project click link
    $('.project').click(function(){
      // If project clicked, visit the url on the view-project-link.
      var url = $( this ).find('.view-project-link').attr('href');
      window.open(url, '_self');
    });


    // Prepare today's date
    weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    $('#today-date').html(weekday[todaysDate]);
});

