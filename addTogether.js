function addTogether(arg1, arg2) {
  if (typeof arg1 !== "number") return;
  const sum = arg2 => (typeof arg2 === "number" ? arg1 + arg2 : undefined);
  return typeof arg2 === "undefined" ? arg2 => sum(arg2) : sum(arg2);
}

let res = addTogether(2, 3);
console.log(res);
