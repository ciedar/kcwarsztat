import View from "./mainView.js";

class priceView extends View {
    #container = document.querySelector(".body__div");

    init() {
        const a = this.generateHTML();
        this.#container.innerHTML = "";
        this.#container.insertAdjacentHTML("afterbegin", a);
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
};

export const app = new priceView();



