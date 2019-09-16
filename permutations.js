console.log(permuation("abc"));
function permuation(str) {
  let res = [];
  permuations("", str, res);
  return res;
}

function permuations(prefix, suffix, arr) {
  //base case no suffix all in prefix
  if (suffix.length === 0) {
    arr.push(prefix);
  } else {
    for (let i = 0; i < suffix.length; i++) {
      console.log(suffix.slice(0, i) + suffix.slice(i + 1, suffix.length))
      permuations(
        prefix + suffix.charAt(i),
        suffix.slice(0, i) + suffix.slice(i + 1, suffix.length),
        arr
      );
    }
  }
}
