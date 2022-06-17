import { Component, OnInit } from '@angular/core';
//import Swiper from 'swiper';
// core version + navigation, pagination modules:
//import Swiper, { Navigation, Pagination } from 'swiper';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
// import Swiper and modules styles
//import 'swiper/css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';
// install Swiper modules
//SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay, Navigation, Pagination]);
//demos: https://swiperjs.com/demos
//continue from here: https://codesandbox.io/s/32gkui?file=/src/app/app.component.ts:217-272
declare function GLightbox(param: any): any;
declare var AOS: any;
declare var Isotope: any;
/*declare var Swiper: any;*/

@Component({
  selector: 'app-sms-landing',
  templateUrl: './sms-landing.component.html',
  styleUrls: ['./sms-landing.component.scss']
})
export class SmsLandingComponent implements OnInit {

  navObj: any = {
    'Home': true,
    'About': false,
    'Services': false,
    'Portfolio': false,
    'Team': false,
    'Blog': false,
    'Contact': false
  };

  constructor() { }

  ngOnInit(): void {
    this.pageInit();
  }

  pageInit() {
    /**
   * Preloader
   */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

    /**
   * Sticky header on scroll
   */
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
      document.addEventListener('scroll', () => {
        window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
      });
    }

    /**
   * Scroll top button
   */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const togglescrollTop = function () {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
      window.addEventListener('load', togglescrollTop);
      document.addEventListener('scroll', togglescrollTop);
      scrollTop.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }));
    }

    /**
   * Initiate glightbox
   */
    const gb = GLightbox({
      selector: '.glightbox'
    });

    // init Swiper:
    //const swiper = new Swiper('.page-index .slides-1', {
    //  // configure Swiper to use modules
    //  speed: 600,
    //  loop: true,
    //  autoplay: {
    //    delay: 5000,
    //    disableOnInteraction: false
    //  },
    //  slidesPerView: 'auto',
    //  pagination: {
    //    el: '.page-index .swiper-pagination',
    //    type: 'bullets',
    //    clickable: true
    //  },
    //  navigation: {
    //    nextEl: '.page-index .swiper-button-next',
    //    prevEl: '.page-index .swiper-button-prev',
    //  },
    //  modules: [Navigation, Pagination],
    //});

   // /**
   //* Init swiper slider with 1 slide at once in desktop view
   //*/
   // new Swiper('.page-index .slides-1', {
   //   speed: 600,
   //   loop: true,
   //   autoplay: {
   //     delay: 5000,
   //     disableOnInteraction: false
   //   },
   //   slidesPerView: 'auto',
   //   pagination: {
   //     el: '.page-index .swiper-pagination',
   //     type: 'bullets',
   //     clickable: true
   //   },
   //   navigation: {
   //     nextEl: '.page-index .swiper-button-next',
   //     prevEl: '.page-index .swiper-button-prev',
   //   }
   // });

    /**
   * Init swiper slider with 3 slides at once in desktop view
   */
    //new Swiper('.slides-3', {
    //  speed: 600,
    //  loop: true,
    //  autoplay: {
    //    delay: 5000,
    //    disableOnInteraction: false
    //  },
    //  slidesPerView: 'auto',
    //  pagination: {
    //    el: '.swiper-pagination',
    //    type: 'bullets',
    //    clickable: true
    //  },
    //  navigation: {
    //    nextEl: '.swiper-button-next',
    //    prevEl: '.swiper-button-prev',
    //  },
    //  breakpoints: {
    //    320: {
    //      slidesPerView: 1,
    //      spaceBetween: 40
    //    },

    //    1200: {
    //      slidesPerView: 3,
    //    }
    //  }
    //});

    /**
   * Porfolio isotope and filter
   */
    let portfolionIsotope = document.querySelector('.portfolio-isotope');

    if (portfolionIsotope) {

      let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
      let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
      let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

      window.addEventListener('load', () => {
        let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
          itemSelector: '.portfolio-item',
          layoutMode: portfolioLayout,
          filter: portfolioFilter,
          sortBy: portfolioSort
        });

        let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
        menuFilters.forEach((el) => {
          el.addEventListener('click', () => {
            document.querySelector('.portfolio-isotope .portfolio-flters .filter-active')?.classList.remove('filter-active');
            el.classList.add('filter-active');
            portfolioIsotope.arrange({
              filter: el.getAttribute('data-filter')
            });
            //if (typeof aos_init === 'function') {
            this.aos_init();
            //}
          }, false);
        });

      });

    }

    window.addEventListener('load', () => {
      this.aos_init();
    });
  }

  /**
  * Animation on scroll function and init
  */
  aos_init() {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      mirror: false
    });
  }

  mobileNavToogle() {
    document.querySelector('body')?.classList.toggle('mobile-nav-active');
    document.querySelector('.mobile-nav-show')?.classList.toggle('d-none');
    document.querySelector('.mobile-nav-hide')?.classList.toggle('d-none');
  }

  dropdownClick(event: any) {
    if (document.querySelector('.mobile-nav-active')) {
      event.preventDefault();
      event.classList.toggle('active');
      event.nextElementSibling.classList.toggle('dropdown-active');

      let dropDownIndicator = event.querySelector('.dropdown-indicator');
      dropDownIndicator.classList.toggle('bi-chevron-up');
      dropDownIndicator.classList.toggle('bi-chevron-down');
    }
  }

  activate(navName: string) {
    this.resetNav();
    this.navObj[navName] = true;
  }

  resetNav() {
    this.navObj['Home'] = false;
    this.navObj['About'] = false;
    this.navObj['Services'] = false;
    this.navObj['Portfolio'] = false;
    this.navObj['Team'] = false;
    this.navObj['Blog'] = false;
    this.navObj['Contact'] = false;
    this.scrollToTop();
  }

  scrollToTop() {
    window.scroll(0, 0);
  }
}
