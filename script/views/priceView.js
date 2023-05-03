import View from "./mainView.js";

class Price extends View {
    #navBar = document.querySelector(".navbar__div")
    init() {
        const markup = this.generateHTML()
        this.clear();
        this.containerElement.insertAdjacentHTML("afterbegin", markup)
    }
    generateHTML() {
        return ` 
            <section class="price__section">
                ${this.data.map(({ name, price }) => `
                    <div class="container price__container">
                        <h2 class="container__title">${name}:</h2>
                        ${price.map(({ name, price }) => `
                            <p>${name} - <span class="price">${price}zł</span></p>
                        `).join('')}
                    </div>
                `).join('')}
            </section>`;
    }

    eventHandler() {
        this.#navBar.addEventListener("click", (a) => {
            const element = a.target.closest(".cennik");
            if (!element) return;
            this.init();
        })
    }
};

export const app = new Price();



