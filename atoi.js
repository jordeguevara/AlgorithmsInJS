/* Final Version */
var myAtoi = function(str) {
  if (!str || (str.length === 1 && isNaN(str))) return 0;
  let max = Math.pow(2, 31) - 1,
    min = Math.pow(-2, 31);
  cleaned = str.trim();
  if (!cleaned) return 0;

  let isNegative = false;

  if (cleaned.charAt(0) === "+") {
    cleaned = cleaned.substring(1, cleaned.length);
  } else if (cleaned.charAt(0) === "-") {
    cleaned = cleaned.substring(1, cleaned.length);
    isNegative = true;
  } else if (isNaN(Number(cleaned.charAt(0)))) {
    return 0;
  }

  cleaned = cleaned.split(" ")[0];
  if (isNaN(parseInt(cleaned.charAt(0)))) return 0;
  let isFloat = cleaned.includes(".") ? true : false;
  if (isFloat) {
    cleaned = cleaned.split("")[0];
  }
  total = parseInt(cleaned); // not be in favor
  total = isNegative ? total * -1 : total;
  total = total >= max ? max : total <= min ? min : total;
  return total;
};

let result = myAtoi("42");
result;
