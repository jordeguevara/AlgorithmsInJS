/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.cap = capacity;
  const map = {};
  for (let i = 1; i <= capacity; i++) {
    map[i] = null;
  }

  this.map = map;
};

/**
 * @param {number} key
 * @return {number}
 */
// should be fine
LRUCache.prototype.get = function (key) {
  if (!this.map || !this.map[key] || this.map[key].value === null) { return -1; }

  this.map[key].date = Date.now();
  this.map[key].count += 1;
  return this.map[key];
};


/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  function newMap(arr, self) {
    console.log(self);
    for (let i = 1; i <= arr.length; i++) {
      if (arr[i]) { self.map[i] = null; } else { self.map[i] = null; }
    }
    return self.map;
  }
  // delete least recently used cache
  if (key > this.cap && key >= Object.keys(this.map).length) {
    const arr = this.removeLeastRecentUsed();
    const sortByTime = arr.sort((a, b) => b.date - a.date);
    const sortByCount = sortByTime.sort((a, b) => a.count - b.count);

    const removedRecentArr = sortByCount.shift();
    this.map = newMap(removedRecentArr, this);


    console.log(removedRecentArr);
  } else {
    this.map[key] = {
      value,
      date: Date.now(),
      count: 0,
    };
  }
};

LRUCache.prototype.removeLeastRecentUsed = function () {
  const arr = [];
  for (const [key, value] of Object.entries(this.map)) {
    arr.push(value);
    console.log(`${key}: ${value}`);
  }


  //   for (const key in this.map) {
  //     // skip loop if the property is from prototype
  //     if (!this.map.hasOwnProperty(key)) continue;
  //     console.log(this.map);

  //     if (!this.map || !this.map[key]) continue;
  //     const obj = this.map[key];
  //     arr.push(obj);
  //   }

  return arr;
};

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4
