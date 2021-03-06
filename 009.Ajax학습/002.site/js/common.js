// Vogue PJ 공통 JS

// 현재 페이지 이름 알아내기
let pgnm = $(location).attr("pathname");
// 슬래쉬 단위로 자르기
pgnm = pgnm.split("/");
//마지막 배열값(페이지 이름) 읽기
pgnm = pgnm[pgnm.length-1];
// JS방식: window.location.pathname -> host 제외한 경로
console.log(pgnm);

// 인덱스 페이지에서만 슬림 슬라이드 클래스를 넣기 위한 코드
let slim = 0;
if(pgnm==="index.php" || pgnm === "category.php" || pgnm.indexOf(".")===-1) slim = 1; // 인덱스 페이지면 1로 변경


$(() => {
    // 햄버거 버튼 클릭 시 모바일 메뉴 보이기
    // 이벤트 대상: .hbtn
    // 모바일 메뉴: #mobx
    $(".hbtn").click(() => {
        $("#mobx").slideToggle(300)
    });

    // 검색 버튼 클릭 시 모바일 메뉴 보이기
    // 이벤트 대상: .sbtn
    // 모바일 메뉴: .mos
    $(".sbtn").click(() => {
        $(".mos").slideToggle(300)
    });

    // 로그인, 회원가입, 갤러리 html코드
    let htcode = `
    <a href="#" class="fi fi-person" title="로그인">
        <span class="ir">
            로그인
        </span>
    </a>
    <a href="#" class="fi fi-male" title="회원가입">
        <span class="ir">
            회원가입
        </span>
    </a>
    <a href="#" class="fi  fi-area-chart" title="갤러리">
        <span class="ir">
            갤러리
        </span>
    </a>
    `;

    // 로그인, 회원가입, 갤러리 아이콘 넣기
    // 대상: .sns a:last-child
    // 변경내용: 대상요소 앞에 a요소 삽입 -> before(요소): 선택요소 앞에 형제요소로 삽입
    // after(요소): 대상요소 뒤에 형제요소로 삽입
    $(".sns a").each(function(){
        $(this).attr("title",$(this).text().trim()); // a요소 각각에 title속성 셋팅
    })
    .last().before(htcode); //////////// before()
    // 마지막 a요소(카카오스토리) 앞에 코드 삽입

    // 모바일에 요소 추가
    $(".mosns a").last().before(htcode)
    .parent().find("a").eq(3).after("<br>");

    // 로그인, 회원가입, 갤러리 클릭 시 페이지 이동
    // 클릭 시 구조가 동일한 모바일도 같이 셋팅
    $(".sns a, .mosns a").click(function(e){
        // 기본 기능 막기
        e.preventDefault();

        // 내부 텍스트 읽어오기
        let txt = $(this).text().trim();
        console.log("클릭된 sns 텍스트: ", txt)

        // 텍스트에 맞게 페이지 연결
        let url;
        switch(txt){
            case "로그인" : url="login"; break;
            case "회원가입" : url="member"; break;
            case "갤러리" : url="gallery"; break;
            default : url = "esc";
        } /////// switch case

        // 페이지 보내기
        if(url!=="esc"){
            location.href = url+".php";
        }
        
    }); ////////// click


}) ///////////////JQB

////// 로드구역 //////////
window.addEventListener("DOMContentLoaded", () => {

    // console.log("로딩완료");

    startSS();
    // 스크롤 값 변수
    let scTop;
    // 상단영역 #top 변수에 할당
    let topA = document.querySelector("#top");

    let tbtn = document.querySelector(".tbtn");

    // 위로가기 버튼 클릭 시 맨 위로 이동
    // 모바일에서 스크롤없이 스와이프 이동 시에도 맨 위로 이동하도록 설정함
    $(".tbtn").click(() => {
        $("html,body").animate({
            scrollTop: "0"
        }, 300);

        // 스크롤 위치값 업데이트
        pos = 0;
    }); //////// click


    // 부드러운 스크롤 위치변수 pos값을 0 주면 됨
    // tbtn.onclick = () => {
    //     pos = 0;

    //     return false;
    // }; /////// click

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
        // console.log("스위: ", scTop);

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
        // 상단메뉴 슬림 변경
        // 1. 스크롤 위치값이 100 이상이고 slim이 1일 때(index.html일 때) #top에 클래스 on 부여
        // 2. 스크롤 위치값이 100 미만일 때 #top에 클래스 on 제거
        if (scTop >= 100 && slim) topA.classList.add("on");
        else topA.classList.remove("on");

        // 위로가기 버튼 보이기
        // 1. 스크롤 위치값이 200 초과일 때 #top에 클래스 show 부여
        // 2. 스크롤 위치값이 200 이하일 때 #top에 클래스 show 제거
        if (scTop > 200) tbtn.classList.add("show");
        else tbtn.classList.remove("show");

        // 등장 액션 클래스 주기

        // 현재 스크롤 위치가 등장할 요소의 위치범위에 도달하면 클래스 on 부여
        // if(scTop > scPos[0]-winH && scTop < scPos[0]){
        //     scAct[0].classList.add("on");
        // }
        // else if(scTop > scPos[1]-winH && scTop < scPos[1]){
        //     scAct[1].classList.add("on");
        // }


        // 등장요소 위치값 배열만큼 체크하는 함수 호출
        scPos.forEach((val, idx) => scAction(idx));





    }); ////////// scroll

    /* 
        원리:
        1) scAct 변수에 .scAct를 담고 요소의 개수만큼 scPos변수에 위치값을 셋팅한다

        2) 등장요소의 위치의 이전부터 위치값 사이 범위에 스크롤이 통과할 때 등장할 요소가 나타나도록 함수로 체크한다
    */

    // 스크롤 등장 대상요소
    let scAct = document.querySelectorAll(".scAct");

    // 스크롤 대상별 위치 배열
    let scPos = [];

    // 대상 요소만큼 for문 돌기
    for (let i = 0; i < scAct.length; i++) {
        scPos[i] = scAct[i].offsetTop;
    } ////////// for /////////

    // console.log(scPos);

    // 스크롤 등장 위치 조정값: 윈도우 화면 크기의 2/3
    const winH = window.innerHeight / 3 * 2;
    // console.log("윈도우 높이의 2/3: ", winH);

    /* 
        함수명: scAction
        기능: 스크롤 위치값이 설정범위에 들어가면 해당 순번의 요소가 등장
    */
    const scAction = seq => { //// seq는 순번
        // console.log("순번: ",seq);

        if (scTop > scPos[seq] - winH && scTop < scPos[seq]) {
            scAct[seq].classList.add("on");
        }
    }; /////// scAction
}); ////////////////// load