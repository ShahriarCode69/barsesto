import '../styles/modern-normalize.css'
import '../styles/style.css'
import '../styles/components/header.css'
import '../styles/components/mobile-nav.css'
import '../styles/components/hero.css'
import '../styles/components/popular.css'
import '../styles/components/about.css'
import '../styles/components/menu.css'
import '../styles/components/reserve.css'

import '../styles/utils.css'



import mobileNav from './utils/mobile-nav.js';
mobileNav();

ScrollReveal().reveal('.header', { origin: 'right', delay: "100", scale: "1.1", mobile: false });
ScrollReveal().reveal('.hero', { origin: 'right', delay: "100", scale: "1.1", mobile: false });
ScrollReveal().reveal('.about__content', { origin: 'right', delay: "100", scale: "1.1", mobile: false });
ScrollReveal().reveal('.about__img', { origin: 'right', delay: "100", scale: "1.1", mobile: false});
ScrollReveal().reveal('.reserve__content', { origin: 'right', delay: "100", scale: "1.1", mobile: false});
ScrollReveal().reveal('.reserve__img', { origin: 'right', delay: "100", scale: "1.1", rotate: {
  y: 20,
}, mobile: false});

ScrollReveal().reveal('.popular__card', {delay: 50, easing: "ease-out", interval: 100, scale: 1.2, mobile: false})