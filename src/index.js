import modal from "./modules/modal";
import scrollLinks from "./modules/scrollLinks";
import slider from "./modules/slider";
import carousel from "./modules/carousel";
import accordeon from "./modules/accordeon";
import arrowScroll from "./modules/arrowScroll";
import sendForm from "./modules/sendForm";

modal();
scrollLinks();
slider();
carousel();
accordeon();
arrowScroll();
sendForm({ formId: "form1" });
