/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = getNode(".nav");
const li = getNodes("li");
const nickName = getNode(".nickName");
const img = getNode(".visual img");
const body = getNode("body");

// 배경색 변경

function setBgColor(colorA, colorB = "#000") {
  setCss(body, "background", `linear-gradient(to bottom, ${colorA},${colorB})`);
}

// 캐릭터별 이미지 변경

function setImage(src, alt) {
  attr(img, "src", `./assets/${src}.jpeg`);
  attr(img, "alt", `${alt}`);
}

// 상단 타이틀 이름 변경

function setNameText(name) {
  nickName.textContent = name;
  if (nickName.textContent === "EMBER") {
    setCss(nickName, "color", "yellow");
  } else if (nickName.textContent === "WADE") {
    setCss(nickName, "color", "blue");
  } else if (nickName.textContent === "CLOD") {
    setCss(nickName, "color", "green");
  } else if (nickName.textContent === "GALE") {
    setCss(nickName, "color", "purple");
  }
}

// is-active 추가

function addActive(removeTarget, addTarget, className) {
  removeTarget.forEach((i) => {
    removeClass(i, className);
  });
  addClass(addTarget, className);
}

// 클릭 이벤트

function handleClick(e) {
  const target = e.target.closest("li");
  if (!target) {
    return;
  }
  const index = target.dataset.index;
  const dataIndex = data[index - 1];

  addActive(li, target, "is-active");
  setNameText(dataIndex.name);
  setImage(dataIndex.name, dataIndex.alt);
  setBgColor(dataIndex.color[0], dataIndex.color[1]);
}

nav.addEventListener("click", handleClick);
