$(()=>{
    // Date() 객체를 이용해서 날짜 찍기
    // 변경대상: .week p
    let today = new Date();
    // console.log(today.getDate());

    $(".week p").each((idx,ele)=>{
        // console.log(idx);
        $(ele).text(today.getDate()+idx);
    });

    let week =["일", "월", "화", "수", "목", "금", "토"]
    console.log(today.getDay());
    
    let num = today.getDay();
    $(".week span").each((idx,ele)=>{
        $(ele).text(week[num]);
        num++;
        if(num>6)num=0;
    });
}); //////////// JQB