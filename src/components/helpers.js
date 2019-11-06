const createDivWithId = (nameId,parentDiv) => {
    let newDiv = document.createElement('div');
    newDiv.id = nameId;
    document.getElementById(parentDiv).appendChild(newDiv);
};

const renderComponent = (element, component) => {
    return (element.innerHTML = component());
};

const menuListener = (menu, navegation) => {
    menu.forEach(element => {
        element.addEventListener('click', navegation);
    });
};


export { createDivWithId, renderComponent, menuListener };