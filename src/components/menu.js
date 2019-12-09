import manuBurger from '../images/burgermenu.jpg';

const menuCard = () => {

    console.log(manuBurger);
    return `
   <div class="container content-body">
   <img CLASS="img-fluid" src="${manuBurger}">
   </div>
   `;
};

export {menuCard as default}