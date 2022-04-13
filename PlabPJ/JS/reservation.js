$(()=>{
    // Date() 객체를 이용해서 날짜 찍기
    // 변경대상: .week p
    let today = new Date();
    // console.log(today.getDate());

    // 변환될 날짜용 변수를 별도로 생성!
    let addDay = new Date();

    let week =["일", "월", "화", "수", "목", "금", "토"]
    console.log(today.getDay());


    $(".week p").each((idx,ele)=>{
        // console.log(idx);
        addDay.setDate(today.getDate()+idx);
        
        // addDay.setDate(today.getDate()+idx+15); 
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
}); //////////// JQB