$(document).ready(function() {
    var about = $("#about").height();
    var projects = $("#projects").height();
    var contact = $("#contact").height();

    $("#nav-bar li:nth-child(1) a").addClass("nav-hover");
  
    $(window).scroll(function() {
      
        if ($(this).scrollTop() < about) {
            $("#nav-bar li a").removeClass("nav-hover");
            $("#nav-bar li:nth-child(1) a").addClass("nav-hover");
        }
           //&& $(this).scrollTop() < about + projects
        if ($(this).scrollTop() > about) {
            $("#nav-bar li a").removeClass("nav-hover");
            $("#nav-bar li:nth-child(2) a").addClass("nav-hover");
        }
          //&& $(this).scrollTop() < about + projects + contact
         if ($(this).scrollTop() > about + projects) {
            $("#nav-bar li a").removeClass("nav-hover");
            $("#nav-bar li:nth-child(3) a").addClass("nav-hover");
        }

    });

});