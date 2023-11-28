/* ------------------- */
/* Logical Operators   */
/* ------------------- */

// let age = 23;
// console.log(age >= 14 && age <= 90) ? true : false;

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// 논리합(또는) 연산자
let AorB;
console.log(AorB);

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy;

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy;

function login() {
  let userName = prompt('누구십니까?');

  if (!userName) return;

  // 취소 버튼과 ESC 누르면 null 이뜸.
  // 어떤 값도 입력하지 않았을 경우 => 빈문자 ''

  if (userName.toLowerCase() === 'admin') {
    let password = prompt('비밀번호는?');

    if (password.toLowerCase() === 'themaster') {
      console.log('로그인 성공 환영합니다!');
    } else {
      console.log('비밀번호를 잘못 입력하셨습니다.');
    }
  } else if (userName === null || userName.replace(/\s*/g, '') === '') {
    console.log('취소됐습니다.');
  } else {
    console.log('올바른 사용자가 아닙니다!');
  }
}

login();
