class Robot {
  constructor() {
    var _name = this.generateRobotName();
    this.setName(_name);
    this.arrRobot = new Set();
    this.usedRobotsNames = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  generateRobotName() {
    let letterArr = this.generateRandomLetter();
    let numbersArr = this.generateRandomNumber();
    let robotName = [...letterArr, ...numbersArr];
    return robotName.join("");
  }

  generateRandomNumber() {
    let numArr = [];
    for (let i = 0; i < 3; i++) {
      numArr.push(Math.floor(Math.random() * 10));
    }
    return numArr;
  }
  generateRandomLetter() {
    let letterArr = [];

    for (let i = 0; i < 2; i++) {
      const randomLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")[
        Math.floor(Math.random() * 26)
      ];
      letterArr.push(randomLetter);
    }
    return letterArr;
  }

  static releaseNames() {
    //
  }

  reset() {
    this.usedRobotsNames.push(this.name);
    let possibleName = this.generateRobotName();
    while (this.usedRobotsNames.includes(possibleName)) {
      possibleName = this.generateRobotName();
    }
    this.setName(possibleName);
  }
}

module.exports = Robot;
