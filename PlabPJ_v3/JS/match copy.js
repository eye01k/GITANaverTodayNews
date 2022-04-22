$(() => {

  let txt;

  let db = new Vue({
    el: "#cont",
    data: {
      vals: {},
      vals2: {},
      days: txt
    },
    mounted: function () {
      axios
        .get("match_data1 copy.json")
        .then(res => this.vals = res),
      axios
        .get("rental_data1.json")
        .then(res => this.vals2 = res);
    }
  });

  $(".week li").click(function () {
    if(pm!=="Rental"){
      $(this).addClass("on").siblings().removeClass("on");

    txt = $(this).find("span").text();
    console.log(txt);

    db.$data.days = txt;
  } //// if
    
  }); //// click

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,

    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

  });


  // let pm = location.href;

  // pm = pm.split("?")[1].split("=")[1];
  // console.log(pm);

  // if (pm === "Rental") {
  //   $(".select").children().last().remove();
  //   $(".select").children().last().remove();
  //   $(".select").children().eq(1).find("a").text("예약 가능");
  //   $(".select").children().eq(2).find("a").text("프로모션");

  //   $(".cont").addClass(pm);
  // } ////// if

  let rentFn = function () {
    $(".match").find("li").removeClass("fl").html(`
        <div class="fl flsb">
              <h2>구장 이름</h2>
              <span class="sigbtn">구장정보</span>
            </div>
            <div class="fl">
              <p class="esp">구장</p>
              <p>크기</p>
            </div>
            <div>
              <ul class="fl">
                <li class="rental">
                  <p>시간1</p>
                </li>
              </ul>
            </div>
        `);
  }; ////// rentFn


  // Date() 객체를 이용해서 날짜 찍기
  // 변경대상: .week p
  let today = new Date();
  // console.log(today.getDate());

  // 변환될 날짜용 변수를 별도로 생성!
  let addDay = new Date();

  let week = ["일", "월", "화", "수", "목", "금", "토"]
  console.log(today.getDay());


  $(".week p").each((idx, ele) => {
    // console.log(idx);
    if (idx === 0)
      addDay.setDate(addDay.getDate())
    else
      addDay.setDate(addDay.getDate() + 1);
    // setDate(오늘날짜+날수) -> 변경된 날짜가됨!

    // addDay.setDate(today.getDate()+(idx+15)); 
    // console.log(addDay.getDate());
    // -> 날짜를 더해서 다음달과 경계날짜가 잘나오는지 살펴봄!

    // addDay에 날짜를 더해서 아래에서 getDate()로 날짜 추출!
    $(ele).text(addDay.getDate())
      // p태그 다음 형제인 span태그에 요일 넣기!
      // (더해진 날짜의 요일을 바로구해옴!)
      .next().text(week[addDay.getDay()]);

  });


  // let num = today.getDay();
  // $(".week span").each((idx,ele)=>{
  //     $(ele).text(week[num]);
  //     num++;
  //     if(num>6)num=0;
  // });

  // 지역 옵션 버튼 클릭 시 지역 메뉴 슬라이드업
  $(".selbx a").first().click(() => {
    console.log("나야나");
    $(".region").slideDown();

    $(".drkb").show();

  }); ///// 지역 click

  $(".selbx a").eq(3).click(() => {
    // console.log("나야나");
    $(".gender").slideDown();

    $(".drkb").show();

  }); ///// 성별 click

  $(".selbx a").eq(4).click(() => {
    // console.log("나야나");
    $(".level").slideDown();

    $(".drkb").show();

  }); ///// 레벨 click

  $(".drkb").click(function () {
    $(this).hide();

    $(".region").slideUp();
    $(".gender").slideUp();
    $(".level").slideUp();
  });

  // let mdata;

  // $(".week").find("li").eq(0).click(()=>{
  // mdata = "match_data1.json"
  // console.log("나야나");
  // });

  // $(".week").find("li").eq(1).click(()=>{
  //   mdata = "match_data2.json"
  // });


}); //////////// JQB