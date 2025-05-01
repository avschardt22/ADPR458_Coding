const toggleBtn = document.getElementById("toggle-button");
const navListItems = document.getElementById("nav-menu-list");

toggleBtn.addEventListener("click", function () {
  navListItems.classList.toggle("active");
});

$(".slider").slick({

  // normal options...
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000
  pauseOnfocus: false

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
        autoplay: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});