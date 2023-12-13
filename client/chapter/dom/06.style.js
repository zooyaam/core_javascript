/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용

console.log( first.className );  //getter
// console.log( first.className = 'fff' );  //setter



// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용


first.classList.add('hello');
first.classList.remove('hello');
console.log( first.classList.contains('first') );




// 내가 만든 함수
// function addClass(node, prop){
//   return getNode(node).classList.add(prop);
// }

// console.log(addClass(first, 'name'))



function addClass(node,className){
  
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  }

  node.classList.add(className);

}

function removeClass(node, className){

  if(typeof node === 'string') node = getNode(node);
  if(!className) {
    node.className = '';
    return;       // 왜 리턴이 있는지 다시 보기
  }
  
  if(typeof className !== 'string'){
    throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  }     // 에러가 왜 여기 위치하는지 다시 보기

  node.classList.remove(className);

}

function toggleClass(node, className){

  if(typeof node === 'string') node = getNode(node);
    if(typeof className !== 'string'){
      throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
    }

  return node.classList.toggle(className);  // 왜 토글에만 리턴이 있는지 다시 보기

}




/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.background = 'orange'
first.style.cssText = `
  display: flex;
  margin: 10px;
  border: 1px dotted red;
  `




/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log( getComputedStyle(first)['background-color'] );


function getCss(node,prop){    // getter

  if(typeof node === 'string') node = getNode(node);
  if(!(prop in document.body.style)){
    throw new SyntaxError('getCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.')
  }

  return getComputedStyle(node).getPropertyValue(prop)
}


function getCss(node,prop,value){    

  if(typeof node === 'string') node = getNode(node);
  if(!(prop in document.body.style)){
    throw new SyntaxError('setCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.')
  }
  if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값입니다.')

  node.style[prop] = value;
}


const css = (node, prop, value)=> !value ? getCss(node,prop) : speechSynthesis(node,prop,value);




