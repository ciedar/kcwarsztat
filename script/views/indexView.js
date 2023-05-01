import View from "./mainView.js";

class Index extends View {
    #container = document.querySelector(".body__div");
    init() {
        const a = this.generteHTML();
        this.#container.innerHTML = "";
        this.#container.insertAdjacentHTML("afterbegin", a);
    }
    // clear() {
    //     this.#container.innerHTML = ""
    // }

    generteHTML() {
        return `<div class="body__div">
        <section class="section--0" id="one">
            <div class="section__container">
                <div class="border">
                    <div class="section--0-div-0">
                        <img src="/img/header-img-q.png" alt="section--0-img" class="img">
                    </div>
                    <div class="section--0-div-1">
                        <p class="title">o mnie</p>
                        <p class="art__title">Warsztat Urody</p>
                        <P class="art__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, sint
                            illum
                            exercitationem voluptatum consequatur molestias, temporibus at beatae nam nobis cupiditate
                            iusto? Atque hic sed ab porro adipisci dolorem nulla maiores, animi sint nihil in quibusdam
                            reiciendis explicabo numquam assumenda ratione dignissimos vero labore illo praesentium?
                            Fugiat
                            doloremque itaque esse eligendi suscipit quae error nostrum ab ratione, maiores aliquid!
                            Culpa
                            quam cupiditate voluptas nemo sit. Magnam a animi quam? Totam accusamus quibusdam cum et
                            ipsum
                            rem distinctio vitae minima possimus amet. Itaque obcaecati ducimus provident molestias ipsa
                            quaerat repudiandae, a et eius labore at porro asperiores deleniti animi debitis voluptas
                            nostrum modi facilis tempore quisquam corrupti iste reiciendis qui. Provident beatae iusto
                            atque
                            voluptas quo iste aliquid minus recusandae! Quae, laboriosam neque minima a exercitationem
                            porro
                            maxime totam voluptas reprehenderit? Corporis eum impedit temporibus sequi iure unde,
                            consectetur nulla voluptatem quae! Vitae exercitationem id sed obcaecati doloribus,
                            consequuntur
                            aspernatur deleniti.</P>
                    </div>
                </div>
            </div>
        </section>
        <section class="section--1" id="two">
            <div class="section__title-div">
                <p class="section__title">Usługi</p>
                <div class="section__title-btn">
                    <p class="section__1-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, magnam.
                        <span class="btn__span"><a class="section__1-tex-a" href="#">Lorem, ipsum.</a>
                            <svg class="section__1-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="#000000" viewBox="0 0 256 256">
                                <path
                                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z">
                                </path>
                            </svg></span>

                    </p>
                </div>
            </div>
            <div class="section__container--1">
                <div class="div__0">
                    <figure class="fig__0">
                        <button class="fig__btn">botoks</button>
                    </figure>
                </div>
                <div class="div__1">
                    <figure class="fig__1">
                        <button class="fig__btn">wybielanie zębów</button>
                    </figure>
                </div>
                <div class="div__2">
                    <figure class="fig__2">
                        <button class="fig__btn">nici-pdo</button>
                    </figure>
                </div>
                <div class="div__3">
                    <figure class="fig__3">
                        <button class="fig__btn">lipoza</button>
                    </figure>
                </div>
            </div>
        </section>
        <section class="section--2" id="three">
            <div class="section__2-container">
                <div class="social__icons__contact">
                    <div class="div div--1">
                        <svg class="addres__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="#000000" viewBox="0 0 256 256">
                            <path
                                d="M83.19,174.4a8,8,0,0,0,11.21-1.6,52,52,0,0,1,83.2,0,8,8,0,1,0,12.8-9.6A67.88,67.88,0,0,0,163,141.51a40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,81.6,163.2,8,8,0,0,0,83.19,174.4ZM112,112a24,24,0,1,1,24,24A24,24,0,0,1,112,112Zm96-88H64A16,16,0,0,0,48,40V64H32a8,8,0,0,0,0,16H48v40H32a8,8,0,0,0,0,16H48v40H32a8,8,0,0,0,0,16H48v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V40A16,16,0,0,0,208,24Zm0,192H64V40H208Z">
                            </path>
                        </svg>
                        <p>Amundsena 7b, Gdańsk oś. Morena</p>
                    </div>
                    <div class="div div--2">
                        <svg class="telephone__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="#000000" viewBox="0 0 256 256">
                            <path
                                d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z">
                            </path>
                        </svg>
                        <p>+48 796500085</p>
                    </div>
                    <div class="div div--3">
                        <svg class="email__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="#000000" viewBox="0 0 256 256">
                            <path
                                d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z">
                            </path>
                        </svg>
                        <p>kciesla43@wp.pl</p>
                    </div>
                </div>
                <div class="map__container">
                    <iframe class="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18598.867724854437!2d18.578930000000007!3d54.359482000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd75a317d1ef81%3A0x54a60deb2cf92471!2sRoalda%20Amundsena%207%2C%2080-288%20Gda%C5%84sk%2C%20Polska!5e0!3m2!1spl!2sus!4v1682803804430!5m2!1spl!2sus"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    </div>`
    }
}


export const app = new Index();