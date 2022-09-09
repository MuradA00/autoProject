const paymentBreakpoint = window.matchMedia("(max-width: 550px)"),
      paymentImage = document.querySelector('.payment__img'),
      paymentSource = document.querySelector('.payment__source'),
      selectorRow = document.querySelector('.selector-list'),
      homeTabletBp = window.matchMedia('(max-width: 1050px)'),
      homeImg = document.querySelector('.home__img'),
      homeSourceImg = document.querySelector('.home__source-img'),
      mobMenu = document.querySelector('.mob-menu'),
      menu = document.querySelector('.m-menu'),
      body = document.body;

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
