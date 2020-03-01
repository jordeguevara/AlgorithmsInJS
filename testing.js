
let data = {
  hours_type: 'REGULAR',
  is_open_now: true,
  open: [
    {
      day: 0,
      end: '1500',
      is_overnight: false,
      start: '1100',
    },
    {
      day: 0,
      end: '0100',
      is_overnight: true,
      start: '1700',
    },
    {
      day: 1,
      end: '1500',
      is_overnight: false,
      start: '1100',
    },
    {
      day: 1,
      end: '0100',
      is_overnight: true,
      start: '1700',
    },
    {
      day: 2,
      end: '1500',
      is_overnight: false,
      start: '1100',
    },
    {
      day: 2,
      end: '0100',
      is_overnight: true,
      start: '1700',
    },
    {
      day: 3,
      end: '1500',
      is_overnight: false,
      start: '1100',
    },
    {
      day: 3,
      end: '0100',
      is_overnight: true,
      start: '1700',
    },
    {
      day: 4,
      end: '1500',
      is_overnight: false,
      start: '1100',
    },
    {
      day: 4,
      end: '0100',
      is_overnight: true,
      start: '1700',
    },
    {
      day: 5,
      end: '0100',
      is_overnight: true,
      start: '1700',
    },
    {
      day: 6,
      end: '0100',
      is_overnight: true,
      start: '1700',
    },
  ],
};
function getDate() {
  return 3;
}

let current = getDate(); //returns 0-6

const getHours = (day, schedule) => {
  let currentBusinessDayHours = schedule.open.filter(val => {
    return val.day == day;
  });
  let end = currentBusinessDayHours.map(val => val.end);
  return end.sort();
};

let ress = getHours(current, data);
let time = ress.length > 1 ? ress[0]: ress[0];
time
let result = convert12(time);
result

function convert12(str) {
  str = str.toString();
  let h1 = parseInt(str.charAt(0) - '0');
  let h2 = parseInt(str.charAt(1) - '0');
  h1;
  h2;

  let hh = h1 * 10 + h2;

  // Finding out the Meridien of time ie. AM or PM
  let Meridien;
  if (hh < 12) {
    Meridien = 'AM';
  } else Meridien = 'PM';

  hh %= 12;
  finalStr = ""
  // Handle 00 and 12 case separately
  if (hh == 0) {
    finalStr += "12:"

    // Printing minutes and seconds
    for (let i = 2; i < 8; ++i) {
      finalStr += str.charAt(i)
    }
  } else {
    finalStr += hh+':'
    // Printing minutes and seconds
    for (let i = 2; i < 8; ++i) {
      finalStr += str.charAt(i)
    }
  }
  return finalStr + Meridien
}

