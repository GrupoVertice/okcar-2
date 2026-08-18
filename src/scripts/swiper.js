import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



var swiper = new Swiper('.swiper', {
  spaceBetween:20,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
});
if ( window.innerWidth < 760 ) {

document.querySelectorAll('.box-learn').forEach(function (elem) {
	elem.classList.add('swiper-slide');
});

};
