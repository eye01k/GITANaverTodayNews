// Vogue PJ 공통 JS

////// 로드구역 //////////
window.addEventListener("DOMContentLoaded", () => {

    console.log("로딩완료");

    // 스크롤 값 변수
    let scTop;
    // 상단영역 #top 변수에 할당
    let topA = document.querySelector("#top");

    let tbtn = document.querySelector(".tbtn");

    /* 
        [윈도우 스크롤 이벤트 함수]
        -스크롤 이벤트: scroll
        -이벤트 대상: window
        -스크롤 이벤트 값: scrollY

    */
    window.addEventListener("scroll", () => {
        // 스크롤 위치값
        scTop = this.scrollY;
        // scrollY - 세로축 스크롤 위치값 리턴
        // this는 화살표 함수에서 window 객체임
        console.log("스위: ", scTop);

        /* 
         [윈도우 세로 스크롤 위치값 가져오는 방법]
        1. this.scrollY (this키워드가 window의미)
        2. window.scrollY
        3. document.scrollingElement.scrollTop
        4. document.documentElement.scrollTop
        5. document.querySelector("html").scrollTop

        참고) 가로스크롤일 경우
            scrollY -> scrollX
            scrollTop -> scrollLeft
            로 바꿔서 위와 동일함!

        */

        // 1. 스크롤 위치값이 100 이상일 때 #top에 클래스 on 부여
        // 2. 스크롤 위치값이 100 미만일 때 #top에 클래스 on 제거
        if(scTop>=100) topA.classList.add("on");
        else topA.classList.remove("on");
        
        if(scTop>=200) tbtn.classList.add("show");
        else tbtn.classList.remove("show");
    }); ////////// scroll
}); ////////////////// load