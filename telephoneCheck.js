function telephoneCheck(str) {
  let removeSymbols = /\s+/g;
  let cleanString = str.replace(removeSymbols, "");
  let pattern = /^1?\(?\d{3}\)?-?\d{3}-?\d{4}/;
  let res = pattern.test(cleanString);

  if (cleanString.length >= 11 && cleanString.charAt(0) !== "1") {
    return false;
  }
  return res;
}
let lt = telephoneCheck("555-555-5555");
console.log(lt);
