import modal from "./modules/modal";
import scrollLinks from "./modules/scrollLinks";
import slider from "./modules/slider";
import carousel from "./modules/carousel";
import accordeon from "./modules/accordeon";
import arrowScroll from "./modules/arrowScroll";
import sendForm from "./modules/sendForm";
import mobileMenu from "./modules/mobileMenu";

modal();
scrollLinks();
slider();
carousel();
accordeon();
arrowScroll();
mobileMenu();
sendForm({ formId: "form1" });
