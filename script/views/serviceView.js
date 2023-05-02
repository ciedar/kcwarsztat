import View from "./mainView.js";

class Service extends View {
    #eventTarget = document.body

    init() {
        const markup = this.generateHTML()
        // console.log(data, markup)
        this.clear();
        this.containerElement.insertAdjacentHTML("afterbegin", markup)
    }
    // initEvent() {
    //     const markup = this.getA()
    //     this.clear();
    //     this.containerElement.insertAdjacentHTML("afterbegin", markup)
    // }


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

    getA(render) {
        this.#eventTarget.addEventListener("click", a => {
            this.render(render)
            const c = a.target.closest(".jedyneczka");
            if (!c) return;
            let ele = c.textContent;
            console.log(this.data);
            const obj = this.data.find((a) => {
                console.log(a.name)
                console.log(ele)
                return a.name === ele;
            });
            console.log(obj)
            const html = `
          <section class="text">
            <div class="left__div">
              ${obj.dlaList.map((a) => {
                return `<p>${a}</p>`;
            })}
            </div>
            <div class="right__div">
              ${obj.przeciwList.map((a) => {
                return `<p>${a}</p>`;
            })}
            </div>
          </section>`;
            this.clear()
            this.containerElement.insertAdjacentHTML("afterbegin", html);
        })
    }


}

export const app = new Service();