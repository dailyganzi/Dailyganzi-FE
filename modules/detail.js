import TopicCard from "../components/topicCard/TopicCard.js";
import TopSection from "../components/TopSection.js";

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

const getCategoryIdFromParams = () => {
  const params = new URLSearchParams(window.location.search);
  const categoryId = params.get("category_id");
  console.log(categoryId);

  return categoryId;
};

const getData = async (categoryId) => {
  try {
    // const file = "/asset/data/newsPage.json";
    axios.defaults.baseURL = "https://dailyganzi-back-app.fly.dev/api/";
    const response = await axios.get(`${categoryId}/newsPage`);
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

// TopSection 컴포넌트 생성
const topSectionEl = new TopSection({
  titleText: "",
}).el;

// Wrapper 맨 앞에 TopSection 삽입
$wrapper.insertAdjacentElement("afterbegin", topSectionEl);

const categoryId = getCategoryIdFromParams();
getData(categoryId);
