console.log("coba run aplikasi dengan nodemon...");
console.log(
  "running dengan nodemon mirip liveserver akan run ulang ketika file di save"
);
// contoh dari core module
const os = require("os");

console.log(os.freemem());

// local module
const luasSegitiga = require("./luasSegitiga");

console.log("luas segitiga :", luasSegitiga(3, 5));

// mencoba modul fs dimana fs merupakan modul js untuk read dan write file
const fs = require("fs");

// read file
const fileContent = fs.readFileSync("./file.txt", "utf-8");
console.log("membaca file dengan modul fs :", fileContent);

// write file txt
fs.writeFileSync(
  "./file2.txt",
  "ini content yang dibuat/ditulis dari nodejs dengan modul fs "
);
// write file json
const personData = {
  id: 1,
  name: "selo",
};
fs.writeFileSync(
  "./person.json",
  JSON.stringify(personData) //stringfy untuk mengubah object js ke string json
);
