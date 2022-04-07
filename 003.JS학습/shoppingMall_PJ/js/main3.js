// 쇼핑몰 배너 JS //
// 로드구역 ////////////
window.addEventListener("load", () => {

    console.log("로딩완료!");

    /************************************ 
        [ 슬라이드 이동 기능정의 ]
        1. 이벤트 종류: 클릭
        2. 이벤트 대상: 이동버튼(.abtn)
        3. 변경 대상: 슬라이드 박스(#slide)
        4. 기능흐름: 

        -> 클래스 on 넣기 전에 초기화 기본

        (1) 오른쪽버튼 클릭시 다음슬라이드에 클래스 on을 넣는다
        
        (2) 오른쪽버튼 클릭시 이전슬라이드에 클래스 on을 넣는다

        5. 추가기능: 슬라이드 위치표시 블릿
        - 블릿대상 : .indic li
        - 변경내용 : 슬라이드 순번과 같은 순번의
        li에 클래스 "on"주기(나머진 빼기-초기화)

    ************************************/
    // 이벤트 대상: .abtn
    let abtn = document.querySelectorAll(".abtn");

    // 변경대상: #slide
    let slide = document.querySelector("#slide");
    // 슬라이드 li 요소들 변수 할당
    let sli = slide.querySelectorAll("li");

    // 변경대상: .indic li
    let indic = document.querySelectorAll(".indic li");

    // 슬라이드 번호 변수
    let sno = 0; // 첫 번호는 0

    // 슬라이드 한계값을 위한 개수
    const lmt = sli.length;
    console.log(lmt);

    // 광클금지 상태값
    let prot = 0; // 1-금지, 0-허용

    /***************** 
        함수명: goSlide
        기능: 슬라이드를 왼쪽/오른쪽으로 이동
    *****************/

    const goSlide = (dir,gb) => { 
        // dir: 이동 방향(1-오른쪽, 0-왼쪽)
        // gb - 구분코드(인터발 호출일 때만 값을 받아옴)


        // 잠금상태 확인
        console.log("잠금상태", prot);

        // 버튼 클릭 시 gb 전달값이 없으므로 undefined가 되어 !gb는 true
        if(!gb) clearAuto(); // 인터발함수 지우기



        // 0. 광클 금지
        if (prot) return; // 돌아가
        prot = 1; // 잠금
        setTimeout(() => prot = 0, 610);
        // .6초 후 잠금 해제

        // 전달값 및 호출 확인
        // console.log("전달값: ",dir)



        // 방향 분기
        // 2-1. 오른쪽 버튼
        if (dir) { // dir===1 이면 true

            // (1) 슬라이드 li 순번 증가
            sno++;
            if (sno === lmt) sno = 0; // 마지막 번호를 넘을 시 처음으로

        } /////// if

        // 2-2. 왼쪽 버튼
        else {

            // (1) 슬라이드 li 순번 감소
            sno--;
            if (sno === -1) sno = lmt - 1; // 마지막 번호를 넘을 시 처음으로

        } /////// else

        // (2) 슬라이드 li 초기화
        for (let x of sli) x.classList.remove("on"); // 첫 번호 이전으로 넘을 시 마지막으로

        // (3) 해당 번호 li에 클래스 on 넣기
        sli[sno].classList.add("on");
        // 3. 슬라이드 순번과 동일한 순번의 블릿에 클래스 on 넣기
        // 모두 class="on"을 없애고 슬라이드 li의 data-seq의 숫자를 읽어서 블릿 li의 해당 순번에 class="on"을 준다 

        // 초기화(class="on" 지우기)
        for (let x of indic) x.classList.remove("on");

        // 해당 순번에 class="on" 넣기
        indic[sno].classList.add("on");
    }; /////// goSlide


    // 오른쪽 버튼 클릭 시
    abtn[1].onclick = () => goSlide(1);

    // 왼쪽 버튼 클릭 시
    abtn[0].onclick = () => goSlide(0);

    // 인터발용 변수
    let autoI;

    // 인터발 호출 함수
    const autoCall = () => {
        // 인터발 자동호출
        autoI = setInterval(() => goSlide(1, 1), 2500);
        // 특정 상황에서 지우기 위해 변수에 할당

    }; //////// autoCall

    // 인터발 호출 함수 최초 호출
    autoCall();

    // 타임아웃용 변수
    let autoT; // 타임아웃을 지우기 위해 선언

    // 인터발 삭제 함수
    // 슬라이드 이동 버튼 클릭 시 호출
    const clearAuto = () => {

        console.log("인터발 지우기");

        // 1. 인터발 지우기 + 타임아웃 지우기
        clearInterval(autoI);
        clearTimeout(autoT);
        // 한 번씩 셋팅되는 타임아웃을 지우지 않으면 여러 개 작동하여 실행쓰나미가 발생한다

        // 2. 일정시간 후 다시 인터발 호출하기
        autoT = setTimeout(autoCall, 4000);
        // 4초 후 autoCall()함수 호출

    }; //////// clearAuto

}); ///////////// load //////////////////////