// Vogue PJ 링크 시스템 JS

$(()=>{

    console.log("로딩완료");

    // gnb메뉴 a요소 클릭 시 링크 연결하기

    $(".gnb a").click(function(){
        let txt = $(this).text().trim().toLowerCase();
        // trim(): 앞뒤 공백 제거
        // toLowerCase(): 소문자로 변환
        // toUpperCase(): 대문자로 변환
        console.log("메뉴글자: ",txt);
    }); /////// click

}); ////////////////////// JQB