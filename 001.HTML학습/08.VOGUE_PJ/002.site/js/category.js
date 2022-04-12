// Vogue PJ 카테고리 JS

// get방식으로 넘어온 값 받기
let pm = location.href;
console.log("카테고리: ", pm);

// 에러방지를 위해 물음표 체크
if (pm.indexOf("?") === -1) {
    alert("비정상적인 접근입니다!");
    location.href = "index.html";
} /////// if

// ?와 = 로 자르고 값만 가져오기
pm = pm.split("?")[1].split("=")[1];

$(() => {

    // 0. 카테고리별 해당 정보를 객체로부터 셋팅한다
    const data = sinfo[pm]
    console.log("선택 객체정보: ", data);

    // 브라우저 탭메뉴 타이틀 넣기
    $("title").prepend(data["제목"]);
    // prepend(내용) -> 내용 앞에 추가
    // 비교) append(내용) -> 내용 뒤에 추가

    // 1. 카테고리명을 main.cont의 클래스로 추가
    // 대상: .cont
    $(".cont").addClass(pm);

    // 2. 타이틀 넣기
    // 대상: .stit
    $(".stit").text(data["제목"]);

    // 3. 서브메뉴가 있으면 메뉴 넣기
    // 대상: .lnb
    // 메뉴 값이 "없음"이 아니면 메뉴를 넣음
    let menu = data["메뉴"];


    if (menu !== "없음") { 

    let temp = "<ul>";
    // 메뉴 배열 개수만큼 돌기
    menu.forEach( val => {
        temp +=`<li><a href="#">${val}</a></li>`;
    }); //////// forEach

    temp += "</ul>";
    
    // 서브메뉴 요소에 html 넣기
    $(".lnb").html(temp);
    
} //////////// if
else{
    $(".lnb").remove();
} /////////// else

// 4. 콘텐츠 타이틀 넣기
// 대상: .cbx h2
let cbxtit = $(".cbx h2");
// each() 메서드를 사용하여 h2 요소의 순번에 맞게 내용을 넣어준다
cbxtit.each((idx,ele)=>{
    $(ele).html(data["타이틀"][idx]);
}); ////////// each
    

}); //////////// JQB


///// 각 서브별 데이터 셋팅하기 /////
let sinfo = {
    "fashion": {
        "제목": "Fashion",
        "메뉴": ["전체", "트렌드", "아이템", "피플", "화보"],
        "경로": "fashion",
        "타이틀": [
            "&lt;고양이를 부탁해&gt;의 20주년 기획전",
            "패션계에서 가장 주목받는 신인 디자이너, 자크무스",
            "서울국제여성영화제 장편 경쟁 한국 영화 4편",
            "드라마 &lt;알고 있지만&gt;의 나비가 유행이라고?",
            "홍콩 누아르 영화 주인공으로 변신한 민주",
            "MSG워너비여, 영원하라!"
        ]
    },
    "beauty": {
        "제목": "Beauty",
        "메뉴": ["전체", "트렌드", "아이템", "헬스", "피플"],
        "경로": "beauty",
        "타이틀": [
            "매실의 놀라운 효능",
            "맥시멀 뷰티의 신세계",
            "브라렛보다 니플 패치?",
            "지금 고쳐야 할 샤워 습관 6",
            "‘급찐살’ 저격! 셀럽들의 비건 식단",
            "팝한 여름 헤어 액세서리 활용법"
        ]
    },
    "living": {
        "제목": "Living",
        "메뉴": ["전체", "여행", "음식", "문화", "인테리어", "키즈", "테크"],
        "경로": "living",
        "타이틀": [
            "파리에 도버 스트리트 ‘리틀’ 마켓이 오픈했다",
            "전망 좋은 홈 오피스",
            "랜선 눈꽃 여행",
            "2021년 새 계절을 위한 새것 모음",
            "눈 호강 제대로, 뉴 호텔 5",
            "고요한 겨울, 호캉스"
        ]
    },
    "people": {
        "제목": "People",
        "메뉴": "없음",
        "경로": "people",
        "타이틀": [
            "아르마니의 시간, 아르마니의 약속",
            "슈퍼모델 나오미 캠벨의 그림 같은 빌라",
            "가구와 오브제를 창조하는 젊은 디자이너 6인",
            "지지와 벨라의 엄마, 욜란다가 말하는 ‘라임병’",
            "성별 고정관념을 깨는 파격 캐스팅",
            "멋쟁이 엄마를 소개합니다"
        ]
    },
    "video": {
        "제목": "Video",
        "메뉴": "없음",
        "경로": "video",
        "타이틀": [
            "발렌시아가의 50th 꾸뛰르 컬렉션 라이브 스트리밍",
            "뉴욕 패션 위크에 소개된 한국 디자이너 브랜드",
            "에디터 제니가 선택한 주얼리는?",
            "디올 FALL-WINTER 2021-2022 레디 투 웨어 컬렉션 라이브 스트리밍",
            "프라다 2021 F/W 시즌 여성복 컬렉션 라이브 스트리밍",
            "발렌시아가 SUMMER 21 (PRE-COLLECTION)"
        ]
    },
    "runway": {
        "제목": "Runway",
        "메뉴": "없음",
        "경로": "runway",
        "타이틀": [
            "<small>Ready To Wear 2021 F/W</small><br>Rick Owens",
            "<small>Ready To Wear 2021 F/W</small><br>We11done",
            "<small>Ready To Wear 2021 F/W</small><br>Comme des Garçons",
            "<small>Ready To Wear 2021 F/W</small><br>Chloé",
            "<small>Ready To Wear 2021 F/W</small><br>Balmain",
            "<small>Ready To Wear 2021 F/W</small><br>Loewe"
        ]
    },
    "shopping": {
        "제목": "Shopping",
        "메뉴": ["전체", "패션", "뷰티", "리빙"],
        "경로": "shopping",
        "타이틀": [
            "여름과 찰떡궁합! 세라믹 바구니",
            "사용할수록 매력적인 테크 제품",
            "취향 있는 플랜터",
            "감사의 마음을 담은, 부모님을 위한 선물",
            "성년을 위한 선물",
            "작고 소중한 아이들을 위한 선물"
        ]
    }
}; ////////// sinfo ////////////////