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
    let pinfo = {
        "메시" : {
            "name" : "리오넬 메시",
            "age" : "1987.06.24",
            "nationality" : "아르헨티나",
            "club" : "파리생제르망",
            "position" : "CF,RW"
        },
        "레반도프스키" : {
            "name" : "로베르트 레반도프스키",
            "age" : "1988.08.21",
            "nationality" : "폴란드",
            "club" : "바이에른뮌헨",
            "position" : "ST"
        },
        "조르지뉴" : {
            "name" : "조르지뉴",
            "age" : "1991.12.20",
            "nationality" : "이탈리아",
            "club" : "첼시",
            "position" : "CM"
        },
        "벤제마" : {
            "name" : "카림 벤제마",
            "age" : "1987.12.19",
            "nationality" : "프랑스",
            "club" : "레알마드리드",
            "position" : "ST"
        },
        "캉테" : {
            "name" : "은골로 캉테",
            "age" : "1991.03.29",
            "nationality" : "프랑스",
            "club" : "첼시",
            "position" : "CDM"
        },
        "호날두" : {
            "name" : "크리스티아누 호날두",
            "age" : "1985.02.05",
            "nationality" : "포르투갈",
            "club" : "맨체스터유나이티드",
            "position" : "ST,LW"
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
                    case "name" : document.querySelector(".pcont .name").innerText = `${pdata[z]}`; break;
                    case "age" : document.querySelector(".pcont .bir").innerText = `${z}: ${pdata[z]}`; break;
                    case "nationality" : document.querySelector(".pcont .nat").innerText = `${z} : ${pdata[z]}`; break;
                    case "club" : document.querySelector(".pcont .club").innerText = `${z} : ${pdata[z]}`; break;
                    case "position" : document.querySelector(".pcont .pos").innerText = `${z} : ${pdata[z]}`; break;
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
