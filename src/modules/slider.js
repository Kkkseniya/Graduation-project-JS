const slider = () => {
  const topSlider = document.querySelector(".top-slider");
  const slides = document.querySelectorAll(".item");
  const table = document.querySelectorAll(".table");
  const slickDots = document.querySelector(".slick-dots");
  let dots = document.querySelectorAll(".dot");

  const timeInterval = 3000;
  let currentSlide = 0;
  let interval;

  const render = () => {
    slides.forEach(() => {
      const li = document.createElement("li");
      li.classList.add("dot");
      slickDots.append(li);
    });
    dots = document.querySelectorAll(".dot");
    nextSlide(dots, currentSlide, "slick-active");
  };

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, "item-active");
    prevSlide(dots, currentSlide, "slick-active");
    prevSlide(table, currentSlide, "active");
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, "item-active");
    nextSlide(dots, currentSlide, "slick-active");
    nextSlide(table, currentSlide, "active");
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  topSlider.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target.matches(".dot")) {
      return;
    }

    prevSlide(slides, currentSlide, "item-active");
    prevSlide(dots, currentSlide, "slick-active");
    prevSlide(table, currentSlide, "active");

    if (e.target.matches(".dot")) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, "item-active");
    nextSlide(dots, currentSlide, "slick-active");
    nextSlide(table, currentSlide, "active");
  });

  topSlider.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot")) {
        stopSlide();
      }
    },
    true
  );

  topSlider.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot")) {
        startSlide(timeInterval);
      }
    },
    true
  );

  render();
  startSlide(timeInterval);
};
export default slider;
