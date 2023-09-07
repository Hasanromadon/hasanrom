import { gsap, Power4 } from 'gsap';

const animateIn = (element) => {

  gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: Power4.easeOut,
  });
};


export default animateIn;