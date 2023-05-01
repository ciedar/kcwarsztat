export default class View {
    data;
    #container = document.querySelector(".body__div");
    render(data) {
        this.data = data;
        console.log(data);
        return this

    }
}




