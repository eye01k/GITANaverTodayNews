window.addEventListener("DOMContentLoaded", ()=>{

    let tg = document.querySelectorAll(".gnb>ul>li>a")
    let sm = document.querySelectorAll("li.sm");
    
    tg[0].onclick = ()=>{
        sm[0].classList.add("open");
    }; //// click //////
}); //////////////// load /////////////////


