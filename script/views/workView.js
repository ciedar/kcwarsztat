import View from "./mainView.js";


class Work extends View {
    #container = document.querySelector(".body__div");

    init() {
        const a = this.generateHTML();
        this.#container.innerHTML = "";
        this.#container.insertAdjacentHTML("afterbegin", a);
    }

    generateHTML() {
        return `
                <section class="my__work">
                <div class="my__work-div">
                ${this.data.map((a) => {
            return `<img src="${a.path}">`
        })}
                </div>
                </section>
               `
    }


}


export const app = new Work();