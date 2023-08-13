import ShareButton from "../components/topicCard/ShareButton.js";
import Summaries from "../components/topicCard/Summaries.js";
import RelatedArticle from "../components/topicCard/RelatedArticle.js";

// 더미데이터
const data = {
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

const $wrapper = document.querySelector(".wrapper");

const shareButton = new ShareButton();
const summaries = new Summaries({ data: data.summary });
const relatedArticle = new RelatedArticle({ data: data.related });

// $wrapper.appendChild(shareButton.el);
// $wrapper.appendChild(summaries.el);
$wrapper.appendChild(relatedArticle.el);
