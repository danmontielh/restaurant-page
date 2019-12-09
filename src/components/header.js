import { createDivWithId } from "./helpers.js";

const header = () => {
    createDivWithId('header', 'app');
    const headerDiv = document.getElementById("header");
    let head = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Burger Son's</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      <li class="nav-item">
          <a class="nav-link" href="#about" class="link">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact" class="link">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact" class="link">Contact</a>
        </li>
        
      </ul>
    </div>
  </nav>`;
  return (headerDiv.innerHTML = head);
};

export { header as default };