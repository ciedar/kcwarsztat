"use strict";

// views
import * as View from "./views/mainView.js"
import * as Price from "./views/priceView.js"
import * as Work from "./views/workView.js";
import * as Service from "./views/serviceView.js"
import * as Index from "./views/indexView.js"
// data
import * as dataImage from "./imgData.js";
import * as data from "./data.js";
import * as serviceData from "./serviceData.js";

//


function renderData() {
    Price.app.render(data.price)
    Work.app.render(dataImage.img)
    Service.app.render(serviceData.service)

}



function events() {
    Price.app.eventHandler();
    Index.app.eventHandler();
    // Index.app.event();
    Work.app.eventHandler();
    Service.app.eventHandler();
    Service.app.getA(serviceData.service);


}
renderData();
events();




