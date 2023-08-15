import TopicCard from "../components/topicCard/TopicCard.js";

// functions
const getData = async () => {
  try {
    const file = "/asset/data/newsPage.json";
    const response = await axios.get(file);
    const { today_keys, details } = response.data;

    drawKeywords(today_keys);
    drawCards(details[0]);
  } catch (error) {
    console.error(error);
    alert("데이터 불러오기에 실패했습니다.");
  }
};

const drawKeywords = (data) => {
  // 키워드리스트 삽입
  console.log(data);
};

const drawCards = (data) => {
  // 카드리스트 삽입
  console.log(data);
};

// main 실행코드
const $wrapper = document.querySelector(".wrapper");
const $keywordList = $wrapper.querySelector(".list-keyword");
const $cardList = $wrapper.querySelector(".list-card");

getData();

// const topicCard = new TopicCard({ data: data });

// $wrapper.appendChild(topicCard.el);

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
