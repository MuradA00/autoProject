const paymentBreakpoint = window.matchMedia("(max-width: 550px)"),
      paymentImage = document.querySelector('.payment__img'),
      paymentSource = document.querySelector('.payment__source'),
      selectorRow = document.querySelector('.selector-list'),
      homeTabletBp = window.matchMedia('(max-width: 1050px)'),
      homeImg = document.querySelector('.home__img'),
      homeSourceImg = document.querySelector('.home__source-img'),
      mobMenu = document.querySelector('.mob-menu'),
      menu = document.querySelector('.m-menu'),
      body = document.body,
      offerImg = document.querySelector('.offer__img'),
      offerSource = document.querySelector('.offer__source'),
      offerTabletBp = window.matchMedia('(max-width: 1100px)'),
      carsList = document.querySelector('.cars-list'),
      showMoreBtn = document.querySelector('.-more-btn');

if (offerTabletBp.matches === true) {
  offerImg.src = 'img/offer/offer-image-mob.png';
  offerSource.srcset = 'img/offer/offer-image-mob.webp';
}

selectorRow.addEventListener('click', function(e) {
	const selectorItems = document.querySelectorAll('.selector-list__item');
	const target = e.target
  Array.from(selectorItems).forEach(item => {
  	item.classList.remove('_selector-active')
  })
  target.classList.add('_selector-active');
})

if (paymentBreakpoint.matches === true) {
  paymentImage.src = 'img/payment/payment-image-mob.png';
  paymentSource.srcset = 'img/payment/payment-image-mob.webp';
}

if (homeTabletBp.matches == true) {
  homeImg.src = 'img/home/car-image-mob.pmg';
  homeSourceImg.srcset = 'img/home/car-image-mob.webp';
}

mobMenu.addEventListener('click', () => {
  mobMenu.classList.toggle('_burger-active')
  body.style.overflow = 'hidden';
  if (mobMenu.classList.contains('_burger-active')) {
    menu.classList.add('--menu-active')
  } else {
    menu.classList.remove('--menu-active')
    body.style.overflow = 'visible';
  }
})


const tabs = document.querySelectorAll('.choose-list__item'),
  tabContents = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      tc.classList.remove("is-active");
    });
    target.classList.add("is-active");

    tabs.forEach((t) => {
      t.classList.remove("is-active");
    });
    tab.classList.add("is-active");
  });
});


const acc = document.getElementsByClassName("media__visible");
const icons = document.getElementsByClassName('faq-list__toggle')
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("_media-active-visible");
    const panel = this.nextElementSibling;
    if (panel.style.display === 'block'){
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
};

const modalTriggers = document.querySelectorAll('.trigger-modal')
const modal = document.getElementById('modal')
const closeIcon = document.querySelector('.modal__close')
const navMobLinks = document.querySelectorAll('.menu-list__link');

for(let i = 0; i < modalTriggers.length; i++) {
  const modalButton = modalTriggers[i];
  modalButton.addEventListener('click', function(e) {
    modal.classList.add('--show-modal')
    e.preventDefault();
  })
  closeIcon.addEventListener('click', () => {
    closeModal();
  })
}

for(let i = 0; i < navMobLinks.length; i++) {
  const navMobLink = navMobLinks[i];
  navMobLink.addEventListener('click', () => {
    closeMenu();
  })
}

function closeMenu() {
  menu.classList.remove('--menu-active')
  body.style.overflow = 'visible';
  mobMenu.classList.remove('_burger-active');
};

function closeModal() {
  modal.classList.remove('--show-modal')

}

showMoreBtn.addEventListener('click', () => {
  carsList.classList.toggle('_show-more-cars')
  if (showMoreBtn.innerHTML === 'Показать меньше машин') {
    showMoreBtn.innerHTML = 'Показать больше машин'
  } else {
    showMoreBtn.innerHTML = 'Показать меньше машин'
  }
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
