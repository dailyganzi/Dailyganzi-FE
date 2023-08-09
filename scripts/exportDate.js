const $date = document.querySelector("#date");

// 어제 날짜에 대한 정보를 담은 객체를 리턴
const getYesterday = () => {
  const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

  const date = new Date();
  date.setDate(date.getDate() - 1);

  const yesterday = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    day: DAYS[date.getDay()],
  };

  return yesterday;
};

const { month, date, day } = getYesterday();
$date.textContent = `${month}월 ${date}일(${day})`;
