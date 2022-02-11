const scrollLinks = () => {
  const smoothLinks = document.querySelectorAll(".top-menu > ul > li > a");
  const smoothLinksMenu = document.querySelectorAll(
    ".mobile-menu > ul > li > a"
  );
  const allLinks = [...smoothLinks, ...smoothLinksMenu];

  allLinks.forEach((link) => {
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
