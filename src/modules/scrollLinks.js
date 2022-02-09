const scrollLinks = () => {
  const smoothLinks = document.querySelectorAll(".top-menu > ul > li > a");

  smoothLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const id = link.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
};
export default scrollLinks;
