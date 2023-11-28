/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

// let thisTime = prompt('시간을 입력해주세요.');
// switch (thisTime) {
//   case 'MORNING':
//     console.log('뉴스 기사 글을 읽는다.');
//     break;
//   case 'LUNCH':
//     console.log('자주 가는 식당에 가서 식사를 한다.');
//     break;
//   case 'DINNER':
//     console.log('동네 한바퀴를 조깅한다.');
//     break;
//   case 'NIGHT':
//     console.log('친구에게 전화를 걸어 수다를 떤다.');
//     break;
//   case 'LATE_NIGHT':
//   case 'DAWN':
//     console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
//     break;
// }

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */
// let thisTime = prompt('시간을 입력해주세요.');
// if (thisTime === 'MORNING') {
//   console.log('뉴스 기사 글을 읽는다.');
// } else if (thisTime === 'LUNCH') {
//   console.log('자주 가는 식당에 가서 식사를 한다.');
// } else if (thisTime === 'DINNER') {
//   console.log('동네 한바퀴를 조깅한다.');
// } else if (thisTime === 'NIGHT') {
//   console.log('친구에게 전화를 걸어 수다를 떤다.');
// } else {
//   console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
// }

/* switch vs. if -------------------------------------------------------- */

// prompt를 통해서 숫자를 입력 받는다. (단, 0~6까지)
// switch case 문을 사용해서
// 0: 일요일 , ... ,6: 토요일

// function getDay() {
//   const num = +prompt('0~6사이의 숫자를 입력하세요.');

//   switch (num) {
//     case 0:
//       console.log('일');
//       break;
//     case 1:
//       console.log('월');
//       break;
//     case 2:
//       console.log('화');
//       break;
//     case 3:
//       console.log('수');
//       break;
//     case 4:
//       console.log('목');
//       break;
//     case 5:
//       console.log('금');
//       break;
//     case 6:
//       console.log('토');
//       break;
//   }
// }

// const today = getDay();

function getDay(num) {
  const value = Math.floor(Math.random() * 7);

  switch (value) {
    case 0:
      console.log('월');
      break;
    case 1:
      console.log('화');
      break;
    case 2:
      console.log('수');
      break;
    case 3:
      console.log('목');
      break;
    case 4:
      console.log('금');
      break;
    case 5:
      console.log('토');
      break;
    case 6:
      console.log('일');
      break;
  }
}

// 요일 뽑아내기 => weekend 월~금: 평일.  토~일: 주말

function weekend() {
  const today = getDay(getRandom(7));

  console.log(today);

  if (today.includes('토')) {
    return '토요일';
  } else if (today.includes('일')) {
    return '일요일';
  } else {
    return '평일';
  }
}

const todayIs = weekend();
