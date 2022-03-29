// 도깨비PJ 링크 시스템 JS - linksys.js

/////////////////로드구역////////////////////////
window.addEventListener('DOMContentLoaded', ()=>{
    console.log('로딩 완료');

    // 로고 클릭 시 홈으로
    // 대상: #logo img
    let logo = document.querySelector('#logo img');

    // 손가락 표시
    logo.style.cursor = 'pointer';
    logo.style.zIndex = '3';
    logo.style.position = 'relative';

    // 클릭 시 홈으로 이동
    logo.onclick = ()=> location.href='index.html';
    // 화살표 함수에서 코드가 하나면 중괄호 생략 가능

    // 링크 대상: .top a
    let alink = document.querySelectorAll(".top a");
    console.log('링크개수: ',alink.length);

    for(let i=0; i<alink.length; i++){
        alink[i].onclick = function(){
            console.log("버튼명: ",this.innerText);

            // a요소 버튼명 변수에 담기
            let atxt = this.innerText;

            // 이동 주소
            let url;

            // 분기문
            switch(atxt){
                case "로그인": url="login"; break;
                case "회원가입": url="member"; break;
                case "인물관계도": url="cha"; break;
                default: url='esc';
            }
            
            // url 값이 esc가 아니면 페이지 이동
            if(url!=='esc') location.href = url+".html";
            // location.href = 이동할 페이지 주소
            // -> 페이지 이동
            // 원래 window.location.href 이지만 window 객체명은 생략 가능
            else location.href = "cha.html";
        }; ///////////////// click
    } ////////////////////////// for문
}); /////////////////////////////////로드구역