// Vogue PJ 링크 시스템 JS

$(()=>{

    console.log("로딩완료");

    // 메인로고 클릭 시 메인페이지로 이동
    $(".logo a").click(()=>location.href = "index.html");

    // gnb메뉴 a요소 클릭 시 링크 연결하기

    $(".gnb a").click(function(e){

        // a요소 기본 기능 막기
        e.preventDefault();

        let txt = $(this).text().trim().toLowerCase();
        // trim(): 앞뒤 공백 제거
        // toLowerCase(): 소문자로 변환
        // toUpperCase(): 대문자로 변환
        console.log("메뉴글자: ",txt);

        // "search"가 아니면 카테고리 페이지로 보냄
        if(txt!== "search") location.href ="category.html?cat="+txt;

    }); /////// click

}); ////////////////////// JQB