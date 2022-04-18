// 자동 스크롤 기능 - autoScroll.js

// 전역변수 구역
// 1. 현재 페이지 번호
let pno = 0;
// 2. 전체 페이지 수
const totnum = 7;
// 3. 광스크롤 막기
let prot_sc = 0; // 0-허용, 1-잠금
// 4. 스크롤 애니메이션 시간
const dur_sc = 1000; // (=광스크롤 금지 시간)
// 5. 스크롤 이징
const easing_sc = "easeOutQuint";

$(()=>{
    // console.log("로딩완료");

    /* 
        [자동스크롤 구현]

        1.기능: 마우스 휠이 위나 아래로 움직일때
        페이지가 위나 아래로 자동으로 애니메이션 되는 기능

        2.이벤트: 마우스휠을 움직일때 발생하는 이벤트
        - mousewheel (오리지널 이벤트) -> 파이어폭스 지원 안 함
        - wheel (신규 이벤트 - 아직 벤더사의 웹표준이 아님)
            ->  엣지, 사파리 지원 안 함
        - DOMMouseScroll (파이어폭스 전용 이벤트)

        -> 결론적으로 모두 한꺼번에 지원하는 이벤트가 없으므로 mousewheel + DOMMouseScroll 2개를 같이 사용
        (mousewheel + wheel 도 가능)

        3.마우스 휠 이벤트와 함수를 연결하는 방법
        - on(이벤트명,함수)
        - on 메서드로 어떤 이벤트와도 함수를 연결할 수 있다
        -> 이벤트명을 띄어쓰기로 여러개 사용 가능
        (참고로 bind(이벤트명,함수) 메서드도 있었으나 지금은 없어짐)

        4.마우스 휠 이벤트 대상: 보통 document에 적용
        ->>> 중요한 업데이트 유의사항
        document, window, body 객체는 이벤트 막기를 할 수 없다 (2019년도에 위 세가지 중요객체에 대하여 기본 막기를 할 수 없도록 브라우저 소스가 업데이트 됨
        why? 모바일에서 에러가 발생하는 주요원인이기 때문
        즉, e.preventDefault 또는 return false 를 사용한 기능 막기를 못함)

        예시)
        $(document).on("click",function(e){
            e.preventDefault();
        })
        $(window).on("mousewheel",function(e){
            return false;
        })
        $("body").on("mouseover",function(e){
            e.preventDefault();
        })

        -> 에러를 우회하는 방법
        1) window, document, body 대신 내부에 전체를 싸는 요소를 부모박스로 만들고 이것에 기본 막기를 설정

        2) 스크롤바를 보일 필요가 없다면 막기를 하지 않고 overflow:hidden 처리하여 스크롤 자체가 되지 않게 셋팅한다

        3) window, document, body에 passive모드를 설정
        -> passive: false 로 설정
    */

    // 자동스크롤 구현
    $(document).on("mousewheel DOMMouseScroll",
    function(e){

        // 광스크롤 막기
        if (prot_sc) return;
        prot_sc = 1; // 막기
        setTimeout(()=>prot_sc=0,dur_sc);

        // e.preventDefault();

        // console.log("스크롤링");

        // e 변수로 전달되는 이벤트 변수 처리하기
        e = window.event  || e;
        // 변수에 할당한 OR로 쓴 뒤의 두 가지의 값 중 먼저 true인 값이 변수에 할당된다
        // 변수 = 변수1 || 변수2
        // window.event 는 오리지널 윈도우 객체 이벤트
        // 이벤트 전달 시 에러를 막기 위한 보완코드임

        /* 
            1. 마우스 휠 방향 알아내기
        */
       // -> 페이지를 위로 갈지 아래로 갈지 결정하기 위함
       // 휄 델타값으로 방향을 알아낸다
       // e.wheelDelta 는 일반 브라우저용 방향 정보
       // e.detail은 파이어폭스용 방향 정보
       let delta = e.wheelDelta || e.detail;
       // 변수 = 속성값1 || 속성값2
       // -> 두 가지 값 중 undefined가 아닌 값, 즉, true 처리가 되는 값이 할당된다
    //    console.log("휠 델타값: ",delta);


    /* 
        1.5. 파이어폭스 방향 반대로 전환하기
        -> 현재 브라우저가 파이어폭스인지 어떻게 알지?
        navigator.userAgent 
        -> 브라우저 정보 표시
        -> 브라우저 정보에 "firefox"라는 문자가 있으면 파이어폭스
        -> 정규식으로 해당 문자가 있는지 구분하기
        /문자/i -> 대소문자 구분 x
        -> 정규식.test(값) -> 값에 정규식 문자가 있으면 true
        -> /firefox/i.test(navigator.userAgent);
        -> 브라우저 정보에 "firefox" 문자가 있으면 true
    */
    // console.log("브라우저 정보: ",navigator.userAgent);

    // 파이어폭스 브라우저에서 delta(휠 방향정보)가 반대가 됨
    if(/firefox/i.test(navigator.userAgent)) delta = -delta;


       /* 
            2. 방향에 따른 페이지 번호 증감하기
       */
        if(delta<0){ // -120 아래방향
            pno++;
            if(pno===totnum) pno=totnum-1;
            // 한계값 끝번호 고정
        } ///////// if
        else{
            pno--;
            if(pno<0) pno=0;
            // 한계값 첫번호 고정
        }

        console.log("페이지 번호: ",pno);

        /* 
            3. 윈도우 높이값에 페이지 번호를 곱하여 이동
        */
       // 이동할 위치 -> 윈도우 높이값*페이지 번호
       let pgpos = $(window).height()*pno;

       $("html, body").stop().animate({
           scrollTop: pgpos+"px"
       },dur_sc,easing_sc);
    }); /////////////mousewheel

}); /////////////JQB