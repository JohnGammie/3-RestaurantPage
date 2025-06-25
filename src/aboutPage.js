export function aboutPage() {
    let divContent = document.querySelector("#content");

    let restaurantName = document.createElement("h1");
    restaurantName.textContent = "About";
    divContent.appendChild(restaurantName);


    let aboutDescription = document.createElement("p");
    aboutDescription.textContent = `Steve's bistro has the best food in town. Est 1988`;
    divContent.appendChild(aboutDescription);

}