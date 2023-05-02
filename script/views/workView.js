import View from "./mainView.js";


class Work extends View {
    #navBar = document.querySelector(".navbar__div")

    init() {
        const markup = this.generateHTML()
        this.clear();
        this.containerElement.insertAdjacentHTML("afterbegin", markup)
        this.eventHandler();
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

    eventHandler() {
        this.#navBar.addEventListener("click", (a) => {
            const element = a.target.closest(".prace");
            if (!element) return;
            this.init();
            // this.
        })
    }
}


export const app = new Work();