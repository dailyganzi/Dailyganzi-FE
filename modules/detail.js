import TopicCard from "../components/topicCard/TopicCard.js";

// functions
const setCategoryName = (category) => {
  const $categoryTexts = $wrapper.querySelectorAll(".category");
  $categoryTexts.forEach((element) => {
    element.textContent = category;
  });
};

const drawKeywords = (data) => {
  // 키워드리스트 삽입
  const $keywordList = $wrapper.querySelector(".list-keyword");
  $keywordList.replaceChildren();

  data.map((item) => {
    const li = document.createElement("li");
    li.textContent = `${item}`;
    $keywordList.appendChild(li);
  });
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

// main 실행코드
const $wrapper = document.querySelector(".wrapper");

getData();
