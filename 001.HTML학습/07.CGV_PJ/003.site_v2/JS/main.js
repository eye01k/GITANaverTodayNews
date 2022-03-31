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

    // 영화 예고편 동영상 코드 객체
    const mcode = {
        "듄":'-5Dc8EMVYBo',
        "유체이탈자":'egg3dUdD_Js',
        "이터널스":"BdkSkI61aGo",
        "연애빠진로맨스":"dWEQjU3GCE0",
        "프렌치디스패치":"Y1_Ujpsn1Jc",
        "스파이더맨노웨이홈":"W7edvITC9g4"
    }; //////// mcode 객체

    // 포스터 a요소 클릭 시 영화 변경
    // 대상: .mlist a
    let mlink = document.querySelectorAll(".mlist a");
    for(let y of mlink){
        y.onclick = ()=>{
            // 각 a요소를 구분
            // -> 자식요소 중 img 의 alt 속성값(영화제목)
            let mtit = y.querySelector("img").getAttribute("alt");
            console.log(mtit);

            // mcode 객체에서 영화 코드 가져와서 chgMV 함수 호출
            chgMV(mcode[mtit]);

            // a요소 #으로 인한 튐현상 방지
            return false; // 돌아갈 때 아무것도 하지마
        }; ////click 함수///////
    } /////// for of 문 ////////////

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