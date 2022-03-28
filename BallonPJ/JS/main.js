/* BallonPJ main JS */

function chgMv(mvid, start){
    // 변경대상: #screen iframe
    let tg = document.querySelector("#screen iframe");

    // 변경내용: iframe src 속성
    tg.src = `https://www.youtube.com/embed/${mvid}?autoplay=1&playsinline=1&start=${start}`
}

function chgImg(){

}

