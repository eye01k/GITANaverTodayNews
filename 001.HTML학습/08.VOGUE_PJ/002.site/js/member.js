// Vogue PJ 회원가입 페이지 JS

$(() => {

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
        .blur(function () {

            // 모든 공백 제거 함수
            const groSpace = cv => cv.replace(/\s/g, "");
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
            if (cid === "mnm") cv = cv.trim();
            // 나머지 입력은 모든 공백 제거: groSpace()
            else cv = groSpace(cv);

            // 공백이 제거된 입력값을 다시 입력창에 넣어주기
            $(this).val(cv);

            console.log("블러발생", cid, cv);

            /* 
                1. 빈 값 여부 체크
            */
            if (cv === "") {
                // 메시지 출력
                $(this).siblings(".msg").text("필수 입력!")
                    .removeClass("on");
                // 형제요소들 중 클래스가 msg인 요소 선택


                // 불통과
                pass = false;

            } ////////////////// 빈 값 체크 if

            /* 
                 2. 아이디일 경우 유효성 검사
                 -검사 기준: 영문자로 시작하는 6~20글자 영문자/숫자
            */
            else if (cid === "mid") {
                // console.log("검사결과",vReg(cv,cid))
                if (!vReg(cv, cid)) { // !(NOT) true면 false로, false면 true로
                    $(this).siblings(".msg")
                        .text("영문자로 시작하는 6~20글자 영문자/숫자")
                        .removeClass("on"); // 클래스 on을 넣으면 글자색 녹색

                    // 불통과
                    pass = false;

                } ////////// if: 아이디 검사 불통과
                else {
                    $(this).siblings(".msg")
                        .text("사용 가능한 아이디입니다")
                        .addClass("on");
                } /////// else: 아이디 검사 통과
            } ////////////// else if(아이디 검사)


            /* 
                 3. 비밀번호일 경우 유효성 검사
                 -검사 기준: 특수문자,문자,숫자포함 형태의 5~15자리
            */
            else if (cid === "mpw") {
                // console.log("검사결과",vReg(cv,cid))
                if (!vReg(cv, cid)) { // !(NOT) true면 false로, false면 true로
                    $(this).siblings(".msg")
                        .text("특수문자,문자,숫자포함 형태의 5~15자리");

                    // 불통과
                    pass = false;
                } ////////// if: 비밀번호 검사 불통과
                else {
                    $(this).siblings(".msg")
                        .empty();
                } /////// else: 비밀번호 검사 통과
            } ////////////// else if(비밀번호 검사)

            /* 
                 4. 비밀번호 확인일 경우 유효성 검사
                 -검사 기준: 입력된 비밀번호와 일치 여부
            */
            else if (cid === "mpw2") {
                if (cv !== $("#mpw").val()) { // 비밀번호확인값과 비밀번호값이 같지 않으면 
                    $(this).siblings(".msg")
                        .text("비밀번호가 일치하지 않습니다");

                    // 불통과
                    pass = false;

                } ////////// if: 비밀번호 확인 검사 불통과
                else {
                    $(this).siblings(".msg")
                        .empty();
                } /////// else: 비밀번호 확인 검사 통과
            } ////////////// else if(비밀번호 확인 검사)

            /* 
                 5. 이메일 입력 검사
                 -검사 기준: 이메일 형식 여부 검사
            */
            else if (cid === "email1") {

                // 이메일 주소 만들기
                let comp = email1.val() + "@" +
                    (seleml.val() === "free" ? email2.val() : seleml.val());
                // 선택박스 값이 직접입력일 경우(seleml.val()===free)
                // 이메일 뒷주소 입력값을 읽어가고
                // 아니면 선택박스 값을 넣는다
                console.log("이메일 주소: ", comp);

                // 이메일 결과 함수 호출
                resEml(comp);

            } ////////////// else if(이메일 검사)


            /////// 통과 시 메시지 지우기
            else {
                $(this).siblings(".msg").empty();
            } ///////// else(유효성 검사 통과)

        }); /////////// blur

    // 이메일 관련 대상
    // 이메일 앞주소
    let email1 = $("#email1");
    // 이메일 뒷주소(직접입력)
    let email2 = $("#email2");
    // 이메일 선택박스
    let seleml = $("#seleml");

    /* 
        선택박스 변경 시 이메일 검사
        검사시점: 선택박스 변경 시
        이벤트: change -> 제이쿼리 change() 메서드
        이벤트대상: #seleml -> seleml변수
    */
    seleml.change(function () {
        // 1. 선택박스 변경된 값 읽어오기
        let cv = $(this).val();
        console.log(cv);

        // 2. 선택 옵션별 분기
        if (cv === "init") {
            // 1. 메시지 출력
            email1.siblings(".msg")
                .text("이메일 옵션 선택 필수!")
                .removeClass("on");

            // 2. 직접입력창 숨기기
            email2.fadeOut();

        } ////////// if: 선택해주세요
        else if (cv === "free") {
            // 1. 직접입력창 보이기
            email2.fadeIn().val("").focus();
            // val(값) -> 입력창에 값 넣기
            // focus() -> 선택요소에 포커스(입력창에 커서 깜빡임)

            // 2. 유효성 메시지 지우기
            email1.siblings(".msg").empty();
        } //////////// else if: 직접입력
        else {

            // 1. 직접입력창 숨기기
            email2.fadeOut();

            // 2. 이메일 전체 주소 조합하기
            let comp = email1.val() + "@" + cv;
            // cv는 select 박스에서 선택된 것의 value

            // 3. 이메일 유효성 검사
            resEml(comp);

        } /////// else: 기타 이메일 주소 선택 시
    }); ///////////// change

    /* 
        키보드 입력 시 이메일 체크하기
        -키보드 관련 이벤트: keypress, keyup, keydown
        1.keypress: 키가 눌렸을때
        2.keyup: 키가 눌렸다가 올라올 때
        3.keydown: 키가 눌려져서 내려갈 때
        -> 과연 글자가 입력되는 순간은 어떤 키보드 이벤트를 써야할까?
        =====> keyup

        -이벤트 대상: #email1, #email2

        -> on(이벤트명,함수): 모든 이벤트를 함수와 연결하는 제이쿼리 메서드
    */
    $("#email1,#email2").on("keyup", function () {
        // 1. 현재 이벤트 대상 아이디 읽어오기
        let cid = $(this).attr("id");
        console.log("현재아이디", cid);

        // 2. 현재 입력된 값 읽어오기
        let cv = $(this).val();
        console.log("입력값", cv);

        // 3. 이메일 뒷주소 셋팅하기
        let backeml =
            cid === "email1" ? seleml.val() : email2.val();
        // 변수 = 조건연산자
        // -> 조건연산자에서 결정된 값이 변수에 할당

        // 4. 선택박스 값이 "free"(직접입력)이면 
        // 이메일 뒷주소로 변경
        if (seleml.val() === "free") backeml = email2.val();

        // 5. 이메일 전체 주소 조합
        let comp = email1.val() + "@" + backeml;
        console.log("이메일 주소: ", comp);

        // 6. 이메일 유효성 검사 함수 호출
        resEml(comp);
    }); /////////// keyup





    /* 
        이메일 결과 함수
        함수명: resEml
        기능: 이메일 검사결과 처리
    */

    const resEml = comp => { // comp - 완성된 이메일 주소
        // 이메일 정규식 검사
        // 통과 시
        if (vReg(comp, "eml")) {
            // 메시지 띄우기
            email1.siblings(".msg")
                .text("적합한 이메일 형식입니다")
                .addClass("on");
        } ///////// if: 이메일 통과 시
        else {
            // 메시지 띄우기
            email1.siblings(".msg")
                .text("맞지 않는 이메일 형식입니다")
                .removeClass("on");

            // 불통과
            pass = false;

        } //////// else: 이메일 불통과 시
    }; ////////// resEml 함수

    /* 
        가입하기(submit) 버튼 클릭 시 최종 검사

        전체 검사의 원리
        : 전역변수 pass를 설정하여 true를 할당하고 검사 중간에 불통과 사유 발생 시 false로 변경
        -> 유효성 검사 통과 여부를 판단

        검사방법
        : 기존 이벤트 함수 blur() 를 강제로 발생시킨다
        -> trigger(이벤트명)

    */

    // 검사용 변수
    let pass;

    // 이벤트 대상: 제출하기 버튼 #btnj
    // 원래 서브밋버튼은 클릭 시 싸고있는 form태그의 action 속성에 지정된 페이지로 이동하게 되어있다
    // 여기서는 유효성 검사로 이 기본기능을 막을 것이다

    $("#btnj").click(function (e) {

        // 1. 서브밋버튼 기본 이동 막기
        e.preventDefault();

        // 2. pass 통과 여부 변수에 true 할당 (처음 시작 시)
        pass = true;

        // 3. 입력창 blur 이벤트 강제 발생
        // 대상: blur 이벤트가 발생했던 input요소들
        $(`input[type=text][id!=email2][class!=search],
        input[type=password]`).trigger("blur");

        // 통과여부
        console.log("통과여부: ", pass);

        // 4. 검사결과에 따라 메시지 보이기 및 처리
        if(pass){ //// 통과 시

            // 메시지 띄우기
            alert("회원가입을 축하드립니다!");
            // 원래는 post방식으로 DB에 회원정보를 입력 후 
            // DB에 입력완료 시 위의 메시지를 띄워준다

            // 로그인 페이지로 이동
            location.replace("login.html");
            // location.href = "login.html";
            /* 
                회원가입 후 이전 페이지로 돌아가지 못하도록
                location.replace(주소)를 사용하여 페이지 캐쉬를 삭제
                -> 좀더 안전한 보안을 유지한다
            */


        } /////// if: 통과 시
        else {

            // 메시지 띄우기
            alert("입력을 수정하세요");

        } /////// else: 불통과 시
    }); ///////// click

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