// BackButton component
import Component from "./Component.js";

export default class BackButton extends Component {
  constructor() {
    super({ tagName: "button" });
  }

  render() {
    this.icon = document.createElement("i");
    this.el.appendChild(this.icon);
    this.icon.className = "fa-solid fa-angle-left";

    this.el.addEventListener("click", this.goBack);

    this.el.style.background = "none";
    this.el.style.border = "none";
    this.el.style.fontSize = "20px";
    this.el.style.cursor = "pointer";
  }

  goBack() {
    window.history.back();
  }
}
