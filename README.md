# JS-HOMEWORK

#Mission 01 - 네이버 로그인 페이지

## 알맞은 아이디와 비밀번호 입력시 welcom페이지로 이동하게 구현하기

- 기본적으로 제공된 user 아이디와 비밀번호를 사용자가 제대로 입력하면 welcom페이지로 이동하게 구현해야 하는 과제입니다.
- 먼저, html에서 사용자가 입력하는 email,pw을 querySelector로 가져오게 구성하였습니다.
- 그 후 email 유효 조건, pw 유효 조건을 검증하는 함수를 addEventListener를 통해 만들었습니다.
- 이후 로그인 버튼을 누를 경우 이메일을 잘못 입력한 경우, 비밀번호를 잘못 입력한 경우, 둘 다 잘못 입력한 경우, 성공한 경우의 각각 조건을 나누는 함수 loginBtnClick을 만들었습니다.
- 성공하는 경우 welcom html로 이동하게 하였습니다.
- 이번 과제를 통해 html 요소를 가져오기 위한 querySelector문, 이벤트 함수, if 조건문 등을 실제로 써보며, 어떨때 작동하는지 배울 수 있었습니다.

#Mission 02 - 엘리멘탈 포스터 만들기

## 썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직 작성

- 이벤트 처리 방식을 사용하여 클릭 이벤트 생성
- 이미지와 색상 데이터는 data.js에서 호출
- 각 li 항목들을 클릭시 배경 색상과 메인 비주얼 이미지 변경
- 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경
- setBgColor 함수, setImage 함수, setNameText 함수 분리

### 결과물

 <img width="80%" src="/mission02/poster/result.gif"/>
