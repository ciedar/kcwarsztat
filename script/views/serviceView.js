// import View from "./mainView.js";

// class Service extends View {
//     #container = document.querySelector(".body__div");
//     // #obj;

//     init() {
//         const a = this.generateHTML();
//         this.#container.innerHTML = "";
//         this.#container.insertAdjacentHTML("afterbegin", a);
//         // this.getA();
//     }



//     generateHTML() {
//         return `<section class="text">
//         ${this.data.map((a) => {
//             return `
//             <div class="tadek">
//                 <figure class="kran">
//                 <a class="jedyneczka" href="#">${a.name} </a>
//                 </figure>
//             </div>`})}
//          </section>`
//     }

//     getA(a) {
//         // document.querySelector(".body__div").addEventListener("click", (a) => {
//         const c = a.target.closest("a");
//         if (!c) return;
//         let ele = c.textContent;
//         console.log(this.data)
//         console.log(ele)
//         const obj = this.data.find((a) => {
//             return a.name === ele;
//         })
//         console.log(obj)
//         const html = `
//             <section class="text">
//             <div class="left__div">
//                     ${obj.dlaList.map((a) => {
//             return `<p>${a}</p>`
//         })}
//             </div>
//             <div class="right__div">
//                 ${obj.przeciwList.map((a) => {
//             return `<p>${a}</p>`
//         })}
//             </div>
//             </section>`
//         this.#container.innerHTML = "";
//         this.#container.insertAdjacentHTML("afterbegin", html);
//         // handler()
//         // }
//         // )
//     }
// }

// export const app = new Service;

import View from "./mainView.js";

class Service extends View {
    #container = document.querySelector(".body__div");

    init() {
        const a = this.generateHTML();
        this.#container.innerHTML = "";
        this.#container.insertAdjacentHTML("afterbegin", a);

        this.#container.addEventListener("click", (event) => {
            this.getA(event);
        });
    }

    generateHTML() {
        return `<section class="text">
      ${this.data.map((a) => {
            return `
          <div class="tadek">
            <figure class="kran">
              <a class="jedyneczka" href="#">${a.name}</a>
            </figure>
          </div>
        `;
        })}
    </section>`;
    }

    getA(event) {
        const c = event.target.closest("a");
        if (!c) return;
        let ele = c.textContent;
        const obj = this.data.find((a) => {
            return a.name === ele;
        });
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
        this.#container.innerHTML = "";
        this.#container.insertAdjacentHTML("afterbegin", html);
    }
}

export const app = new Service();