import { diceAnimation, getNode, getNodes, insertLast } from './lib/index.js';

const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);

const recordListWrapper = getNode('.recordListWrapper');

// [phase-1]
// 1. 주사위 굴리기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation() 실행될 수 있도록

// toggle
// 1. 주사위 눈 값 가져오기
// 2. 태그 만들기
// 3. 뿌려주기

let count = 0;
let total = 0;

function createItem(value) {
  const template = `
  <tr>
    <td>${++count}</td>
    <td>${value}</td>
    <td>${(total += value * 1)}</td>
  </tr>
`;
  return template;
}

function renderRecordItem() {
  const diceValue = getNode('#cube').dataset.dice;

  console.log(diceValue);

  insertLast('.recordList tbody', createItem(diceValue));
}

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      // 실행
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      // 정지
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  };
})();

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();
}

function handleReset() {
  recordListWrapper.hidden = true;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
