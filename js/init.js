(function ($) {
  $(function () {

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("observing")
//       entry.target.classList.remove("not-observing")
//     } else {
//       entry.target.classList.add("not-observing")
//       entry.target.classList.remove("observing")
//     }

//     console.log(entry.target.className)
//   })
// }, { threshold: 0.5 })

// const hiddenElements = document.querySelectorAll('.not-observing')
// hiddenElements.forEach(el => observer.observe(el))