'use static';

// DarkMode 구현
function DarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var button = document.getElementById("dark_bt");

    if (button.innerHTML == "다크 모드로 보기") {
        button.innerHTML = "라이트 모드로 보기";
        button.style.backgroundColor = "#FFEFB2";
    } else {
        button.innerHTML = "다크 모드로 보기";
        button.style.backgroundColor = "#8977ad";
    }
}
