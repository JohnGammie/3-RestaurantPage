import { homePage } from "./homePage";
import { menuPage } from "./menuPage";
import { aboutPage } from "./aboutPage";

function setupButtons() {
    let buttonHome = document.querySelector(".buttonHome");
    let buttonMenu = document.querySelector(".buttonMenu");
    let buttonAbout = document.querySelector(".buttonAbout");

    buttonHome.addEventListener("click", () => {
        clearContent();
        homePage();
    })

    buttonMenu.addEventListener("click", () => {
        clearContent();
        menuPage();
    })

    buttonAbout.addEventListener("click", () => {
        clearContent();
        aboutPage(); 
    })
}

function clearContent() {
    let divContent = document.querySelector("#content");
    divContent.innerHTML = "";
}

setupButtons();
homePage();

