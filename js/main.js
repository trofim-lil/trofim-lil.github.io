document.addEventListener("DOMContentLoaded", () => {
  // header

  const headerHeight = document.querySelector('header').offsetHeight;
  const hero = document.querySelector('.hero');

  hero.style.height = `calc(100vh - ${headerHeight}px)`;

  const burger = document.getElementById("burger");
  const header = document.querySelector(".header");
  const headerContainer = document.querySelector(".header__container");
  const headerCenter = document.querySelector(".header__center");
  const headerRight = document.querySelector(".header__right");

  burger.addEventListener("click", function () {
      header.classList.toggle("open");

      if (header.classList.contains("open")) {
          headerCenter.appendChild(headerRight); // Перемещаем соц. иконки в бургер-меню
      } else {
          headerContainer.insertBefore(headerRight, burger); // Возвращаем перед кнопкой бургера
      }
  });


  

  // swiper

  const mediaQuery = window.matchMedia('(min-width: 576px)');
  let swiper;
  
  mediaQuery.addEventListener('change', (event) => {
    if (event.matches) {
      swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        navigation: {
            nextEl: '.btn--right',
            prevEl: '.btn--left',
        },
        slidesPerView: "auto",
        spaceBetween: 24,
      });
    } else {
      // Если ширина окна меньше 576 пикселей, вы можете уничтожить экземпляр Swiper
      if (swiper) {
        swiper.destroy();
      }
    }
  });
  
  // Также инициализируйте Swiper при первом запуске, если ширина окна уже больше 576 пикселей
  if (mediaQuery.matches) {
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      navigation: {
          nextEl: '.btn--right',
          prevEl: '.btn--left',
      },
      slidesPerView: "auto",
      spaceBetween: 24,
    });
  }

});