window.addEventListener("DOMContentLoaded", ()=>{

    // let tg = document.querySelectorAll(".gnb>ul>li>a")
    let sm = document.querySelectorAll("li.sm");
    
    for(let x of sm){
        x.querySelector("a").onclick = ()=>{
            x.classList.add("open");
        };
    }


    
    window.addEventListener("scroll", ()=>{
        let scVal = this.scrollY;
        console.log(scVal);
        
        if(scVal + appbx.offsetTop >=bxPos){
            appbx.style.position = "fixed";
            appbx.style.top = "80%";      
        } ////// if
        else {
            appbx.style.position = "absolute";
            appbx.style.top = "13%";
        }
    }); //////// scroll
    
    // let txtbx = document.querySelector(".txtbx");
    // console.log(txtbx.offsetHeight);
    let appbx = document.querySelector(".apply");
    console.log(appbx.offsetTop);
    let bxPos = appbx.getBoundingClientRect().top
    ;
    console.log("지원박스 포지션: ", bxPos);
}); //////////////// load /////////////////

