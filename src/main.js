import '../styles/modern-normalize.css'
import '../styles/style.css'
import '../styles/components/header.css'
import '../styles/components/hero.css'
import '../styles/components/popular.css'
import '../styles/components/about.css'
import '../styles/components/menu.css'
import '../styles/components/reserve.css'

import '../styles/components/mobile-nav.css'
import '../styles/utils.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import mobileNav from './utils/mobile-nav.js';
mobileNav();