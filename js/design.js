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
scaleMobile: 1.00,

})

$(document).ready(function() {
    
    var typed = new Typed('#tag-dev', {
        strings:["Software ","Web "],
                   backSpeed: 50,
                   typeSpeed: 100,
                   loop: true,
                   shuffle: true

      });

    

    $(window).scroll(function () {
        //console.log($(window).scrollTop())
      if ($(window).scrollTop() > 600) {
        $('#navbar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 600) {
        $('#navbar').removeClass('navbar-fixed');
      }
    });

    var elm = document.querySelector('#navbar-navigation');
    var ms = new MenuSpy(elm);

   
      


  });

