const toggleBtn = document.getElementById("toggle-button");
const navListItems = document.getElementById("nav-menu-list");

toggleBtn.addEventListener("click", function () {
  navListItems.classList.toggle("active");
});

$(".slider").slick({

  // normal options...
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnFocus: false,
  pauseOnHover: false,
  centerMode: true,
  centerPadding: '50px',
  slidesToShow: 3,
  dots: true,

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true,
        autoplay: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});