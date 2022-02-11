const mobileMenu = () => {
  const menuBtn = document.querySelector(".mob-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  const handleMenu = () => {
    mobileMenu.classList.toggle("open");
  };

  menuBtn.addEventListener("click", handleMenu);

  mobileMenu.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("mobile-menu-close") ||
      e.target.matches("ul>li>a") ||
      e.target.classList.contains("callback-btn")
    ) {
      handleMenu();
    }
  });
};
export default mobileMenu;
