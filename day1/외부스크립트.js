let age = prompt("사용자의 나이를 입력해주세요","0");
// promt : 브라우저 열면 입력창 띄우기
//"사용자의 나이를 입력해주세요" : 사용자에게 보여질 질문
// "0" : input placeholder 느낌!

if(age >= 20){
    // 만약 사용자에게 입력받은 값이 20과 같거나 20보다 크다면
    document.write("당신은 성인입니다.");
} else {
    document.write("당신은 미성년자 입니다.");
}