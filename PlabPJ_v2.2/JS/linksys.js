// Plab PJ 링크 시스템 JS

$(()=>{
    $(".logo").click(()=>{
        // console.log("dd");
        location.href = "index.html";
    }); // 로고 클릭 시 메인페이지로

    $(".sns a").first().click(()=>{
        location.href = "login.html";
    }); //////// click

    $(".mlist a").click(function(e){

        // a요소 기본 기능 막기
        e.preventDefault();

        let txt = $(this).find("img").attr("alt");

        console.log(txt);

        if(txt!=="TeamLeague") location.href = "match copy.html?cat="+txt;
    }); // 매치메뉴 클릭 시
}); ///////////////////JQB