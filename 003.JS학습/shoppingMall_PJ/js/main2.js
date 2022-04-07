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
        (1) 오른쪽버튼 클릭시 다음슬라이드가
        나타나도록 슬라이드박스의 top값을
        -100%로 이동시킨다!
        ->이 때, 바깥에 나가있는 첫 번째 슬라이드 li를 잘라서 맨 뒤로 보낸다
        동시에 top 값을 0으로 변경

        (2) 왼쪽버튼 클릭시 
        먼저 맨 뒤의 슬라이드 li를 맨 앞으로 이동시킨다. 이 때 top 값을 -100%로 변경
        이후 top 값을 0으로 변경하여 애니메이션

        5. 추가기능: 슬라이드 위치표시 블릿
        - 블릿대상 : .indic li
        - 변경내용 : 슬라이드 순번과 같은 순번의
        li에 클래스 "on"주기(나머진 빼기-초기화)

    ************************************/
    // 이벤트 대상: .abtn
    let abtn = document.querySelectorAll(".abtn");

    // 변경대상: #slide
    let slide = document.querySelector("#slide");

    // 변경대상: .indic li
    let indic = document.querySelectorAll(".indic li");


    // 슬라이드 li에 순번 속성 주기
    // li가 잘려서 이동하므로 순서가 항상 변경되기 때문에 고유한 순번을 지정하기 위함
    // 지정방법: li에 data-속성명 으로 사용자 정의 속성을 준다
    // (사용자 정의 속성은 data- 로 시작하는 속성명이다)
    // 한번만 실행하는 재귀호출 함수 -> (함수)()
    (()=>{
        // 대상: #slide li
        let tg = slide.querySelectorAll("li");
        for(let i = 0; i<tg.length; i++){
            tg[i].setAttribute("data-seq",i);
        }
    })();

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
            console.log("잠금상태",prot);

            // 0. 광클 금지
            if(prot) return; // 돌아가
            prot = 1; // 잠금
            setTimeout(() => prot = 0, 610);
            // .6초 후 잠금 해제

            // 전달값 및 호출 확인
            // console.log("전달값: ",dir)
            // 버튼 클릭 시 gb 전달값이 없으므로 undefined가 되어 !gb는 true
            if(!gb) clearAuto(); // 인터발함수 지우기


            // 1.5 슬라이드 li 요소들 변수 할당
            let sli = slide.querySelectorAll("li");

            // 방향 분기
            // 2-1. 오른쪽 버튼
            if(dir){ // dir===1 이면 true

                // (1) 슬라이드박스의 top값을 -100%로 이동시킨다!
                slide.style.top = "-100%";
                slide.style.transition = ".6s ease-out";

                // 슬라이드 이동 후(.6초 후) (2),(3)을 한 번 실행 
                // 일정시간 후 한 번 실행하는 함수 - setTimeout
                setTimeout(()=>{
                    // (2) 바깥에 나가있는 첫 번째 슬라이드 li를 잘라서 맨 뒤로 보낸다
                    // appendChild(요소) - 선택요소 맨 뒤 이동
                    slide.appendChild(sli[0]);

                    // (3) 동시에 top 값을 0으로 변경
                    slide.style.top = "0";
                    slide.style.transition = "none";
                },600); ///// setTimeout
            } /////// if

            // 2-2. 왼쪽 버튼
            else{
                // li 요소
                // (1) 먼저 맨 뒤의 슬라이드 li를 맨 앞으로 이동
                // insertBefore(넣을놈,넣을놈전놈)
                slide.insertBefore(sli[sli.length-1],sli[0]);

                // (2) 이 때 top 값을 -100%로 변경
                slide.style.top = "-100%";
                slide.style.transition = "none";

                // (3)이후 top 값을 0으로 변경하여 애니메이션
                // 주의: 위의 설정코드와 분리를 위해 setTimeout으로 약간의 시차를 준다
                setTimeout(()=>{
                    slide.style.top = "0";
                    slide.style.transition = ".6s ease-out";
                },10); //// setTimeout
            } /////// else

            // 3. 슬라이드 순번과 동일한 순번의 블릿에 클래스 on 넣기
            // 모두 class="on"을 없애고 슬라이드 li의 data-seq의 숫자를 읽어서 블릿 li의 해당 순번에 class="on"을 준다 
    
            // 초기화(class="on" 지우기)
            for(let x of indic) x.classList.remove("on");
    
            // 갱신된 li 읽어오기 (오른쪽, 왼쪽 이동 후)
            sli = slide.querySelectorAll("li");

            // 슬라이드의 data-seq 값을 읽어옴
            // 오른쪽 버튼 이동일 경우 두 번째 슬라이드[1]
            // 왼쪽 버튼 이동일 경우 첫 번째 슬라이드[0]
            // => 버튼 구분번호도 오른쪽 1, 왼쪽 0 -> dir 변수
            let seq = sli[dir].getAttribute("data-seq");
            // getAttribute(속성명) -> 속성값 읽어오기
            // setAttribute(속성명,속성값) -> 새로운 속성값 셋팅
    
            // 해당 순번에 class="on" 넣기
            indic[seq].classList.add("on");
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
       autoI = setInterval(()=>goSlide(1,1),2500);
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
       autoT = setTimeout(autoCall,4000);
       // 4초 후 autoCall()함수 호출

   }; //////// clearAuto
    

}); ///////////// load //////////////////////