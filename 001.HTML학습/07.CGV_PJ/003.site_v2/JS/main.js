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


////////////////////////////// 로딩 구역 ////////////////////////////////
window.addEventListener("load",()=>{

    // 포스터 메뉴 li 클릭 시 li에 클래스 on 넣기

    // 클래스 초기화 함수
    const resetFn =  () => {
        for(let x of ontg) x.classList.remove("on");
    }; // resetFn 함수
    // 대상: .mlist ul>li
    let ontg = document.querySelectorAll(".mlist li");
    for(let x of ontg){
        x.onclick = ()=>{
            // 1. 클래스 초기화
            resetFn();

            // 2. 클릭된 li 클래스 on 넣기
            x.classList.add("on");
        };
    } ///////////////// for of 문 ////////////////////////
}); //////////////////// 로딩 구역 ////////////////////////////////////////