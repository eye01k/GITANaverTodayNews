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
        나타나도록 슬라이드박스의 left값을
        -100%로 이동시킨다!
        ->이 때, 바깥에 나가있는 첫 번째 슬라이드 li를 잘라서 맨 뒤로 보낸다
        동시에 left 값을 0으로 변경

        (2) 왼쪽버튼 클릭시 
        먼저 맨 뒤의 슬라이드 li를 맨 앞으로 이동시킨다. 이 때 left 값을 -100%로 변경
        이후 left 값을 0으로 변경하여 애니메이션

        5. 추가기능: 슬라이드 위치표시 블릿
        - 블릿대상 : .indic li
        - 변경내용 : 슬라이드 순번과 같은 순번의
        li에 클래스 "on"주기(나머진 빼기-초기화)

    ************************************/
    // 이벤트 대상: .abtn
    let abtn = document.querySelectorAll(".abtn");

    // 변경대상: #slide
    let slide = document.querySelector("#slide");

    /***************** 
        함수명: goSlide
        기능: 슬라이드를 왼쪽/오른쪽으로 이동
    *****************/

        const goSlide = dir => { // dir: 이동 방향(1-오른쪽, 0-왼쪽)

            // 전달값 및 호출 확인
            console.log("전달값: ",dir)

            // 방향 분기
            // 2-1. 오른쪽 버튼
            if(dir){ // dir===1 이면 true

                // (1) 슬라이드박스의 left값을 -100%로 이동시킨다!
                slide.style.left = "-100%";
                slide.style.transition = ".6s ease-out";

                // (2) 바깥에 나가있는 첫 번째 슬라이드 li를 잘라서 맨 뒤로 보낸다
                // 일정시간 후 한 번 실행하는 함수 - setTimeout
                setTimeout(()=>{
                    // appendChild(요소) - 선택요소 맨 뒤 이동
                    slide.appendChild(slide.querySelectorAll("li")[0]);

                    // (3) 동시에 left 값을 0으로 변경
                    slide.style.left = "0";
                    slide.style.transition = "none";
                },600); ///// setTimeout

                
            } /////// if
            // 2-2. 왼쪽 버튼
            else{

            } /////// else

        }; /////// goSlide

    // 오른쪽 버튼 클릭 시
    abtn[1].onclick = () => goSlide(1);

    // 왼쪽 버튼 클릭 시
    abtn[0].onclick = () => goSlide(0);

}); ///////////// load //////////////////////