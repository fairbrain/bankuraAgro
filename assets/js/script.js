$('.blog .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,

    // If we need pagination
    pagination: {
        el: null,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: false
});

setInterval(() => {
    $(".carousel-control-next").click();
}, 4000);

// const categories = document.querySelectorAll(".category-boxes");
const swiperSliders = document.querySelectorAll(".swiper");
const categoryOptions = document.querySelectorAll(".category-boxes p");
console.log(swiperSliders);
categoryOptions.forEach((item) => {
    item.addEventListener("click", () => {
        const dataCategory = item.getAttribute("data-category");
        const activeCategory = document.querySelector(".category-boxes p.activeCat");
        activeCategory.classList.remove("activeCat");
        item.classList.add("activeCat");
        swiperSliders.forEach((swiperCategory) => {
            if (swiperCategory.classList.contains(dataCategory)) {
                swiperCategory.classList.remove("d-none");
            }
            else {
                swiperCategory.classList.add("d-none");
            }
        })
    })
})

// GSAP

document.addEventListener("DOMContentLoaded", function () {
    const headerTl = gsap.timeline();
    headerTl.from("header a img", {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        delay: 0.2
    })
    headerTl.from(".nav-item", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.2
    })
    gsap.from(".carousel-inner", {
        scale: 0.5,
        opacity: 0,
        duration: 2
    })
});


const scrollToTopButton = document.getElementById("scrollToTopButton");

window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;

  // Show button when scrolled down a certain amount (adjust as needed)
  if (scrollPosition > 100) {
    scrollToTopButton.style.opacity = 1;
  } else {
    scrollToTopButton.style.opacity = 0;
  }
});

scrollToTopButton.addEventListener("click", function() {
  // Scroll to the top smoothly with animation
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});

