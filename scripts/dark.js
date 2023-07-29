const wrap = document.querySelector(".wrap");

const largerTextButton = document.querySelector("#larger-text input");
const pushAlarmButton = document.querySelector("#push-alarm-bar input")
const changeModeButton = document.querySelector("#setting-mode input");

const biggerTextBar = document.getElementById("bigger-text-bar");
const pushAlarmBar = document.getElementById("push-alarm-bar");
const darkThemeBar = document.getElementById("dark-theme-bar");

// 글씨 크게 보기
function enlargedAction(){
  if (wrap.classList.contains("enlarged")) {
    wrap.classList.remove("enlarged");
    largerTextButton.checked = false;
    } else {
      wrap.classList.add("enlarged");
      largerTextButton.checked = true;
    }
  }

biggerTextBar.addEventListener("click", () => {
  enlargedAction();
});

largerTextButton.addEventListener("click", () => {
  enlargedAction();
});

// 다크 테마 적용
function modeChangedAction() {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove("dark-mode");
    changeModeButton.checked = false;
    } else {
      document.body.classList.add("dark-mode");
      changeModeButton.checked = true;
    }
  }

changeModeButton.addEventListener("click", () => {
  modeChangedAction();
  });
  
darkThemeBar.addEventListener("click", () => {
  modeChangedAction();
  });