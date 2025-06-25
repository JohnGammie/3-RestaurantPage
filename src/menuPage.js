export function menuPage() {
    let divContent = document.querySelector("#content");

    let menuHeading = document.createElement("h1");
    menuHeading.textContent = "Menu";
    divContent.appendChild(menuHeading);

    for (let i = 0; i < 9; i++) {
        let menuItem = document.createElement("p");
        menuItem.id = `item${i}`;
        menuItem.textContent = `Meal${i}`;
        divContent.appendChild(menuItem);
    }
}