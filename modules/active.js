const items = document.querySelectorAll("footer .bottom-bar");
console.log(items);
items.forEach((item)=>{
  item.addEventListener('click',()=>{
    items.forEach((e)=>{
      // 하나만 선택되도록 기존의 효과 지워주기
      e.classList.remove('active');
    })
      // 선택한 메뉴만 효과 추가해주기
      item.classList.add('active');
    })
})

// 연동 확인용
// const feed = document.getElementById("feed");
// console.log(feed);