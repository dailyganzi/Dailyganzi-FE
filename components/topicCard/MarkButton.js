import Component from "../Component.js";

export default class MarkButton extends Component {
  constructor() {
    super({ tagName: "button" });
  }

  render() {
    this.el.className = "mark";
    this.el.id = "mark";
    this.el.addEventListener("click", this.mark);

    // 스크린리더 대체텍스트 생성
    const altMark = document.createElement("span");
    altMark.classList.add("a11y-hidden");
    altMark.textContent = "즐겨찾기 등록";

    this.el.appendChild(altMark);
  }

  /**
   * @todo 즐겨찾기 등록
   */
  mark() {
    // const URL = window.location.href;
    alert("준비중인 기능입니다.");
  }
}
