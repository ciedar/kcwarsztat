import { service } from "../serviceData.js";
import View from "./mainView.js";

class Service extends View {
    #eventTarget = document.body
    #obj;
    #ele;


    init() {
        const markup = this.generateHTML()
        this.clear();
        this.containerElement.insertAdjacentHTML("afterbegin", markup)
    }

    generateHTML() {
        return `<section class="text"> 
        <div class="tescikk">
                <div class="section__container--1 tescik">
                ${this.data.map((a, i) => {
            return `
                <div class="div__${i}">
                <figure class="fig__${i}">
                            <button class="fig__btn lol">${a.name}</button>
                            </figure>
                            </div>`
        }).join("")}
        </div>
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
            const c = a.target.closest(".lol");
            if (!c) return;
            const ele = c.textContent;
            const newELe = ele
            const find = this.data.find((a) => {
                return a.name == newELe;
            })

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


