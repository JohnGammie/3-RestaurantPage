export function homePage() {
    let divContent = document.querySelector("#content");

    let restaurantName = document.createElement("h1");
    restaurantName.textContent = "Steve's Bistro!";
    divContent.appendChild(restaurantName);

    let restaurantDescription = document.createElement("p");
    restaurantDescription.textContent = "The best food ever.";
    divContent.appendChild(restaurantDescription);
}