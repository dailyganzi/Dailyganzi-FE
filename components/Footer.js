import Component from "./Component.js";

export default class Footer extends Component{
    constructor() {
      super({ tagName: "footer" });
    }

    render() {
    // 피드
      this.feedA = document.createElement("a");
      this.feedA.setAttribute("href", "main.html");

      this.feed = document.createElement("button");
      this.feed.className = "bottom-bar";
      this.feed.id = "feed";
      this.feedA.appendChild(this.feed);

      const feedDiv = document.createElement("div");
      this.feed.appendChild(feedDiv);

      const feedSpan = document.createElement("span");
      feedSpan.innerText = "피드";
      this.feed.appendChild(feedSpan);

    // 즐겨찾기
      this.markA = document.createElement("a");
      this.markA.setAttribute("href", "");

      this.mark = document.createElement("button");
      this.mark.className = "bottom-bar";
      this.mark.id = "mark";
      this.markA.appendChild(this.mark);

      const markDiv = document.createElement("div");
      this.mark.appendChild(markDiv);

      const markSpan = document.createElement("span");
      markSpan.innerText = "즐겨찾기";
      this.mark.appendChild(markSpan);

    // 즐겨찾기 클릭시 alert 창 띄우기
      this.markA.addEventListener('click', ()=>{
        alert("준비중인 기능입니다.");
      });

    // 설정
      this.settingsA = document.createElement("a");
      this.settingsA.setAttribute("href", "settings.html");

      this.settings = document.createElement("button");
      this.settings.className = "bottom-bar";
      this.settings.id = "settings";
      this.settingsA.appendChild(this.settings);

      const settingsDiv = document.createElement("div");
      this.settings.appendChild(settingsDiv);

      const settingsSpan = document.createElement("span");
      settingsSpan.innerText = "설정";
      this.settings.appendChild(settingsSpan);

      this.el.append(this.feedA, this.markA, this.settingsA);
  }
}

// DOM이 불러와진 뒤 실행
document.addEventListener('DOMContentLoaded', ()=> {
  // 현재 페이지에 따라 active 상태 적용
  let pathname = window.location.pathname;
  console.log(pathname);
  const feed = document.getElementById("feed");
  const mark = document.getElementById("mark");
  const settings = document.getElementById("settings");

  if(pathname.includes("/pages/settings.html")){
    settings.classList.add("active");
  } else if(pathname.includes("/pages/main.html")){
    feed.classList.add("active");
  } else if (pathname.includes("/pages/mark.html")){
    mark.classList.add("active");
  }
});