// 옷소매 갤러리 JS - main.js

$(()=>{
    console.log("로딩완료");

    // 변경대상: .gbx -> 갤러리 부모박스
    let gbx = $(".gbx");

    // 양쪽 이동버튼 클릭 시
    // 이벤트 대상: .abtn
    $(".abtn").click(function(){

        console.log("오른쪽이냐?",$(this).is(".rb"));

        // 분기
        // 오른쪽 버튼 클릭시
        // 선택자.is("클래스 아이디 태그명") -> true or false 값을 반환
        if($(this).is(".rb")){
            // 오른쪽 이동은 맨 앞 div 요소를 맨 뒤로 이동
            // 대상: .gbx div
            $(gbx).append(gbx.find("div").first());
        }
        else $(gbx).prepend(gbx.find("div").last());
    }); //////////////////버튼 클릭
}); ///////////////////////////JQB