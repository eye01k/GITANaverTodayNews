// CGV 메인페이지 JS - main.js

/* 
    함수명: chgMV
    기능: 영상 변경
*/
function chgMV(mvid){ // 영화 id값 전달 변수
    // 1. 함수 호출 확인
    console.log("나야나", mvid);

    // 2. 대상 선정: #screen iframe
    var tg = document.querySelector("#screen iframe");

    // 3. 변경내용: 대상의 src속성 변경
    // src 중 영화 아이디 부분을 변경함
    tg.src = `https://www.youtube.com/embed/${mvid}?autoplay=1&playsinline=1`;
} ////////////////////////////chgMV 함수//////////////////////////