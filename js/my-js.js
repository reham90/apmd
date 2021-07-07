(function($) { // Begin jQuery36.

  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').slideToggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });

   

    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
    
     

$("#re-show").toggle();

$("#re-hide").toggle();

$("#cover").toggle();




  


    });

  $('#re-show').click(function(event) {
     $('nav ').css("right" , "0");

    $("body").css("overflow" , "hidden");

$("#nav").toggle();
  

  if ($('.nav-list').hasClass('dismiss')) {
    $('.nav-list').removeClass('dismiss').addClass('selected').show();
  }
  event.preventDefault();
});

$('#re-hide').click(function(event) {
  if ($('.nav-list').hasClass('selected')) {
    $('.nav-list').removeClass('selected').addClass('dismiss');
  }
  event.preventDefault();
 $("body").css("overflow" , "auto");
});

 $('#cover').on('click', function() {
$("#re-hide").click();
 });


    // Hamburger to X toggle
    
  }); // end DOM ready
})(jQuery); // end jQuery83"9?"






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    var owl = $('.slider');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fal fa-angle-right'></i>", "<i class='fal fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 1
            }

        }
    })

})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    var owl = $('.best-sell');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fal fa-chevron-right'></i>", "<i class='fal fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1200: {
                items: 5
            }

        }
    })

})



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$(document).ready(function() {
    var owl = $('.testemonial');
    owl.owlCarousel({
        margin: 10,
        nav: true,
       rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fal fa-chevron-right'></i>", "<i class='fal fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 2
            }

        }
    })

})



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
if($(window).width()<991){
   var acc = document.getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function myFunction(y) {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
});
}
}

  });
