import manuBurger from "../images/burgermenu.jpg";

const menuCard = () => {
  return `
   <div class="container content-body">
   <img CLASS="img-fluid" src="${manuBurger}">
   </div>
   `;
};

export { menuCard as default };
