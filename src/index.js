module.exports = function check(str, bracketsConfig) {
   const open = ['(', '{', '['];
  const close = [')', '}', ']'];
  const stack = [];

  for(let i=0; i < str.length; i++) {
    if(open.includes(str[i])) {
    stack.push(str[i]);
    } else {
      if(close.indexOf(str[i]) === open.indexOf(stack[stack.length - 1] )){
        stack.pop();
      }  else {
        return false;
      } 
    }
  }   
  return stack.length === 0;
}
