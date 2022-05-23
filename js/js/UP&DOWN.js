var counter = 0;
var randomNumber = Math.floor(Math.random() * 100) + 1;
 // 컴퓨터 무작위 수 생성 1 ~ 100 

document.getElementById("try").onkeypress=function(e){
     if(e.keyCode == 13 || e.which==13){
         finding();
         return false;
     }
 }

// 키보드 클릭해서 함수 실행
document.getElementById("try").onkeydown = (event) => {
    if(event.code == 'Enter'){
        event.preventDefault();
        finding();
    }
}
// enter 키인지 체크
//if()
// 함수 실행
//keypress일 때 브라우저가 할 기본 동작 : 취소

function finding() {
  var userNumber = document.getElementById("try").value;     // 사용자가 입력한 숫자 가져오기

  // 입력된 숫자가 1 에서 100 일 때
if (userNumber >= 1 && userNumber <= 100) {
    // 컴퓨터 숫자가 사용자 입력 숫자보다 크다면
    if (randomNumber > userNumber) {
      document.getElementById("display").innerText = "UP!"; // #display 영역에 UP! 표시
    }
   // 컴퓨터 숫자가 사용자 입력 숫자보다 작다면
    else if (randomNumber < userNumber){
        document.getElementById("display").innerText = "DOWN!";
    // #display 영역에 UP! 표시
    }
    else {
        document.getElementById("display").innerHTML = "<span style='color:red'>정답!</span>";
    // #display 영역에 '정답!' 표시 - 글자색 지정 태그 사용 innerTEXT쓰면 span적용이 안된다<span style='color:red'>정답!</span>으로 나옴
    }
    document.getElementById("try").value="";
    counter++;
    // counter 증가
    document.getElementById("counter").innerText = "시도횟수 : " + counter + "회";
    // #counter 영역에 시도 횟수 출력
}
else {
    alert("1부터 100사이의 숫자 입력하세요.");
  // 1~100 까지 숫자 입력 알림 
}
}