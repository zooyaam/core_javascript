/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = confirm('영화 봤니?');

if (didWatchMovie === true) {
  let goingToWatchMovie = confirm('영화 볼거니?');
  if (goingToWatchMovie) {
    console.log('응 볼래!');
  } else {
    console.log('관심 없어.');
  }
} else {
  console.log('아니 안 봤어');
}

// 영화 볼거니?
let goingToWatchMovie;

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
