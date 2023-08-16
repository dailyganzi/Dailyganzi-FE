import Component from "../Component.js";

export default class ShareButton extends Component {
  constructor({ data = dummy }) {
    super({ tagName: "div", props: { data } });
  }

  render() {
    this.el.className = "related";
    this.el.id = "related";

    const heading = document.createElement("p");
    heading.classList.add("heading");
    heading.textContent = "관련 기사 보기";

    const ul = document.createElement("ul");
    console.log(this.props.data);
    this.props.data.map((item, index) => {
      const li = document.createElement("li");
      li.classList.add(`item${index}`);

      const a = document.createElement("a");
      a.href = item.url;

      const pPress = document.createElement("p");
      pPress.classList.add("press");
      pPress.textContent = item.press;

      const pTitle = document.createElement("p");
      pTitle.classList.add("title");
      pTitle.textContent = item.title;

      const divPreview = document.createElement("div");
      divPreview.classList.add("preview");
      divPreview.textContent = item.preview;

      a.append(pPress, pTitle, divPreview);
      li.appendChild(a);
      ul.appendChild(li);
    });

    this.el.append(heading, ul);
  }
}

const dummy = [
  {
    press: "언론사",
    title: "기사 제목",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae cum repudiandae odit soluta voluptatibus optio, illum harum voluptates. Recusandae doloribus atque doloremque aperiam laborum tenetur, molestiae ipsa corrupti aliquam.",
    url: "#1",
  },
  {
    press: "언론사",
    title: "기사 제목",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae cum repudiandae odit soluta voluptatibus optio, illum harum voluptates. Recusandae doloribus atque doloremque aperiam laborum tenetur, molestiae ipsa corrupti aliquam.",
    url: "#2",
  },
  {
    press: "언론사",
    title: "기사 제목",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae cum repudiandae odit soluta voluptatibus optio, illum harum voluptates. Recusandae doloribus atque doloremque aperiam laborum tenetur, molestiae ipsa corrupti aliquam.",
    url: "#3",
  },
];
