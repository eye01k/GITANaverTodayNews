// 제이쿼리 기본 JS - main.js 


$(() => {
    // console.log("로딩완료");

    /* 
        1. 대상선정 변수 할당
    */

    // 대상1: 버튼들 - .btns>button
    let btns = $(".btns>button");
    // console.log(btns.length);

    // 대상2: 미니언즈 - .mi
    let mi = $(".mi");

    // 대상3: 빌딩 각 방 - .building li
    let bd = $(".building li");
    // console.log(bd.length);

    // 대상4: 메시지박스 - .msg
    let msg = $(".msg");

    // 삽입 이미지 변수 셋팅
    // 좀비 이미지 태그
    let mz1 = `<img src="images/mz1.png" alt="좀비1" class="mz">`;
    let mz2 = `<img src="images/mz2.png" alt="좀비2" class="mz">`;
    let zom = `<img src="images/zom.png" alt="좀비들" class="mz">`;

    // 주사기 이미지
    let inj = `<img src="images/inj.png" alt="주사기" class="inj">`;

    // 미니언즈 가로위치 보정값
    // 윈도우 가로크기의 5%
    let win5 = $(window).width() * .05;
    console.log("윈도우 가로크기의 5%", win5);
    // width() 가로크기, height() 세로크기
    // -> 단위없는 px 숫자값 리턴

    /* 
         2. 초기화 셋팅
    */

    // 2-1. 버튼 셋팅: 모든 버튼 숨기고 첫번째 버튼만 보이게 함
    // 버튼들.숨겨().첫번째().보여()
    btns.hide().first().show();

    // 중간 테스트를 위한 버튼 보이기 셋팅
    // btns.hide().eq(7).show();

    // 2-2. 빌딩 숫자 셋팅: 
    // -> 모든 빌딩 li를 순서대로 돌면서 순번 넣기 + 좀비 넣기
    // 대상: 빌딩 li -> bd
    bd.each((idx, ele) => {
        // console.log(idx,ele);

        // 1. 각 li 요소에 글자 넣기(순번)
        $(ele).text(idx);

        // 2. 좀비+주사기 이미지 넣기
        // append(요소) - 선택요소 내부에 맨 뒤 추가
        if (idx === 9) $(ele).append(mz1);
        else if (idx === 7) $(ele).append(mz2);
        else if (idx === 1) $(ele).append(zom);
        else if (idx === 2) $(ele).append(inj);
    }); //////// each

    /* 
        [for문을 사용하지 않고 돌게 해주는 제이쿼리 메서드]
        -> each(function(idx, ele){구현부});
        -> each((idx, ele)=>{구현부});

        - 선택요소를 순서대로 돌면서 구현부를 실행
        - idx(첫번째 전달변수)는 순번이 전달됨(0부터)
        - ele(두번째 전달변수)는 요소 자신(this키워드와 동일)
        - 전달변수는 순서와 개수가 중요
        - 이 메서드를 사용하면 for문을 안 써도 됨
    */

    // 2-3 모든 좀비 숨기기
    $(".mz").hide();
    // for문을 돌리지 않아도 여러 개의 선택요소를 돌 수 있음

    /* 
        3. 버튼별 클릭 이벤트 함수 만들기
    */

    // 버튼 클릭 시 공통 기능 함수
    const miniAct = (ele, seq, call) => {
        // ele - 호출하는 버튼 자신(this 키워드)
        // seq - 이동할 빌딩 li 순번
        // call - 이동 후 콜백함수

        // 1. 클릭된 버튼 자신 없애기
        $(ele).slideUp();
        // slideUp(시간,이징,함수) -> height 값이 0이 되면서 애니메이션 후 display none
        // <-> slideDown(시간,이징,함수)

        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간,이징,함수)
        // opacity 가 0이 되면서 애니메이션 후 display none
        // <-> fadeIn(시간,이징,함수)

        // 3. 미니언 위치 이동: 이동할 빌딩 li의 위치를 알아내기
        // 이동할 li 타겟 -> bd
        let tg = bd.eq(seq); // seq 순번방
        // eq(순번) -> 선택요소들 중 몇번째 요소를 선택
        // eq는 sequence로부터 나옴

        // 화면에서의 top값
        let tgtop = tg.offset().top;
        // 화면에서의 left값
        let tgleft = tg.offset().left + win5;
        // console.log(tgtop,tgleft);
        /* 
            offset() 메서드
            - 기준: 윈도우 화면
            - 요소의 위치나 크기 정보를 담고 있음
            - offset().top -> 요소의 top값
            - offset().left -> 요소의 left값
            
            ____________________________________________
            position() 메서드
            - 기준: 포지션이 있는 부모박스
            - 요소의 위치나 크기 정보를 담고 있음
            - position().top -> 요소의 top값
            - position().left -> 요소의 left값

        */

        // 4. 미니언즈 이동하기
        // 대상: .mi
        mi.animate({
                top: tgtop + "px",
                left: tgleft + "px"
            },
            1200, // 시간
            "easeInOutBack", // 이징
            call // 콜백함수
        ); ////// animate

        // animate({css설정},시간,이징,함수)
        // -> css변경을 애니메이션해주는 메서드
        // transition 설정 불필요

    }; /////////// miniAct 함수

    // 3-1. "들어가기" 버튼 클릭 이벤트 시작
    $(btns).first() // 버튼들 중 첫번째
        .click(function () {

            // 콜백 함수 (미니언 이동 후 실행)
            let callFn = () => {
                // 1. 메시지 변경
                msg
                    .text("와~! 아늑하다! 옆방으로 가보자!") // 메시지 텍스트 변경
                    .fadeIn(200); // 메시지 나타나기

                // 2. 다음버튼 보이기
                $(this) // 클릭된 버튼
                    .next() // 다음 버튼
                    .delay(1000).slideDown();
                // delay(시간) -> 애니메이션 메서드 앞에 사용
            }; /////// 콜백함수 끝

            // 공통기능함수 호출
            miniAct(this, 8, callFn);
        }) /////// click
        // 3-1. "들어가기" 버튼 클릭 이벤트 끝

        // 앞에 세미콜론 없이 다음 버튼으로 이어짐
        // 3-2. "옆방으로" 버튼 클릭 이벤트 시작
        .next().click(function () { // 다음 버튼 클릭

            // 콜백 함수 (미니언 이동 후 실행)
            let callFn = () => {

                // 0. 좀비 등장
                bd.eq(9).find(".mz").delay(1000).fadeIn(400, () => {

                    // 1. 메시지 변경
                    msg
                        .html("악!! 좀비!!! <br> 어서 피하자!") // 메시지 텍스트 변경
                        .fadeIn(200) // 메시지 나타나기
                        .css({
                            left: "-90%" // 말풍선 박스 위치 변경
                        });

                    // 2. 다음버튼 보이기
                    $(this) // 클릭된 버튼
                        .next() // 다음 버튼
                        .delay(1000).slideDown();
                    // delay(시간) -> 애니메이션 메서드 앞에 사용
                });

            }; /////// 콜백함수 끝

            // 공통기능함수 호출
            miniAct(this, 9, callFn);
        }) //// click
        // 3-2. "옆방으로" 버튼 클릭 이벤트 끝

        // 3-3. "위층으로 도망가" 버튼 클릭 이벤트 시작
        .next().click(function () { // 다음 버튼 클릭

            // 콜백 함수 (미니언 이동 후 실행)
            let callFn = () => {
                // 0. 메시지 변경
                msg
                    .text("여긴 없겠지?") // 메시지 텍스트 변경
                    .fadeIn(200, () => {
                        // 1. 좀비 등장
                        bd.eq(7).find(".mz").delay(1000).fadeIn(500, "easeInExpo", () => {

                            // 2. 메시지 수정
                            msg
                                .text("악!! 여기도!!!!")

                            // 3. 다음버튼 보이기
                            $(this) // 클릭된 버튼
                                .next() // 다음 버튼
                                .delay(1000).slideDown();
                            // delay(시간) -> 애니메이션 메서드 앞에 사용
                        })


                    });

            }; /////// 콜백함수 끝

            // 공통기능함수 호출
            miniAct(this, 7, callFn);
        }) //// click
        // 3-3. "위층으로 도망가" 버튼 클릭 이벤트 끝

        // 3-4. "다시 옆방으로" 버튼 클릭 이벤트 시작
        .next().click(function () { // 다음 버튼 클릭

            // 콜백 함수 (미니언 이동 후 실행)
            let callFn = () => {
                // 1. 메시지 변경
                msg
                    .text("여긴 없겠지..?") // 메시지 텍스트 변경
                    .fadeIn(200) // 메시지 나타나기
                    .delay(1000)
                    .fadeOut(100,()=>{
                        msg.html("그래도 무서우니까 <br> 위층으로 가자!")
                        .fadeIn(200)
                        // 2. 다음버튼 보이기
                        $(this) // 클릭된 버튼
                            .next() // 다음 버튼
                            .delay(1000).slideDown();
                        // delay(시간) -> 애니메이션 메서드 앞에 사용
                    });

            }; /////// 콜백함수 끝

            // 공통기능함수 호출
            miniAct(this, 6, callFn);
        }) //// click
        // 3-4. "다시 옆방으로" 버튼 클릭 이벤트 끝

        // 3-5. "무서우니 위층으로" 버튼 클릭 이벤트 시작
        .next().click(function () { // 다음 버튼 클릭

            // 콜백 함수 (미니언 이동 후 실행)
            let callFn = () => {
                // 1. 메시지 변경
                msg
                    .empty() // 선택요소 텍스트 지우기
                    .fadeIn(200,()=>{msg.text("무")}) // 메시지 나타나기
                    .delay(500)
                    .fadeIn(200,()=>{msg.text("무.")}) // 메시지 나타나기
                    .delay(500)
                    .fadeIn(200,()=>{msg.text("무.서")}) // 메시지 나타나기
                    .delay(500)
                    .fadeIn(200,()=>{msg.text("무.서.")}) // 메시지 나타나기
                    .delay(500)
                    .fadeIn(200,()=>{msg.text("무.서.워")}) // 메시지 나타나기
                    .delay(500)
                    .fadeIn(200,()=>{msg.text("무.서.워.")}) // 메시지 나타나기
                    .delay(500)
                    .fadeIn(200,()=>{msg.text("무.서.워..")}) // 메시지 나타나기
                    .delay(500)
                    .fadeIn(200,()=>{msg.text("무.서.워...")}) // 메시지 나타나기
                    .delay(500)
                    .fadeIn(200,()=>{
                        // 2. 좀비 달려오기
                        // 7번방 좀비 - bd.eq(7).find(".mz")
                        let tg = bd.eq(7);

                        // 2-1. 7번방 좀비 5번방으로 이동
                        bd.eq(7).find(".mz").animate({bottom: tg.height()+"px"},500,"easeOutElastic")
                        // 2-2. 주인공에게 달려오기
                        .animate({right: tg.width()*1.2+"px"},1500,"easeOutBounce",()=>{ // 콜백함수 - 물린 후
                            // 3. 주인공 사색
                            mi.css({
                                filter: "grayscale(100%)"
                            });

                            // 4. 메시지 지우기
                            msg.hide();

                            // 5. 2초 뒤에 좀비 되기
                            setTimeout(()=>{
                                // 5-1. 좀비 이미지로 변경
                                mi.find("img")
                                .attr("src","images/mz1.png");
                                // attr(속성명, 속성값)
                                // -> 속성값 변경 메서드
                                // 비교) JS의 setAttribute()

                                // 참고) 속성값 가져오기 - attr(속성명)
                                // 비교) JS의 getAttribute()

                                // 5-2. 좀비 메시지
                                msg.html("나도 좀비;;; <br> 어서 치료 주사를..!!")
                                .css({
                                    left: "100%"
                                })// 말풍선 위치 변경
                                .fadeIn(); // 메시지 보이기

                                // 6. 다음버튼 보이기
                                $(this) // 클릭된 버튼
                                    .next() // 다음 버튼
                                    .delay(1000).slideDown();
                                // delay(시간) -> 애니메이션 메서드 앞에 사용
                            },2000);
                            
                        }) // 좀비 animate
                    });

            }; /////// 콜백함수 끝

            // 공통기능함수 호출
            miniAct(this, 4, callFn);
        }) //// click
        // 3-5. "무서우니 위층으로" 버튼 클릭 이벤트 끝

        // 3-6. "치료주사방으로!" 버튼 클릭 이벤트 시작
        .next().click(function () { // 다음 버튼 클릭

            // 콜백 함수 (미니언 이동 후 실행)
            let callFn = () => {

                // 1. 주사기 돌리기
                // 주의: transform은 animate에서 사용불가
                // transform은 css로 transition으로 구현
                $(".inj").css({
                    transform: "rotate(-150deg)",
                    transition: ".5s ease-out 1s",
                    zIndex: "9999"
                }); ////// 주사기 css

                // 2. 주인공 미니언즈 이미지 변경
                setTimeout(()=>{
                    // 2-1. 미니언즈 흑백 모드 풀어주기
                    mi.css({
                        filter: "grayscale(0%)"
                    })
                    // 2-2. 미니언즈 이미지 변경
                    .find("img").attr("src","images/m2.png");

                    // 2-3. 주사기 이미지 없애기
                    $(".inj").remove();
                    // remove() - 태그 지우기

                    // 3. 메시지 변경
                    msg
                        .text("치료 완료!") // 메시지 텍스트 변경
                        .fadeIn(200) // 메시지 나타나기
                        .delay(1000).fadeIn(200,()=>{
                            msg.html("이제 조금만 더 <br> 가면 탈출이닷!");
                        }); //////// fadeIn
    
                    // 4. 다음버튼 보이기
                    $(this) // 클릭된 버튼
                        .next() // 다음 버튼
                        .delay(2000).slideDown();
                    // delay(시간) -> 애니메이션 메서드 앞에 사용

                },1500); ///// 미니언즈 이미지 변경 timeout

            }; /////// 콜백함수 끝

            // 공통기능함수 호출
            miniAct(this, 2, callFn);
        }) //// click
        // 3-6. "치료주사방으로!" 버튼 클릭 이벤트 끝

        // 3-7. "3번방으로!" 버튼 클릭 이벤트 시작
        .next().click(function () { // 다음 버튼 클릭

            // 콜백 함수 (미니언 이동 후 실행)
            let callFn = () => {
                // 1. 메시지 변경
                msg
                    .text("어서 위층으로 가자!") // 메시지 텍스트 변경
                    .fadeIn(200); // 메시지 나타나기

                // 2. 다음버튼 보이기
                $(this) // 클릭된 버튼
                    .next() // 다음 버튼
                    .delay(1000).slideDown();
                // delay(시간) -> 애니메이션 메서드 앞에 사용
            }; /////// 콜백함수 끝

            // 공통기능함수 호출
            miniAct(this, 3, callFn);
        }) //// click
        // 3-7. "3번방으로!" 버튼 클릭 이벤트 끝

        // 3-8. "1번방으로!" 버튼 클릭 이벤트 시작
        .next().click(function () { // 다음 버튼 클릭

            // 콜백 함수 (미니언 이동 후 실행)
            let callFn = () => {
                // 1. 메시지 변경
                msg
                    .text("헬기를 부르자!") // 메시지 텍스트 변경
                    .fadeIn(200); // 메시지 나타나기

                // 2. 다음버튼 보이기
                $(this) // 클릭된 버튼
                    .next() // 다음 버튼
                    .delay(1000).slideDown();
                // delay(시간) -> 애니메이션 메서드 앞에 사용
            }; /////// 콜백함수 끝

            // 공통기능함수 호출
            miniAct(this, 1, callFn);
        }) //// click
        // 3-8. "1번방으로!" 버튼 클릭 이벤트 끝

        // 3-9. "헬기를 호출!" 버튼 클릭 이벤트 시작
        .next().click(function () { // 다음 버튼 클릭

            // 콜백 함수 (미니언 이동 후 실행)
            let callFn = () => {
                // 1. 메시지 변경
                msg
                    .text("도와줘요!!!") // 메시지 텍스트 변경
                    .fadeIn(200); // 메시지 나타나기

                // 2. 좀비들의 추격
                // -> 1번방에 숨겨진 좀비들이 나옴
                // -> bd.eq(1).find("mz")
                bd.eq(1).find(".mz").fadeIn(200,function(){
                    // 2-1. 좀비들 움직이기
                    $(this)
                    .animate({
                        right: bd.eq(1).width()*1.3+"px" // li보다 조금 더 이동
                    },5000,"easeInOutQuint");

                    // 2-2. 헬기 등장
                    $(".heli").animate({
                        left: "20%"
                    },3000,"easeOutBack",function(){
                        // 3. 주인공이 탄 헬기 이미지로 변경
                        $(this).attr("src","images/heli2.png");
                        // 4. 원래 주인공 이미지 지우기
                        mi.hide(); // display:none 처리
                    }) ///////// animate
                    // 헬기 애니메이션 이어짐
                    .delay(1000)
                    .animate({
                        left: "70%"
                    },5000,"easeInOutQuart",function(){
                        // 7. 헬기 조종사 좀비로 변경
                        $(this).attr("src","images/heli3.png");
                    }) //////////// animate
                    // 헬기 애니 이어짐
                    // 8. 아주 천천히 화면 밖으로 나감
                    .animate({
                        left: "100%"
                    },10000,"easeInOutSine",()=>{
                        // 9. 타이틀에 미리 지정한 클래스를 추가하여 간판이 떨어짐
                        // 대상: .tit
                        let tit = $(".tit"); 

                        // 9-1. 간판 중간 떨어짐
                        tit.addClass("on");

                        // 9-2. 3초 후 간판 완전히 떨어짐
                        setTimeout(()=>{
                            // 간판클래스 추가
                            tit.addClass("on2");

                            // 10. 건물에 클래스 추가하여 건물 무너짐
                            // 대상: .building
                            // bd 변수 (.building li) -> 한 단계 위의 부모로 올라가면 됨 (parent())
                            bd.parent().addClass("on");
                        },3000); /////// timeout

                    })
                }); /////// fadeIn


            }; /////// 콜백함수 끝

            // 공통기능함수 호출
            miniAct(this, 0, callFn);
        }) //// click
    // 3-9. "헬기를 호출!" 버튼 클릭 이벤트 끝

}); ////////////////// JQB