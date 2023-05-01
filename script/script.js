"use strict";
import * as View from "./views/mainView.js"
import * as Price from "./views/priceView.js"
import * as Work from "./views/workView.js";
import * as Index from "./views/indexView.js"



import * as dataImage from "./imgData.js";
import * as data from "./data.js";



const navBar = document.querySelector(".navbar__div");

navBar.addEventListener("click", (a) => {
    // a.preventDefault()
    const element = a.target.closest(".a__navbar-link");
    if (!element) return;

    if (element.textContent === 'prace') {
        Work.app.render(dataImage.img);
        Work.app.init()
    }

    if (element.textContent === 'cennik') {
        Price.app.render(data.price);
        Price.app.init();
    }

    if (element.textContent === "o mnie" || element.textContent === "usługi" || element.textContent === "kontakt") {
        Index.app.init();
    }
})