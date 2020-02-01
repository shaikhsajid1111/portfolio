AOS.init({duration : 3000,     
});
easing: 'ease-in-out-back'

VANTA.NET("#background-animate");
VANTA.NET({
el: "#background-animate",
mouseControls: true,
touchControls: true,
minHeight: 200.00,
minWidth: 200.00,
scale: 1.00,
scaleMobile: 1.00
})

$(document).ready(function() {
    
    var typed = new Typed('#tag-dev', {
        strings:["Software Developer^1000","Web Developer"],
                   backSpeed: 200,
                   typeSpeed: 200,
                   loop: false,
                   shuffle: true

      });



    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        //console.log($(window).scrollTop())
      if ($(window).scrollTop() > 600) {
        $('#navbar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 281) {
        $('#navbar').removeClass('navbar-fixed');
      }
    });

    var elm = document.querySelector('#navbar-navigation');
    var ms = new MenuSpy(elm);


  });