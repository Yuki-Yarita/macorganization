//日付を取得
// 本日の日付を取得する
const today = new Date();

//年月日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

//会社名と年数を表示
const headTitle = document.getElementById('headerTitle');
headTitle.innerHTML = '株式会社 亜細亜情報システム' + year;

//今日の日付を取得して表示
const organizationToday = year + " / " + month + " / " + day;
const indicationDate = document.getElementById('today');
indicationDate.innerHTML = organizationToday + "　　";