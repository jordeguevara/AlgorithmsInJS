function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  return collection.filter(function(obj) {
    for (let key of srcKeys) {
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}

console.log(
  whatIsInAName([{ bat: 2 }, { apple: 1, bat: 2, cookie: 2 }], {
    apple: 1,
    bat: 2
  })
);
