window.addEventListener("DOMContentLoaded", ()=>{

    // let tg = document.querySelectorAll(".gnb>ul>li>a")
    let sm = document.querySelectorAll("li.sm");
    
    for(let x of sm){
        x.querySelector("a").onclick = ()=>{
            x.classList.add("open");
        };
    }

    // 변경대상: #slide top값
    let slide = document.querySelector("#slide");

    // #slide li 요소 변수 할당
    let sli = document.querySelectorAll("#slide li");

    // 이미지 변경 함수
    const chgImg = () => {

        // 1. top값을 -100%로 이동
        slide.style.top = "100%";
        slide.style.transition = ".6s ease-out";

        // 맨 앞 이미지를 맨 뒤로 보내고 top값을 0으로 바꿈
        setTimeout(()=>{
            slide.appendChild()
        },600); ///////// setTimeout
    }; //////////// chgImg

    
    // window.addEventListener("scroll", ()=>{
    //     let scVal = this.scrollY;
    //     console.log(scVal);
        
    //     if(scVal + appbx.offsetTop >=bxPos){
    //         appbx.style.position = "fixed";
    //         appbx.style.top = "80%";      
    //     } ////// if
    //     else {
    //         appbx.style.position = "absolute";
    //         appbx.style.top = "13%";
    //     }
    // }); //////// scroll
    
    // let txtbx = document.querySelector(".txtbx");
    // console.log(txtbx.offsetHeight);
    // let appbx = document.querySelector(".apply");
    // console.log(appbx.offsetTop);
    // let bxPos = appbx.getBoundingClientRect().top
    // ;
    // console.log("지원박스 포지션: ", bxPos);
}); //////////////// load /////////////////

