import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import header from './components/header.js';
import homePage from './components/homepage.js';
import { createDivWithId, renderComponent, menuListener } from "./components/helpers.js";

// SET Header and divs

header();
createDivWithId('content', 'app');

const app = document.getElementById('content');
const menu = Array.from(document.getElementsByTagName('a'));

renderComponent(app, homePage);
