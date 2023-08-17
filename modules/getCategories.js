const $categories = document.querySelector("#categories");

const categoryImageMap = {
  재난: "../asset/images/police_car_light_3d.png",
  정치: "../asset/images/classical_building_3d.png",
  경제: "../asset/images/money_bag_3d.png",
  사회: "../asset/images/busts_in_silhouette_3d.png",
  IT과학: "../asset/images/dna_3d.png",
  세계: "../asset/images/globe_with_meridians_3d.png",
  오피니언: "../asset/images/eyes_3d.png",
  스포츠: "../asset/images/person_swimming_3d_default.png",
  생활문화: "../asset/images/shopping_cart_3d.png",
};

const appendListItem = (text, id) => {
  // <a href="url">text</a>
  const a = document.createElement("a");
  a.href = `../pages/detail.html?category_id=${id}`;
  a.textContent = `${text}`;
  if (text in categoryImageMap) {
    a.style.backgroundImage = `url(${categoryImageMap[text]})`;
  }

  // <li><a/></li>
  const li = document.createElement("li");
  li.appendChild(a);

  $categories.appendChild(li);
};

const getCategories = async () => {
  try {
    axios.defaults.baseURL = "https://dailyganzi-back-app.fly.dev/api/";
    const response = await axios.get("/categories");
    const categories = response.data.categories;
    console.log(categories);

    // #categories 노드의 자식 노드 전부 제거 후 새로운 자식 노드를 추가
    $categories.replaceChildren();
    for (let key in categories) {
      console.log();
      appendListItem(key, categories[key]);
    }
  } catch (error) {
    console.error(error);
  }
};

getCategories();
