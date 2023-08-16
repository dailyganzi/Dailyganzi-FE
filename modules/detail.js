import TopicCard from "../components/topicCard/TopicCard.js";
import Footer from "../components/Footer.js";

// functions
const getData = async () => {
  try {
    const file = "/asset/data/newsPage.json";
    const response = await axios.get(file);
    const { category, today_topic, details } = response.data;

    setCategoryName(category);
    drawKeywords(today_topic);
    drawCards(details);
  } catch (error) {
    console.error(error);
    alert("데이터 불러오기에 실패했습니다.");
  }
};

const setCategoryName = (category) => {
  const $categoryTexts = $wrapper.querySelectorAll(".category");
  $categoryTexts.forEach((element) => {
    element.textContent = category;
  });
};

const drawKeywords = (data) => {
  // 키워드리스트 삽입
  const $keywordList = $wrapper.querySelector(".list-keyword");
  // $keywordList.replaceChildren();
  console.log(data);
};

const drawCards = (data) => {
  // 카드리스트 삽입
  const $cardList = $wrapper.querySelector(".list-card");

  data.map((item) => {
    const li = document.createElement("li");
    const topicCard = new TopicCard({ data: item });
    li.appendChild(topicCard.el);
    $cardList.appendChild(li);
  });
};

// main 실행코드
const $wrapper = document.querySelector(".wrapper");

getData();

// Footer 컴포넌트 생성
const FooterEl = new Footer({
  tagName: "footer",
}).el;

// Wrapper 마지막 자식으로 Footer 삽입
document.querySelector(".wrapper").insertAdjacentElement("beforeend", FooterEl);

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
