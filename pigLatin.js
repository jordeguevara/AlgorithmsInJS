function translatePigLatin(str) {
  let vowel = ["a", "e", "i", "o", "u", "y"];
  let consant = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "x",
    "z",
    "w",
    "y"
  ];
  let myStr = str.split("");
  let letter;
  let front = myStr[0];
  for (letter of myStr) {
    if (!consant.includes(letter)) {
      break;
    }
  }
  if (myStr.indexOf(letter) < myStr.length - 1) {
    let j = 0;
    while (j <= myStr.indexOf(letter)) {
      let val = myStr.shift();
      myStr.push(val);
      j++;
    }
  }
  vowel.includes(front) ? myStr.push("way") : myStr.push("ay");
  return myStr.join("");
}

function translatePigLatin(str) {
  let vowel = ["a", "e", "i", "o", "u", "y"];
  let consant = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "x",
    "z",
    "w",
    "y"
  ];
  let myStr = str.split("");

  let i = 0;
  let front = myStr[0];
  while (i < myStr.length) {
    if (consant.includes(myStr[i++])) {
      continue;
    } else {
      break;
    }
  }
  if (i < myStr.length) {
    let j = 0;
    while (j < i - 1) {
      let val = myStr.shift();
      myStr.push(val);
      j++;
    }
  }

  if (vowel.includes(front)) {
    myStr.push("way");
  } else if (!vowel.includes(front)) {
    myStr.push("ay");
  }

  return myStr.join("");
}

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  myConsonants;
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

let result = translatePigLatin("schwartz");
console.log("result", result);
