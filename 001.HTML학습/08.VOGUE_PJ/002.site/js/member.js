// Vogue PJ 회원가입 페이지 JS

$(()=>{

    console.log("로딩완료");

    /* 
        [사용자 입력폼 유효성 검사]
        -이벤트 종류: blur() -> 포커스가 빠질 때 발생
        -이벤트 대상: 
        (1)type은 text이면서 id는 email2가 아니고 클래스가 search가 아닌 input
        input[type=text][id!=email2][class!=search]
        (2)type이 password인 input
        input[type=password]

        >> 제이쿼리 선택 표현법  
        대괄호: 속성 선택, != 같지 않다(제이쿼리 전용)
    */

    $(`input[type=text][id!=email2][class!=search],
    input[type=password]`)
    .blur(function(){

        // 방금 블러 발생한 요소의 id는?
        let cid = $(this).attr("id");
        // attr(속성명) -> 해당 속성명의 속성값 읽어옴

        // 블러 발생한 요소의 입력값은?
        let cv = $(this).val();
        // val() -> 선택요소에 입력된 값을 읽어옴

        console.log("블러발생",cid,cv);
    }); /////////// blur
}); ////////////////JQB