let roadSlider = new Swiper(".roadmap-section__box", {
    slidesPerView: 4,
    spaceBetween: 70,
    navigation: {
      nextEl: ".roadmap-section__prev",
      prevEl: ".roadmap-section__next"
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: true,
      },

      575: {
        slidesPerView: 2,
        spaceBetween: 40,
        centeredSlides: false,
      },

      767: {
        slidesPerView: 3,
        spaceBetween: 40,
        centeredSlides: false,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 70,
        centeredSlides: false,
      },

      1240: {
        slidesPerView: 4,
        spaceBetween: 70,
        centeredSlides: false,
      },
    },
});

let singleGame = new Swiper(".games-nav", {
  slidesPerView: 2,
  spaceBetween: 20,
  autoHeight: true,
  navigation: {
    nextEl: ".other-games__next",
    prevEl: ".other-games__prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  },
});

let singleSliderBottom = new Swiper(".mini-slider", {
  slidesPerView: 5,
  spaceBetween: 3,
  watchSlidesProgress: true,
  slideToClickedSlide: false,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 3,
    },

    414: {
      slidesPerView: 5,
      spaceBetween: 3,
    }
  },
});

let singleSliderTop = new Swiper(".big-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  thumbs: {
    swiper: singleSliderBottom,
  },
});

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__nav');

burger.onclick = addClassForMenu;
function addClassForMenu() {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.classList.toggle('active')
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.header__nav-link').forEach((link) =>{

        if (link.getAttribute('href').replace('#', '') == entry.target.id) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      })
    }
  });
}, {
  threshold: 0.4
});

document.querySelectorAll('.section-observe').forEach((section) => observer.observe(section))

if (document.querySelector('.header__nav-list--index')) {
  document.querySelector('.header__nav-list--index').addEventListener('click', function(e){
    if (e.target.classList.contains('header__nav-link')) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '');
      let headerHeight = document.querySelector('header').clientHeight;
      window.scrollTo({
        top: document.getElementById(id).offsetTop - headerHeight,
        behavior:"smooth"
      })
    }
  })
}



