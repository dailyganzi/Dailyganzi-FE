import Component from "../Component.js";
import Summaries from "./Summaries.js";
import RelatedArticle from "./RelatedArticle.js";
import MarkButton from "./MarkButton.js";
import ShareButton from "./ShareButton.js";

const dummy = {
  keyword: "제목",
  image: "http://via.placeholder.com/640x480",
  summary: ["요약1", "요약2", "요약3"],
  related: [
    {
      press: "언론사",
      title: "기사 제목",
      preview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae cum repudiandae odit soluta voluptatibus optio, illum harum voluptates. Recusandae doloribus atque doloremque aperiam laborum tenetur, molestiae ipsa corrupti aliquam.",
      url: "naver.com",
    },
    {
      press: "언론사",
      title: "기사 제목",
      preview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae cum repudiandae odit soluta voluptatibus optio, illum harum voluptates. Recusandae doloribus atque doloremque aperiam laborum tenetur, molestiae ipsa corrupti aliquam.",
      url: "naver.com",
    },
    {
      press: "언론사",
      title: "기사 제목",
      preview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae cum repudiandae odit soluta voluptatibus optio, illum harum voluptates. Recusandae doloribus atque doloremque aperiam laborum tenetur, molestiae ipsa corrupti aliquam.",
      url: "naver.com",
    },
  ],
};

export default class TopicCard extends Component {
  constructor({ data = dummy }) {
    super({ tagName: "article", props: { data } });
  }

  render() {
    this.el.className = "topic-card";

    console.log(this.props);
    console.log(this.props.data);
    const { keyword, image, summary, related } = this.props.data;

    // 헤딩
    const $h2 = document.createElement("h2");
    $h2.textContent = keyword;

    // 프리뷰
    const $previewImg = document.createElement("img");
    $previewImg.className = "related-img";
    $previewImg.src = image;

    // 요약
    const $summaries = new Summaries({ data: summary }).el;

    // 관련 기사
    const $related = new RelatedArticle({ data: related }).el;

    // 액션 버튼들
    const $actions = document.createElement("div");
    $actions.className = "actions";

    const $shareButtonEl = new ShareButton().el;
    const $markButtonEl = new MarkButton().el;

    $actions.append($shareButtonEl, $markButtonEl);

    this.el.append($h2, $previewImg, $summaries, $related, $actions);
  }
}
