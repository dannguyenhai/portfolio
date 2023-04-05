const menuItem = document.getElementById("menuItem");
menuItem.style.maxHeight = "0px";
function menutoggle() {
  if (menuItem.style.maxHeight == "0px") {
    menuItem.style.maxHeight = "200px";
  } else {
    menuItem.style.maxHeight = "0px";
  }
}
/* Sticky Navigation Bar */
window.addEventListener("scroll",function(){
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 0);
})
/* slick slider */
$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-sharp fa-solid fa-arrow-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-arrow-right"></i></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 1000,
  });
});
/*  */


