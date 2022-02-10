import { animate } from "./helpers.js";

const modal = () => {
  const modal = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const buttons = document.querySelectorAll(".callback-btn");
  const modalClose = document.querySelector(".modal-close");
  const buttonServices = document.querySelector(".button-services");
  const carouselLinks = document.querySelectorAll('a[href="#application"]');
  const allButtons = [...buttons, ...carouselLinks, buttonServices];

  const closeModal = () => {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
  };

  allButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.innerWidth >= 768) {
        modal.style.opacity = 0;
        modal.style.display = "block";
        modalOverlay.style.opacity = 0;
        modalOverlay.style.display = "block";
        animate({
          duration: 400,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modal.style.opacity = progress;
            modalOverlay.style.opacity = progress;
          },
        });
      } else {
        modal.style.display = "block";
        modalOverlay.style.display = "block";
      }
    });
  });

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);
};
export default modal;
