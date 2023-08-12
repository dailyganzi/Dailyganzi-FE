import Component from "../Component";

export default class ShareButton extends Component {
  constructor() {
    super({ tagName: "button" });
  }

  render() {
    this.el.className("share");
    this.el.id = "share";
    this.el.addEventListener("click", this.copyLink);

    // 스크린리더 대체텍스트 생성
    const altShare = document.createElement("span");
    altShare.classList.add("a11y-hidden");
    altShare.textContent = "링크로 이 토픽 공유하기";

    this.el.appendChild(altShare);
  }

  /**
   * @todo 현재 페이지 링크 공유
   */
  copyLink() {
    const URL = window.location.href;
  }
}
