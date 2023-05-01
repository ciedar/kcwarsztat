export default class View {
    data;


    #footerHTML = `<footer class="footer">
        <div class="footer__container">
        <a href="index.html" class="logo__footer"><span><img src="/img/logo.png" alt="home__logo"></span></a>
        <p class="footer__addres"> Amundsena 7b, Gdańsk oś. Morena </p>
        <p class="footer__telephone">+48 796500085</p>
        <p class="footer__email">kciesla43@wp.pl</p>
        </div>
        </footer>`;
    // #footerHTML = document.querySelector("footer").innerHTML;

    #headerHTML = `<header class="header">
    <div class="container__navbar">
        <div class="navbar__div">
            <div class="ul__navbar-div">
                <ul class="ul__navbar-list">
                    <li class="li__navbar-element">
                        <a href="index.html" class="logo__btn"><span><img src="/img/logo.png"
                                    alt="home__logo"></span></a>
                    </li>
                    <li class="li__navbar-element">
                        <a class="a__navbar-link" href="#">o mnie</a>
                    </li>
                    <li class="li__navbar-element">
                        <a class="a__navbar-link" href="#">usługi</a>
                    </li>
                    <li class="li__navbar-element">
                        <a class="a__navbar-link" href="#">kontakt</a>
                    </li>
                    <li class="li__navbar-element">
                        <a class="a__navbar-link bluee" href="#">prace</a>
                    </li>
                    <li class="li__navbar-element">
                        <a class="a__navbar-link bluee" href="#">cennik</a>
                    </li>
                </ul>
            </div>
            <div class="a__navbar-div-btn">
                <button class="a__navbar-btn">umów wizyte</button>
            </div>
        </div>
    </div>
    </header>`;
    // #headerHTML = document.querySelector("header").innerHTML;
    #data;

    getFooter() {
        return this.#footerHTML;
    }

    getHeader() {
        return this.#headerHTML;
    }

    render(data) {
        this.data = data;
        console.log(data);
        return this

    }
}


