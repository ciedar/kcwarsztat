export default class View {
    data;
    containerElement = document.querySelector(".body__div");



    render(data) {
        this.data = data;
        return this

    }

    clear() {
        this.containerElement.innerHTML = "";
    }


}




