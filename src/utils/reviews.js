const reviews = () => {
  $('.testimonials-container').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 10,
    nav: true,
    navText: ["<i class='ri-arrow-left-s-line'></i>",
      "<i class='ri-arrow-right-s-line'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: true
      },
      768: {
        items: 2
      }
    }
  })
};

export default reviews;