
/* -------------------------------------------------------------------------- */
/*                                  class 함수                                 */
/* -------------------------------------------------------------------------- */

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






/* -------------------------------------------------------------------------- */
/*                                  style 함수                                 */
/* -------------------------------------------------------------------------- */

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
