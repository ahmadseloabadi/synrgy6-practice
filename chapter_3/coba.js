console.log("output :", 1 > 2 && 10 + 20);

let x = 1;
let y = 10;

hasil = y <= x || true;
console.log("output :", hasil);

let x1 = 1;
let y1 = 10;

hasil1 = x1 > y1 ? x1 === 1 && "yes" : y1 !== 10 || "no";

console.log("output :", hasil1);

let x2 = true;
let y2 = false;

hasil2 = (x2 && y2) || 10 + 1 || "hello word";
console.log("output :", hasil2);

// const x3 = 10;
// x3++;
// hasil3 = x3 === 11 ? "sebelas" : "sepuluh";
// console.log("output :", hasil3);

let isRaining = false;

if (isRaining) {
  console.log("aku bakal pake payung");
}

for (let i = 1; i < 10; i++) {
  console.log("halo");
}

function getSquereArea(size) {
  return size * size;
}

console.log("menggunakan function :", getSquereArea(10));

let i = 1;
while (false) {
  i++;
  console.log("muter");
  if (i === 100) break;
}

const month = "JULY";
const JANUARY = "JANUARY";
const FEBRUARY = "FEBRUARY";

switch (month) {
  case JANUARY:
    console.log("ini bulan January!");
    break;
  case FEBRUARY:
    console.log("ini bulan February!");
    break;
  default:
    console.log("ok");
}

const person = {
  name: "sabrina",
  dateOfBrith: "30-07-1999",
};

function getBirthMonth(person) {
  const month = person.dateOfBrith;

  switch (month) {
    case "01":
      return "January";
    case "07":
      return "july";
    default:
      return null;
  }
}

console.log(getBirthMonth(person));

function getSquereArea(size) {
  return size * size;
}

function getCupeVolume(size) {
  return getSquereArea(size) * size;
}
const x4 = getCupeVolume(2);

console.log(x4);
