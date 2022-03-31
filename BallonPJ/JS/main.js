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
    // let setN = [25,33,46,77,88,99];
    const pinfo = {
        "메시" : {
            "이름" : "리오넬 메시",
            "생년월일" : "1987.06.24",
            "국적" : "아르헨티나",
            "소속" : "파리생제르망",
            "포지션" : "CF,RW"
        },
        "레반도프스키" : {
            "이름" : "로베르트 레반도프스키",
            "생년월일" : "1988.08.21",
            "국적" : "폴란드",
            "소속" : "바이에른뮌헨",
            "포지션" : "ST"
        },
        "조르지뉴" : {
            "이름" : "조르지뉴",
            "생년월일" : "1991.12.20",
            "국적" : "이탈리아",
            "소속" : "첼시",
            "포지션" : "CM"
        },
        "벤제마" : {
            "이름" : "카림 벤제마",
            "생년월일" : "1987.12.19",
            "국적" : "프랑스",
            "소속" : "레알마드리드",
            "포지션" : "ST"
        },
        "캉테" : {
            "이름" : "은골로 캉테",
            "생년월일" : "1991.03.29",
            "국적" : "프랑스",
            "소속" : "첼시",
            "포지션" : "CDM"
        },
        "호날두" : {
            "이름" : "크리스티아누 호날두",
            "생년월일" : "1985.02.05",
            "국적" : "포르투갈",
            "소속" : "맨체스터유나이티드",
            "포지션" : "ST,LW"
        }
    }; /////// pinfo 객체 /////////////
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
            // console.log(data);
            pimg.innerHTML = `<img src="images/Big0${data}.png" alt="선수별 큰 이미지">`;

            let pdata = pinfo[x.alt];
            // console.log(pdata);
            for(let z in pdata){
                console.log(z);
                switch(z){
                    case "이름" : document.querySelector(".pcont .name").innerText = `${data[z]}`; break;
                    case "생년월일" : document.querySelector(".pcont .bir").innerText = `${data[z]}`; break;
                    case "국적" : document.querySelector(".pcont .nat").innerText = `${data[z]}`; break;
                    case "소속" : document.querySelector(".pcont .club").innerText = `${data[z]}`; break;
                    case "포지션" : document.querySelector(".pcont .pos").innerText = `${data[z]}`; break;
                } /////////////  switch case
            }

            let pbimg = document.querySelector("#Pimg img");
            pbimg.innerHTML = `<span></span>`;
            // console.log(pbimg.alt);
            // pbimg.style.width = setN[data.substr(1)]+"px";
            // console.log(setN[data-1]+"px");

            // pimg.style.backgroundColor = "rgba(0, 0, 0, 0.803)";
        }; // click 함수 //
    } // for문///
    
});/// 로드구역 ///
