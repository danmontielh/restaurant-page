import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import header from "./components/header";
import homePage from "./components/homepage";
import contact from "./components/contact";
import about from "./components/about";
import menuCard from "./components/menu";
import {
  createDivWithId,
  renderComponent,
  menuListener
} from "./components/helpers";

// SET Header and divs

header();
createDivWithId("content", "app");

const app = document.getElementById("content");
const menu = Array.from(document.getElementsByTagName("a"));

// Load Homepage Component
renderComponent(app, homePage);

// Navegation Handler Function

const handleNavegation = $event => {
  if ($event.target.innerText === "Contact") {
    renderComponent(app, contact);
  } else if ($event.target.innerText === "About") {
    renderComponent(app, about);
  } else if ($event.target.innerText === "Menu") {
    renderComponent(app, menuCard);
  } else {
    renderComponent(app, homePage);
  }
};

menuListener(menu, handleNavegation);
