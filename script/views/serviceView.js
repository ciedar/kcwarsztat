import { service } from "../serviceData.js";
import View from "./mainView.js";

class Service extends View {
    #eventTarget = document.body
    #obj;
    #ele;


    init() {
        const markup = this.generateHTML()
        // console.log(data, markup)
        this.clear();
        this.containerElement.insertAdjacentHTML("afterbegin", markup)
    }

    generateHTML() {
        return `<section class="text">
        ${this.data.map((a) => {
            return `
            <div class="tadek">
                <figure class="kran">
                <a class="jedyneczka" href="#">${a.name} </a>
                </figure>
            </div>`})}
         </section>`
    }


    eventHandler() {
        this.#eventTarget.addEventListener("click", a => {
            const ele = a.target.closest(".section__1-tex-a");
            if (!ele) return;
            this.init()
        })
    }

    getA() {
        this.#eventTarget.addEventListener("click", a => {
            const c = a.target.closest(".jedyneczka");
            if (!c) return;
            const ele = c.textContent;
            console.log(ele.length)
            const newELe = ele.slice(0, -1)
            // const din = this.data.map((a, i) => {
            //     return a.name.length
            // });
            const find = this.data.find((a) => {
                return a.name == newELe;
            })

            console.log(find)
            const html = `
              <section class="text">
                <div class="left__div">
                <p class="div_head">Dla kogo?</p>
                  ${find.dlaList.map((a) => {
                return `<p>${a}</p>`;
            }).join("")}
                </div>
                <div class="right__div">
                <p class="div_head" >Przeciwskazania</p>
                  ${find.przeciwList.map((a) => {
                return `<p>${a}</p>`;
            }).join("")}
                </div>
              </section>`;
            this.clear()
            this.containerElement.insertAdjacentHTML("afterbegin", html);
        })
    }

}

export const app = new Service();