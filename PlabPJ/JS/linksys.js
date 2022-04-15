// Plab PJ 링크 시스템 JS

$(()=>{
    $(".logo").click(()=>{
        // console.log("dd");
        location.href = "index.html";
    }); // 로고 클릭 시 메인페이지로

    $(".mlist a").click((e)=>{

        // a요소 기본 기능 막기
        e.preventDefault();

        
    }); // 매치메뉴 클릭 시
}); ///////////////////JQB