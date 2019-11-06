import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import header from './components/header.js';
import { createDivWithId, renderComponent, menuListener } from "./components/helpers.js";

// SET Header and divs

header();
createDivWithId('content', 'app');
