var deckRevealedIncreasing = function(deck) {
  let index = [];
  for (let i = 0; i < deck.length; i++) {
    index.push(i);
  }
  console.log(index);
  let ans = [];
  var sortedArr = deck.sort((a, b) => a - b);
  console.log(sortedArr);
  for (elm of sortedArr) {
    ans[index.shift()] = elm;
    if (index.length !== 0) {
      console.log(index);
      index.push(index.shift());
      console.log(index);
    }
  }
  console.log(ans);
};

console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]));
