// Vogue PJ 갤러리 페이지 JS

$(() => {

    // console.log("로딩완료");

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // 한 화면당 슬라이드 개수
        spaceBetween: 30, // 슬라이드 사이 간격(px)


        // 사이즈별 슬라이드 개수, 간격 동적 변경 셋팅
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 200px
            200: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is >= 500px
            500: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 1000px
            1000: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        },

        // slidesPerGroup: 3, // 슬라이드 묶음 개수(넘기는 단위)
        loop: true, // 무한루프(기본값은 false)
        loopFillGroupWithBlank: true, // 남는 자리 빈 슬라이드로 채우기
        pagination: { // 하단 블릿 설정
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: { // 양쪽 이동 버튼
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: { // 자동넘김
            delay: 2000, // 시간간격
            disableOnInteraction: false, // 상호작용 시 비활성화
        },
    });
}); ///////////////////////JQB