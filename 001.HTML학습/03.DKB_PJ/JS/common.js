// 도깨비PJ 공통 JS - common

    // JS 주석 1
    /* JS 주석 2 */
    // JS 코드 저장공간 -> 함수(호출 시에만 실행)
    // 함수는 키워드 function을 사용함
    // 함수형식: function 함수명(){코드}
    function 바꿔(){
        // 1. 함수 호출 확인용 경고창 띄우기
        // alert("나야나");
        // 2. 변경대상 선정: .top
        //변수에 대상을 담자
        //변수는 데이터가 사는 곳
        //여기를 봐 var
        //JS에서 점(.)은 하위요소로 내려감
        //JS는 명령문 끝에 세미콜론(;)을 쓴다
        //JS에서 =은 오른쪽 데이터가 왼쪽에 들어가는 것을 의미(할당)
        var 대상 = document.getElementsByClassName('top').item(0);
        // 문서 탐색하기
        // (1) html 문서 전체: document
        // (2) 문서 내용 중 id요소 가져오기: getElementById(아이디명)
        // (3) 문서 내용 중 class요소 가져오기: getElementsByClassname(클래스명)
        // 주의! 클래스는 여러 개 사용하는 것이므로 무조건 순번으로 선택한다. 첫 번째는 0번
        //---->getElementByClassname(클래스명).item(0)
        // 3. 대상에게 클래스 넣기
        대상.classList.toggle('on');
        /******************************* 
        [ 요소에 클래스를 넣고 빼는 객체 ]
        classList 객체
        (1) add 메소드: add(클래스명) - 클래스 넣기
        (2) remove 메소드: remove(클래스명) - 클래스 빼기
        (3) toggle 메소드: toggle(클래스명) - 클래스 없으면 넣고 있으면 빼고
        ->toggle은 하나가 2개 이상의 기능을 할 때 부르는 단어
  
  
        -객체는 미리 만들어진 프로그램 단위체
        -method는 객체 안에 만들어진 함수
        -함수는 명령어 집합
        *******************************/
  
      } // 바꿔 함수
    