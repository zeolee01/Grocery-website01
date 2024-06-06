let searchForm = document.querySelector(".search-form")

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active")

  searchCart.classList.remove("active")
  loginForm.classList.remove("active")
  navBar.classList.remove("active")
}
// --------
let searchCart = document.querySelector(".shopping-cart")

document.querySelector("#cart-btn").onclick = () => {
  searchCart.classList.toggle("active")

  searchForm.classList.remove("active")
  loginForm.classList.remove("active")
  navBar.classList.remove("active")
}
// --------
let loginForm = document.querySelector(".login-form")

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active")

  searchForm.classList.remove("active")
  searchCart.classList.remove("active")
  navBar.classList.remove("active")
}
// ---------
let navBar = document.querySelector(".navbar")

document.querySelector("#menu-btn").onclick = () => {
  navBar.classList.toggle("active")

  searchForm.classList.remove("active")
  searchCart.classList.remove("active")
  loginForm.classList.remove("active")
}
// ---------
window.onscroll = () => {
  searchForm.classList.remove("active")
  searchCart.classList.remove("active")
  loginForm.classList.remove("active")
  navBar.classList.remove("active")
}
// ---------

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,

  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      // spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 20,
    },
    1020: {
      slidesPerView: 3,
      // spaceBetween: 40,
    },
  },
})

// --------------

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,

  autoplay: {
    delay: 3500,

    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      // spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 20,
    },
    1020: {
      slidesPerView: 3,
      // spaceBetween: 40,
    },
  },
})
