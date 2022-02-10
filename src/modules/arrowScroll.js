const arrowScroll = () => {
  const upBtn = document.querySelector(".up");
  const headerHeight = document.querySelector(".header-wrapper").clientHeight;
  const sliderHeight = document.querySelector(".top-slider").clientHeight;
  const coords = headerHeight + sliderHeight;

  const trackScroll = () => {
    const scrolled = window.pageYOffset;

    if (scrolled >= coords) {
      upBtn.style.display = "block";
    }
    if (scrolled < coords) {
      upBtn.style.display = "none";
    }
  };

  function backToTop() {
    if (window.pageYOffset > 0) {
      document.querySelector("body").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  window.addEventListener("scroll", trackScroll);
  upBtn.addEventListener("click", backToTop);
};
export default arrowScroll;
