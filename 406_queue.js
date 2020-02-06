const reconstructQueue = people => {
  const compare = ([h1, k1], [h2, k2]) => {
    if (h1 !== h2) return h2 - h1;
    else if (k1 !== k2) return k1 - k2;
  };
  let result = [];
  people.sort(compare);
  for (const person of people) {
    result.splice(person[1], 0, person);
  }
  return result;
};

let res = reconstructQueue([
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2]
]);
res;
