window.addEventListener("DOMContentLoaded", ()=>{

    // let tg = document.querySelectorAll(".gnb>ul>li>a")
    let sm = document.querySelectorAll("li.sm");
    
    for(let x of sm){
        x.querySelector("a").onclick = ()=>{
            x.classList.add("open");
        }; ///// onclick
    } //// for


    // Go! 클릭 함수

    // 이벤트대상: div.Go 
    let Go = document.querySelector(".Go");

    let top = document.querySelector(".top");

    let GoDown = document.querySelector(".Godown");

    let bgvideo = document.querySelector("#bgvideo");

    let matbx = document.querySelector(".matbx");

    Go.onclick = ()=>{

        // 변경대상: .top .Go .GoDown - display: none , #bgvideo - fliter: brightness(15%) , .matbx - classList.add("on")

        

    }; ////// onclick


    // 변경대상: #slide top값
    let slide = document.querySelector("#slide");
    
    // 이미지 변경 함수
    const chgImg = () => {
        
        // top값을 -100%로 이동
        slide.style.top = "-100%";
        slide.style.transition = ".6s ease-out";
        
        // #slide li 요소 변수 할당
        let sli = slide.querySelectorAll("li")

        // 맨 앞 이미지를 맨 뒤로 보내고 top값을 0으로 바꿈
        setTimeout(()=>{
            slide.appendChild(sli[0]);

            slide.style.top = 0;
            slide.style.transition = "none";
        },600); ///////// setTimeout
    }; //////////// chgImg

    setInterval(()=>chgImg(), 1200);

    
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

