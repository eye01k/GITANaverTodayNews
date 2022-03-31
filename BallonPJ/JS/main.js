/* BallonPJ main JS */

function chgMv(mvid, start){
    // 변경대상: #screen iframe
    let tg = document.querySelector("#screen iframe");

    // 변경내용: iframe src 속성
    tg.src = `https://www.youtube.com/embed/${mvid}?autoplay=1&playsinline=1&start=${start}`
}

// function chgImg(){
//     // 대상: .plist a
//     let plist = document.querySelectorAll(".plist img");
//     plist.onclick = console.log(plist.length);
//     // 변경대상: #Pimg
//     let Pimg = document.querySelector("#Pimg");
//     // 변경내용: #Pimg에 img 요소 넣기

// }

window.addEventListener("load", ()=>{

    let plist = document.querySelectorAll(".plist img")
    // console.log(plist.length);
    let pimg = document.querySelector("#Pimg");

    // console.log(plist);

    let data;
    let setN = [25,33,46,77,88,99];

    for(let x of plist){
        // console.log(x.alt);
        x.onclick = ()=>{
            switch(x.alt){
                case "메시": data = 01; break;
                case "레반도프스키": data = 02; break;
                case "조르지뉴": data = 03; break;
                case "벤제마": data = 04; break;
                case "캉테": data = 05; break;
                case "호날두": data = 06; break;
            }
            console.log(data);
            pimg.innerHTML = `<img src="images/Big0${data}.png" alt="선수별 큰 이미지">`;

            let pbimg = document.querySelector("#Pimg img");
            console.log(pbimg.alt);
            // pbimg.style.width = setN[data.substr(1)]+"px";
            console.log(setN[data-1]+"px");
        }; // click 함수 //
    } // for문///
});/// 로드구역 ///
