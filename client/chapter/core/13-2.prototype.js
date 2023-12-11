/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// 생성자 === 컴포넌트
class Animal {
  constructor(options) {
    for (let [key, value] of Object.entries(options)) {
      this[key] = value;
    }
    // this.name = name;
    // this.stomach = [];
    // this.legs = 4;
    // this.tail = true
  }

  get eat() {
    return this.stomach;
  }

  set eat(value) {
    this.prey = value;
    this.stomach.push(value);
  }
}

const animal = new Animal({ name: '포동이', age: 15 });
