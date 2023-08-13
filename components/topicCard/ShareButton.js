import Component from "../Component.js";
// import "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.10/clipboard.min.js";

export default class ShareButton extends Component {
  constructor() {
    super({ tagName: "button" });
  }

  render() {
    this.el.className = "share";
    this.el.id = "share";
    this.el.addEventListener("click", this.copyLink);

    // 스크린리더 대체텍스트 생성
    const altShare = document.createElement("span");
    altShare.classList.add("a11y-hidden");
    altShare.textContent = "링크로 이 토픽 공유하기";

    this.el.appendChild(altShare);
  }

  copyLink() {
    const URL = window.location.href;
    window.navigator.clipboard.writeText(URL).then(() => {
      alert("클립보드에 링크가 복사되었습니다.");
    });
  }
}
