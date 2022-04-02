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
    let setN = [22,26,28,32,30,21];
    let pinfo = {
        "메시" : {
            "name" : "LIONEL MESSI",
            "age" : "34",
            "nationality" : "ARG",
            "club" : "Paris-SG",
            "position" : "Foward"
        },
        "레반도프스키" : {
            "name" : "ROBERT LEWANDOWSKI",
            "age" : "33",
            "nationality" : "POL",
            "club" : "Bayern Munich",
            "position" : "Foward"
        },
        "조르지뉴" : {
            "name" : "JORJINHO",
            "age" : "29",
            "nationality" : "ITA",
            "club" : "Chelsea",
            "position" : "Midfielder"
        },
        "벤제마" : {
            "name" : "KARIM BENZEMA",
            "age" : "33",
            "nationality" : "FRA",
            "club" : "Real Madrid",
            "position" : "Foward"
        },
        "캉테" : {
            "name" : "N'golo Kante",
            "age" : "30",
            "nationality" : "FRA",
            "club" : "Chelsea",
            "position" : "Midfielder"
        },
        "호날두" : {
            "name" : "CHRISTIANO RONALDO",
            "age" : "36",
            "nationality" : "POR",
            "club" : "Manchester United",
            "position" : "Forward"
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
            // console.log("data: ", data);
            pimg.innerHTML = `<img src="images/Big0${data}.png" alt="선수별 큰 이미지">`;

            let pdata = pinfo[x.alt];
            // console.log(pdata);
            for(let z in pdata){
                // console.log(z);
                switch(z){
                    case "name" : document.querySelector(".name").innerText = `${pdata[z]}`; break;
                    case "age" : document.querySelector(".pcont .bir").innerText = `${pdata[z]}`; break;
                    case "nationality" : document.querySelector(".pcont .nat").innerText = `${pdata[z]}`; break;
                    case "club" : document.querySelector(".pcont .club").innerText = `${pdata[z]}`; break;
                    case "position" : document.querySelector(".pcont .pos").innerText = `${pdata[z]}`; break;
                } /////////////  switch case
            }

            let pbimg = document.querySelector("#Pimg img");
            pbimg.innerHTML = `<span></span>`;
            // console.log(pbimg.alt);
            // pimg.style.width = setN[data.substr(1)]+"%";
            pimg.style.width = setN[data-1]+"%";
            console.log(setN[data-1]+"%");

            // pimg.style.backgroundColor = "rgba(0, 0, 0, 0.803)";
        }; // click 함수 //
    } // for문///
    
});/// 로드구역 ///
