const body = document.body;

const largerTextButton = document.querySelector("#larger-text input");
const pushAlarmButton = document.querySelector("#push-alarm-bar input")
const changeModeButton = document.querySelector("#setting-mode input");

const biggerTextBar = document.getElementById("bigger-text-bar");
const pushAlarmBar = document.getElementById("push-alarm-bar");
const darkThemeBar = document.getElementById("dark-theme-bar");

// 글씨 크게 보기
function enlargedAction(){
  if (body.classList.contains("enlarged")) {
    body.classList.remove("enlarged");
    largerTextButton.checked = false;
    localStorage.setItem("largerText", largerTextButton.checked);
    } else {
      body.classList.add("enlarged");
      largerTextButton.checked = true;
      localStorage.setItem("largerText", largerTextButton.checked);
    }
  }

biggerTextBar.addEventListener("click", () => {
  enlargedAction();
});

largerTextButton.addEventListener("click", () => {
  enlargedAction();
});

// 푸시알림 설정
let count = 1;
function setAlarmAction(){
  if (count === 0) {
    pushAlarmButton.checked = false;
    count = 1;
    } else {
    pushAlarmButton.checked = true;
    count = 0;
    }
  }

pushAlarmBar.addEventListener("click", () => {
  setAlarmAction();
});

pushAlarmButton.addEventListener("click", () => {
  setAlarmAction();
});

// 다크 테마 적용
function modeChangedAction() {
  if (body.classList.contains("dark-mode")) {
    // 다크모드가 적용된 상태라면
    body.classList.remove("dark-mode");
    changeModeButton.checked = false;
    localStorage.setItem("darkMode", changeModeButton.checked);
    } else { // 라이트모드라면
    body.classList.add("dark-mode");
    changeModeButton.checked = true;
    localStorage.setItem("darkMode", changeModeButton.checked);
    }
  }

changeModeButton.addEventListener("click", () => {
  modeChangedAction();
});
  
darkThemeBar.addEventListener("click", () => {
  modeChangedAction();
});
