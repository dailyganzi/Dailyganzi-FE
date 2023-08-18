import Component from "../Component.js";

export default class MarkButton extends Component {
  constructor({ data }) {
    super({ tagName: "button", props: { data } });
  }

  render() {
    this.el.className = "mark";
    this.el.id = "mark";
    if (this.isDataInLS(this.props.data)) {
      this.el.classList.add("active");
    }
    this.el.addEventListener("click", ({ target }) => {
      this.mark(this.props.data, target);
    });

    // 스크린리더 대체텍스트 생성
    const altMark = document.createElement("span");
    altMark.classList.add("a11y-hidden");
    altMark.textContent = "즐겨찾기 등록";

    this.el.appendChild(altMark);
  }

  isDataInLS(data) {
    const marked = window.localStorage.getItem("marked");

    if (marked) {
      const markedArray = JSON.parse(marked);
      let result = markedArray.some((i) => {
        if (i.keyword === data.keyword) {
          return true;
        }
      });
      return result;
    }
    return false;
  }

  /**
   * @todo 즐겨찾기 등록
   */
  mark(data, target) {
    alert("준비중인 기능입니다.");
    const marked = window.localStorage.getItem("marked");
    const markedArray = marked ? JSON.parse(marked) : [];
    const index = markedArray.findIndex((i) => i.keyword == data.keyword);

    if (index > 0) {
      // 즐겨찾기 등록 되어있다면 삭제
      markedArray.delete(index);
      window.localStorage.setItem("marked", JSON.stringify(markedArray));
    } else {
      // 즐겨찾기 등록 되어있지 않다면 추가
      markedArray.push(data);
      window.localStorage.setItem("marked", JSON.stringify(markedArray));
    }
    target.classList.toggle("active");
  }
}
