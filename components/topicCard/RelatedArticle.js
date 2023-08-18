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

    const a11yAnounce = document.createElement("p");
    heading.classList.add("a11y-hidden");
    heading.textContent = "클릭할 경우 해당 뉴스 페이지로 이동합니다.";

    this.el.append(heading, a11yAnounce);

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

      // a11y-hidden
      const spanPress = document.createElement("span");
      spanPress.classList.add("a11y-hidden");
      spanPress.textContent = "언론사: ";
      const spanTitle = document.createElement("span");
      spanTitle.classList.add("a11y-hidden");
      spanTitle.textContent = "제목: ";
      const spanPreview = document.createElement("span");
      spanPreview.classList.add("a11y-hidden");
      spanPreview.textContent = "내용: ";

      a.append(spanPress, pPress, spanTitle, pTitle, spanPreview, divPreview);
      li.appendChild(a);
      ul.appendChild(li);
    });

    this.el.appendChild(ul);
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
