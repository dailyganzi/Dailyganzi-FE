const $keywordsList = document.querySelector("#keywords");

const appendListItem = (target, number, content) => {
  // <a href="url">number. content</a>
  const a = document.createElement("a");
  a.href = '#';
  // a.href = `/pages/search.html?q=${content}`;
  a.textContent = `${number}. ${content}`;

  // <li><a/></li>
  const li = document.createElement("li");
  li.appendChild(a);

  target.appendChild(li);
};

const getHotKeywords = async () => {
  try {
    // const file = "/asset/data/hotTopic.json";
    axios.defaults.baseURL = "https://dailyganzi-back-app.fly.dev/api/";
    const response = await axios.get("/hot-topic");
    const keywords = response.data.hot_topic;
    console.log(keywords);

    // #keywords 노드의 자식 노드 전부 제거 후 새로운 자식 노드를 추가
    $keywordsList.replaceChildren();
    keywords.map((item, index) => {
      appendListItem($keywordsList, index + 1, item);
    });
  } catch (error) {
    console.error(error);
  }
};

getHotKeywords();
