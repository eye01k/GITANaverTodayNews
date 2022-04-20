// Vogue PJ 카테고리 JS

// get방식으로 넘어온 값 받기
let pm = location.href;
console.log("카테고리: ", pm);

// 에러방지를 위해 물음표 체크
if (pm.indexOf("?") === -1) {
    alert("비정상적인 접근입니다!");
    location.href = "index.html";
} /////// if

// ?와 = 로 자르고 값만 가져오기
pm = pm.split("?")[1].split("=")[1];

//////////// 로딩구역 /////////////////////
window.addEventListener("DOMContentLoaded", () => {

    console.log("로딩완료");

    new Vue({
        el: "#app",
        data: {
            vals: {}
            // json 데이터가 객체임
        }, ////// data
        mounted: function () {
            axios.get("real.json")
                .then(x => this.vals = x);
        } ///// mounted
    }); ///////// Vue

}); ///////////// 로딩구역 ////////////////////////
//////////////////////////////////////////////////


