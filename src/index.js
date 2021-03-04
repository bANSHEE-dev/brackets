module.exports = function check(str, bracketsConfig) {
  let bconf = bracketsConfig.reduce(
    (acc, val) => {
      acc[val[0]] = val[1];
      acc[val[1]] = null;
      return acc;
    },
    {}
  );
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (bconf[char] === null) {
      if (stack.pop() !== char) {
        return false;
      }
    } else if (bconf[char] !== undefined) {
      stack.push(bconf[char]);
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}
