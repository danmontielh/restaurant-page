import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import header from './components/header.js';
import homePage from './components/homepage.js';
import contact from './components/contact.js'
import { createDivWithId, renderComponent, menuListener } from "./components/helpers.js";

// SET Header and divs

header();
createDivWithId('content', 'app');

const app = document.getElementById('content');
const menu = Array.from(document.getElementsByTagName('a'));


//Load Homepage Component
renderComponent(app, homePage);


// Navegation Handler Function

const handleNavegation = ($event) => {
    if ($event.target.innerText == 'Contact') {
        renderComponent(app, contact);
    } else {
        renderComponent(app, homePage);
    }
};

menuListener(menu, handleNavegation);