const accordeon = () => {
  const accordeon = document.querySelector(".accordeon");
  const elementContent = accordeon.querySelectorAll(".element-content");
  const element = accordeon.querySelectorAll(".element");

  accordeon.addEventListener("click", (e) => {
    if (e.target.closest(".element")) {
      const elem = e.target.closest(".element");
      element.forEach((tab, index) => {
        if (tab === elem) {
          tab.classList.add("active");
          elementContent[index].style.display = "block";
        } else {
          tab.classList.remove("active");
          elementContent[index].style.display = "none";
        }
      });
    }
  });
};
export default accordeon;
