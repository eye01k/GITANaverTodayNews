window.addEventListener("DOMContentLoaded", ()=>{

    let tg = document.querySelectorAll(".gnb>ul>li>a")
    let sm = document.querySelectorAll("li.sm");
    
    tg[0].onclick = ()=>{
        sm[0].classList.add("open");
    }; //// click //////

    let appbx = document.querySelector(".apply");

    window.addEventListener("scroll", ()=>{
        let scVal = this.scrollY;
        console.log(scVal);

        if(scVal>=3406){
            appbx.style.position = "fixed";
            appbx.style.top = "80%";      
        } ////// if
        else {
            appbx.style.position = "absolute";
            appbx.style.top = "13%";
        }
    }); //////// scroll
}); //////////////// load /////////////////

