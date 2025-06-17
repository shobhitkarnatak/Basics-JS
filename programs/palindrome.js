// const isPalindrome = (string) => {
//   const str = string.toString();
//   return str === str.split("").reverse().join("");
// };

const isPalindrome = (string) => {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
    if (reversedString == string) {
      return true;
    }
  }
  return false;
};

console.log(isPalindrome("naman"));
