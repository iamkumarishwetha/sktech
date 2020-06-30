$(function () {
    $('.count').counterUp({
        delay: 10,
        time: 3000
    });

    mybutton = document.getElementById("myBtn");
    //when the user scrolls down 20px from the top of the document, show thw button
    window.onscroll = function () {
        scrollFunction();
    }

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } 
        else
        {
            mybutton.style.display = "none";
        }
    }

    //when the user clicks on the button scroll to the top of the document
    mybutton.addEventListener("click", function () {
        document.body.scrollTop = 0; //for safari
        document.documentElement.scrollTop = 0; //for chrome,safari,firefox,IE and others
        
    });

      // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });


})