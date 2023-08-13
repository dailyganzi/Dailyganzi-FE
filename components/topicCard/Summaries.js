import Component from "../Component.js";

export default class ShareButton extends Component {
  constructor({ data = ["요약1", "요약2", "요약3"] }) {
    super({ tagName: "div", props: { data } });
  }

  render() {
    this.el.className = "summary";
    this.el.id = "summary";

    const heading = document.createElement("p");
    heading.classList.add("heading");
    heading.textContent = "요약";

    const ul = document.createElement("ul");
    this.props.data.map((item, index) => {
      const li = document.createElement("li");
      li.textContent = item;
      li.classList.add(`item${index}`);
      ul.appendChild(li);
    });

    this.el.append(heading, ul);
  }
}
