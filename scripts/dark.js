const wrap = document.querySelector(".wrap");

const largerTextButton = document.querySelector("#larger-text input");
const changeModeButton = document.querySelector("#setting-mode input");

let largerCheckBox = document.querySelector("#larger-text input");
const biggerTextBar = document.getElementById("bigger-text-bar");
const pushAlarmBar = document.getElementById("push-alarm-bar");
const darkThemeBar = document.getElementById("dark-theme-bar");

// 글씨 크게 보기
biggerTextBar.addEventListener("click", () => {
  enlargedAction();
});

largerCheckBox.addEventListener("click", () => {
  enlargedAction();
});

function enlargedAction(){
  if (wrap.classList.contains("enlarged")) {
    wrap.classList.remove("enlarged");
    largerCheckBox.checked = false;
    } else {
      wrap.classList.add("enlarged");
      largerCheckBox.checked = true;
    }
  }


  // 다크 테마 적용
changeModeButton.addEventListener("click", () => {
  if (document.querySelector('body').classList.contains('dark-mode')) {
    document.body.classList.remove("dark-mode");
    } else {
        document.body.classList.add("dark-mode");
    }
  });