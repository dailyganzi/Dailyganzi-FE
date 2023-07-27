const wrap = document.querySelector(".wrap");

const largerTextButton = document.querySelector("#larger-text input");
const changeModeButton = document.querySelector("#setting-mode input");


largerTextButton.addEventListener("click", () => {
    if (wrap.classList.contains("enlarged")) {
        wrap.classList.remove("enlarged");
    } else {
        wrap.classList.add("enlarged");
    }
});


changeModeButton.addEventListener("click", () => {
        if (document.querySelector('body').classList.contains('dark-mode')) {
            document.body.classList.remove("dark-mode");
        } else {
            document.body.classList.add("dark-mode");
        }
    });