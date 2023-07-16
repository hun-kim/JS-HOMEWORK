const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

const email = document.querySelector(".user-email-input");
const pw = document.querySelector(".user-password-input");
const button = document.querySelector(".btn-login");

//1. email 정규표현식을 사용한 validation

email.addEventListener("input", function () {
  if (emailReg(email.value)) {
    email.classList.remove("is-invalid");
  } else if (email.value.length === 0) {
    email.classList.remove("is--valid");
  } else {
    email.classList.add("is-invalid");
  }
});

//2. pw 정규표현식을 사용한 validation

pw.addEventListener("input", function () {
  if (pwReg(pw.value)) {
    pw.classList.remove("is-invalid");
  } else if (pw.value.length === 0) {
    pw.classList.remove("is--valid");
  } else {
    pw.classList.add("is-invalid");
  }
});

// 로그인 버튼 각기 다른 에러 경우의 수에 따른 메세지 알림
function loginBtnClick(e) {
  if (email.value === user.id && pw.value === user.pw) {
    //submit 태그 고유의 동작 중단
    e.preventDefault();
    //웰컴 페이지 이동
    window.location.href = "welcome.html";
  } else if (email.value !== user.id && pw.value === user.pw) {
    e.preventDefault();
    alert("이메일을 잘못 입력하셨습니다.");
  } else if (pw.value !== user.pw && email.value == user.id) {
    e.preventDefault();
    alert("비밀번호를 잘못 입력하셨습니다.");
  } else if (email.value !== user.id && pw.value !== user.pw) {
    e.preventDefault();
    alert("이메일이나 비밀번호를 다시 확인해주세요.");
  }
}

button.addEventListener("click", loginBtnClick);

//이메일 패스워드 필요한 문자열

function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
