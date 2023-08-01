/**
 * @todo 이후 백엔드 API 완성 시 알맞게 데이터 수정 필요
 */
const createCard = (target, data) => {
  const { keyword, image, summary, related } = data;

  const card = document.createElement("article");
  card.classList.add("topic-card");

  // 헤딩과 프리뷰 이미지 추가
  const h2Title = document.createElement("h2");
  h2Title.textContent = keyword;

  const imgPreview = document.createElement("img");
  imgPreview.classList.add("related-img");
  imgPreview.src = image;

  // 요약
  const divSummary = createSummary(summary);

  // 관련 기사
  const divRelated = createRelated(related);

  // 액션 버튼들
  const divActions = createActions();

  card.append(h2Title, imgPreview, divSummary, divRelated, divActions);
  target.appendChild(card);
};

const createSummary = (summary) => {
  const divSummary = document.createElement("div");
  divSummary.classList.add("summary");
  divSummary.id = "summary";

  const heading = document.createElement("p");
  heading.classList.add("heading");
  heading.textContent = "요약";

  const ul = document.createElement("ul");
  summary.map((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add(`item${index}`);
    ul.appendChild(li);
  });

  divSummary.append(heading, ul);

  return divSummary;
};

const createRelated = (related) => {
  const divRelated = document.createElement("div");
  divRelated.classList.add("related");
  divRelated.id = "related";

  const heading = document.createElement("p");
  heading.classList.add("heading");
  heading.textContent = "관련 기사 보기";

  // related [{ press, title, preview, url }]
  const ul = document.createElement("ul");
  related.map((item, index) => {
    const li = document.createElement("li");
    li.classList.add(`item${index}`);

    const a = document.createElement("a");
    a.href = item.url;

    const pPress = document.createElement("p");
    pPress.classList.add("press");
    pPress.textContent = item.press;

    const pTitle = document.createElement("p");
    pTitle.classList.add("title");
    pTitle.textContent = item.title;

    const divPreview = document.createElement("div");
    divPreview.classList.add("preview");
    divPreview.textContent = item.preview;

    a.append(pPress, pTitle, divPreview);
    li.appendChild(a);
    ul.appendChild(li);
  });

  divRelated.append(heading, ul);

  return divRelated;
};

/**
 * @todo: 각 버튼에 이벤트 리스너 추가
 */
const createActions = () => {
  const divActions = document.createElement("div");
  divActions.classList.add("actions");

  // 공유하기 버튼
  const btnShare = document.createElement("button");
  btnShare.classList.add("share");
  btnShare.id = "share";

  const altShare = document.createElement("span");
  altShare.classList.add("a11y-hidden");
  altShare.textContent = "링크로 이 토픽 공유하기";

  btnShare.appendChild(altShare);

  // 즐겨찾기 버튼
  const btnStar = document.createElement("button");
  btnStar.classList.add("star");
  btnStar.id = "star";

  const altStar = document.createElement("span");
  altStar.classList.add("a11y-hidden");
  altStar.textContent = "즐겨찾기 등록";

  btnStar.appendChild(altStar);

  divActions.append(btnShare, btnStar);

  return divActions;
};

// 완성된 구조
/* <article class="topic-card">
  <h2>제목</h2>
  <img class="related-img" src="http://via.placeholder.com/640x480" alt="" />
  <div class="summary" id="summary">
    <p class="heading">요약</p>
    <ul>
      <li>요약1</li>
      <li>요약2</li>
      <li>요약3</li>
    </ul>
  </div>
  <div class="related" id="related">
    <p class="heading">관련 기사 보기</p>
    <ul>
      <li>
        <a href="#">
          <p class="press">언론사</p>
          <p class="title">기사 제목</p>
          <div class="preview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            vitae cum repudiandae odit soluta voluptatibus optio, illum harum
            voluptates. Recusandae doloribus atque doloremque aperiam laborum
            tenetur, molestiae ipsa corrupti aliquam.
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <p class="press">언론사</p>
          <p class="title">기사 제목</p>
          <div class="preview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            vitae cum repudiandae odit soluta voluptatibus optio, illum harum
            voluptates. Recusandae doloribus atque doloremque aperiam laborum
            tenetur, molestiae ipsa corrupti aliquam.
          </div>
        </a>
      </li>
    </ul>
  </div>
  <div class="actions">
    <button class="share" id="share">
      <span class="a11y-hidden">링크로 이 토픽 공유하기</span>
    </button>
    <button class="star" id="star">
      <span class="a11y-hidden">즐겨찾기 등록</span>
    </button>
  </div>
</article>; */
