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

        // 모든 공백 제거 함수
        const groSpace = cv => cv.replace(/\s/g,"");
        // const groSpace = cv => {return cv.replace(/\s/g,"")};
        // 중괄호와 return 키워드가 생략됨

        // replace(바꿀값,바뀔값)
        // 정규식: 슬래쉬 사이에 씀
        // 공백문자: \s
        // g -> global, 모두 찾기

        // 방금 블러 발생한 요소의 id는?
        let cid = $(this).attr("id");
        // attr(속성명) -> 해당 속성명의 속성값 읽어옴

        // 블러 발생한 요소의 입력값은?
        let cv = $(this).val();
        // val() -> 선택요소에 입력된 값을 읽어옴

        // 이름 입력인 경우 앞뒤 공백만 제거: trim()
        if(cid === "mnm") cv = cv.trim();
        // 나머지 입력은 모든 공백 제거: groSpace()
        else cv = groSpace(cv);

        // 공백이 제거된 입력값을 다시 입력창에 넣어주기
        $(this).val(cv);

        console.log("블러발생",cid,cv);

        /* 
            1. 빈 값 여부 체크
        */
       if(cv === ""){
        // 메시지 출력
        $(this).siblings(".msg").text("필수 입력!")
        .removeClass("on");
        // 형제요소들 중 클래스가 msg인 요소 선택

       } ////////////////// 빈 값 체크 if

       /* 
            2. 아이디일 경우 유효성 검사
            -검사 기준: 영문자로 시작하는 6~20글자 영문자/숫자
       */
        else if(cid === "mid"){
            // console.log("검사결과",vReg(cv,cid))
            if(!vReg(cv,cid)){ // !(NOT) true면 false로, false면 true로
                $(this).siblings(".msg")
                .text("영문자로 시작하는 6~20글자 영문자/숫자")
                .removeClass("on"); // 클래스 on을 넣으면 글자색 녹색
            } ////////// if: 아이디 검사 불통과
            
            else{
                $(this).siblings(".msg")
                .text("사용 가능한 아이디입니다")
                .addClass("on");
            } /////// else: 아이디 검사 통과
        } ////////////// else if(아이디 검사)
        

       /* 
            3. 비밀번호일 경우 유효성 검사
            -검사 기준: 특수문자,문자,숫자포함 형태의 5~15자리
       */
        else if(cid === "mpw"){
            // console.log("검사결과",vReg(cv,cid))
            if(!vReg(cv,cid)){ // !(NOT) true면 false로, false면 true로
                $(this).siblings(".msg")
                .text("특수문자,문자,숫자포함 형태의 5~15자리");
            } ////////// if: 비밀번호 검사 불통과
            
            else{
                $(this).siblings(".msg")
                .empty();
            } /////// else: 비밀번호 검사 통과
        } ////////////// else if(비밀번호 검사)

       /* 
            4. 비밀번호 확인일 경우 유효성 검사
            -검사 기준: 입력된 비밀번호와 일치 여부
       */
        else if(cid === "mpw2"){
            if(cv!==$("#mpw").val()){ // 비밀번호확인값과 비밀번호값이 같지 않으면 
                $(this).siblings(".msg")
                .text("비밀번호가 일치하지 않습니다");
            } ////////// if: 비밀번호 확인 검사 불통과
            
            else{
                $(this).siblings(".msg")
                .empty();
            } /////// else: 비밀번호 확인 검사 통과
        } ////////////// else if(비밀번호 확인 검사)
        

       /////// 통과 시 메시지 지우기
       else {
        $(this).siblings(".msg").empty();
       } ///////// else(유효성 검사 통과)

    }); /////////// blur
}); ////////////////JQB


/*////////////////////////////////////////////////////////
    함수명: vReg (validation with Regular Expression)
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
*/ ////////////////////////////////////////////////////////
function vReg(val, cid) {
    // val - 검사할값, cid - 처리구분아이디
    // //console.log("검사:"+val+"/"+cid);

    // 정규식 변수
    let reg;

    // 검사할 아이디에 따라 정규식을 변경함
    switch (cid) {
        case "mid": // 아이디
            reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
            // 영문자로 시작하는 6~20글자 영문자/숫자
            // /^[a-z]{1} 첫글자는 영문자로 체크!
            // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
            // 최소 5글자에서 최대 19글자를 유효범위로 체크!
            // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
            break;
        case "mpw": // 비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
            // 특수문자,문자,숫자포함 형태의 5~15자리
            // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
            // (?=.*\d) 숫자 사용체크!
            // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
            // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
            break;
        case "eml": // 이메일
            reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            // 이메일 형식에 맞는지 검사하는 정규식
            break;
    } //////////// switch case문 //////////////////

    // //console.log("정규식:"+reg);

    // 정규식 검사를 위한 JS메서드 
    // -> 정규식.test(검사할값) : 결과 true/false
    return reg.test(val); //호출한 곳으로 검사결과리턴!

} //////////// vReg 함수 //////////////////////////////////
///////////////////////////////////////////////////////////


