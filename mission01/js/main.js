const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

const id = document.getElementById("userEmail");
const password = document.getElementById("userPassword");
const login = document.getElementsByClassName("btn-login");

// 0. email & pw input값 체크

// function inputValueChange() {
//   var userEmail = document.getElementById("userEmail").value;
//   var userPassword = document.getElementById("userPassword").value;
//   console.log(userEmail); // 이 다음 입력한 값이 user id/pw와 같은지 체크하면?
// }

function loginButtonClick() {
  var userEmail = document.getElementById("userEmail").value;
  var userPassword = document.getElementById("userPassword").value;
  if (user.id == userEmail && user.pw == userPassword) {
    window.location.href = "/mission01/welcome.html";
  } else {
    alert("로그인 실패");
  }
}

// login.addEventListener("click", loginButtonClick);

// document.login_form.submit();

//1. email 정규표현식을 사용한 validation

// function loginEmailCheck() {
//   var userEmail = document.getElementById("userEmail").value;

//   if (user.id !== userEmail) {
//     alert("이메일을 잘못 입력했습니다.");
//   }
//   if (user.id === userEmail) {
//     alert("성공!");
//   }

//   //입력값 전송
//   document.login_form.submit();
// }

//2. pw 정규표현식을 사용한 validation

//3. 상태 변수 관리

//4. 로그인 버튼을 클릭시 조건처리

function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// loginButton.addEventListener("click",(event))=>{
//   event.preventDefault();
//   const userEmail = loginForm.userEmail.value;
//   const userPassword = loginForm.userPassword.value;

//   if (userEmail === "user.id" && password === "user.pw"){
//     alert("성공적으로 로그인했습니다.");
//     locaction.reload();
//   }
//   else {
//     loginErrorMsg.style.opacity = 1;
//   }
// }

// function btnCheck() {
//   const email = document.getElementById("userEmail");
//   const pw = document.getElementById("userPassword");

//   if (user.id === email && user.pw === pw) {
//     window.location.href = "/mission01/welcome.html";
//   }
// }

// input 태그에 쓰는 내용 콘솔에 띄우는건 괜찮은데 그다음은?
// 1.로그인 버튼 누르면 체크 함수 실행
// 2.함수 실행
// 2-1. 이메일 유효성 체크 - 미달 시 is—valid 클래스 추가
// 2-2. 비밀번호 유효성 체크 - 디말 시 is-valid 클래스 추카
// 유효성 통과 시
// 3-1. 아이디 맞는 지 확인. 불통과
// 3-2. 비밀번호 맞는 지 확인 - 다를 시 불통과
// 4.둘 다 맞을 시 페이지 이동
