// materi oop
// function on java script
function diskon(x) {
  let musimPandemik = (x * 30) / 100;
  return musimPandemik;
}

let sale = diskon(20000);
console.log(sale);

// karena js tidak menginisialisasi tipe data maka kita harus memastikan data yang di input ke dalam function harus sama/relevan
// contoh kesalahan pengiriman/input data kedalam function di js

function sayHiTo(name) {
  let halo = `Hai ${name} !`;
  return halo;
}

let test1 = sayHiTo("selo");
console.log(test1);

// akan terjadi error dikarenakan nilai yang diterima oleh function tidak sesuai dimana nilai yang seharusnya dikirim bertipe str
// let test2 = sayHiTo(100);
// console.log(test2);
// outputnya : Uncaught TypeError: name.toUpperCase is not a function

//macam-macam penulisan function pada js
// function declaration
function namaFunc1(param) {
  return param;
}
// anonymouse function
const namaFunc2 = function (param) {
  return param;
};
// Arrow function (terdapat pada ECMAscript(ES6))
const namaFunc3 = (param) => {
  return param;
};

// contoh penerapan function menerima parameter berupa function yang biasa disebut Higher Order Function
const strArray = ["JavaScript", "Java", "C"];
// param array bertipe array sedangkan param callback bertipe function
function forEach(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}
// penerapan function foreach dimana nilai param array akan diisi dengan srtArray dan
// param Callback akan diisi dengan function dengan penulisan menggunakan function arrow dimana nilai yang akan di kembalikan pada function
const lenArray = forEach(strArray, (item) => {
  return item.length;
});

console.log(lenArray);

// class dan object
// class merupakan gambaran umum / blueprint object ex: class mobil dimana mobil memiliki gambaran umum yaitu mempunyai 4 roda,pintu,lampu,dll
// object merupakan Objek memiliki status dan perilaku. Contoh: mobil memiliki merk, warna dan bisa bergerak maju serta mundur. Objek adalah turunan dari class, sebuah objek bisa didefinisikan setelah suatu class ada terlebih dahulu.

// contoh pembuatan class
class person {
  // constructor digunakan untuk mendefinisikan property/atribut pada suatu object
  constructor(name, address) {
    this.name = name; //ini merupakan property dimana berisi data dari suatu object atau variable pada object biasa disebut atribut
    this.address = address;
  }
}
// property dibagi menjadi dua yaitu static property dan instance property
// instance property sebuah property yang bisa kita akses setelah object kita instantiate(lewat keyword new)
// static property nilainya bakal selalu sama disemua instance dari class tersebut

// method merupakan fungsi/aksi dari suatu object ex: pada class person kita dapat menambahkan fungsi walk ,talk ,run dll

class Human {
  // membuat static property
  static isLivingOnEarth = true;
  // membuat constructor method
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  // membuat instance method signature
  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

console.log("menampilakan static property :", Human.isLivingOnEarth);

// membuat prototype/instance method
Human.prototype.greet = function (name) {
  console.log(`Hi, ${name} , I'm ${this.name}`);
};

// membuat static method
Human.destroy = function (thing) {
  console.log(`Human is destroying ${thing}`);
};

// instatiate dari class Human,kita membuat object baru
let newHuman = new Human("ahmad selo", "lampung");
console.log(newHuman);

// mengecek instance of class
console.log("", newHuman instanceof Human);
// contoh menggunakan instance object
console.log(newHuman.introduce());
// contoh menggunakan prototype instance method
console.log(newHuman.greet("sule"));
// contoh menggunakan static method
console.log(Human.destroy("indonesia"));

// inheritance atau yang biasa di sebut dengan pewarisan ex: orang tua ke anaknya dimana anak akan memiliki beberapa kesamaan dengan parentnya
// temologi pada inheritance
// 1. super class / parent class : class yang semua fiturnya diwariskan pada class turunannya(child class)
// 2. sub-class / child class : class turunan yang memarisi semua fitur dari class lain (parent class),child class dapat menambahkan field dan method sendiri sebagai tambahan dari class yang di wariskan (parent class)

// membuat class human2 sebagai parent class
class Human2 {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`hi ,my name is ${this.name}`);
  }

  walk() {
    console.log("work!");
  }
}

// membuat child class dari class Human2
class Programmer2 extends Human2 {
  // pada child class memiliki atribute yaitu programmingLanguages
  constructor(name, address, programmingLanguages) {
    super(name, address); // memanggil constructor/atribut dari class parent
    this.programmingLanguages = programmingLanguages; //atribut dari child class
  }
  // membuat method pada child class yg serupa dengan parentnya atau yang biasa di sebut dengan overriding/override method
  introduce() {
    // memanggil instance method introduce dari class parent
    super.introduce(); //opsional ,kalo memang penting gpp
    console.log(`i can write ${this.programmingLanguages}`); //merupakan atribut method introduce dari child class
  }
  // membuat method child class yg berbeda dengan parentnya
  code() {
    console.log(
      "code some",
      this.programmingLanguages[
        Math.floor(Math.random() * this.programmingLanguages.length)
      ]
    );
  }
}

//inisiate langsung dari parent class Human2
let newHuman2 = new Human2("hary bagong", "mars");
newHuman2.introduce();

// initiate dari child class programmer
let newHuman3 = new Programmer2("handoyo gans", "boyoileng", [
  "Javascript",
  "kotlin",
  "C++",
]);
newHuman3.introduce();
newHuman3.code();
// newHuman3.work(); // terjadi error dikarenakan method code() tidak ada pada child class

try {
  newHuman3.code();
} catch (err) {
  console.log(err.massage);
}

console.log(newHuman3 instanceof Human2);
console.log(newHuman3 instanceof Programmer2);

// ada dua implementasi methode pada inheritance
// 1. overriding method : mengesampingkan atau mengabaikan.membuat method pada child class yang sama dengan method pada parent class
// ex : pada class parent terdapat method introduce dan itu di tulis kembali pada class child dengan nama dan parameter yg sama yaitu introduce()
// jadi overriding itu membuat ulang method pada class child yang sama dengan method pada class parent

// membuat class human3 sebagai parent class
class Human3 {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`hi ,my name is ${this.name}`);
  }

  walk() {
    console.log("work!");
  }
}
// membuat child class dari class Human3
class Programmer3 extends Human3 {
  constructor(name, address, programmingLanguages) {
    super(name, address);
    this.programmingLanguages = programmingLanguages;
  }
  // membuat overriding/override method
  introduce() {
    super.introduce();
    console.log(`i can write ${this.programmingLanguages}`);
  }
  code() {
    console.log(
      "code some",
      this.programmingLanguages[
        Math.floor(Math.random() * this.programmingLanguages.length)
      ]
    );
  }
}
// 2. overloading method : membuat method pada class child yang sama pada class parent akan tetapi parameter pada method yg di buat pada class child berbeda dengan yg ada pada class parent
// ex: pada class parent terdapat method introduce dan itu ditulis kembali pada class child dengan nama yg sama tetapi parameter yg berbeda yaitu introduce(withDetail)
// membuat class human4 sebagai parent class
class Human4 {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`hi ,my name is ${this.name}`);
  }

  walk() {
    console.log("work!");
  }
}
// membuat child class dari class Human4
class Programmer4 extends Human4 {
  constructor(name, address, programmingLanguages) {
    super(name, address);
    this.programmingLanguages = programmingLanguages;
  }
  // membuat overload method
  introduce(withDetail) {
    super.introduce();
    Array.isArray(withDetail)
      ? console.log(`i can write ${this.programmingLanguages}`)
      : console.log("wrong input");
  }
  code() {
    console.log(
      "code some",
      this.programmingLanguages[
        Math.floor(Math.random() * this.programmingLanguages.length)
      ]
    );
  }
}
let newHuman4 = new Programmer4("rusdi lubis", "mandailing", [
  "Javascript",
  "kotlin",
  "C++",
]);
newHuman4.introduce(["kotlin"]);
newHuman4.introduce("kotlin"); //output hi ,my name is rusdi lubis ; wrong input
newHuman4.introduce(1); //output hi ,my name is rusdi lubis ; wrong input
newHuman4.code();

// encapsulation dapat memberikan hak akses pada suatu variable atau method yang biasa disebut dengan visibility dan dapat menghindari bug di karenakn property/method memiliki hak akses yang jelas
// ada 3 macam visibility level yaitu public ,private,dan protected
// 1. public : dimana kita mendefinikan property/method secara publik,dapat dipanggil diluar deklarasi class
// ex : pada class Human terdapat method public yaitu introduce dan isEating

class Human5 {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  // membuat public instance method
  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
  // membuat public static method
  static isEating(food) {
    let foods = ["plant", "animal"];
    return foods.includes(food.toLowerCase());
  }
}

let newHuman5 = new Human5("faiz faza", "isekai");
console.log(newHuman5);
console.log(newHuman5.introduce());
console.log(Human5.isEating("plant"));
console.log(Human5.isEating("animal"));

// 2. private : dimana kita mendefinikan property/method secara private,tidak dapat dipanggil diluar deklarasi class atau hanya dapat diakses di dalam scope class tersebut
// jika di js private dapat dilakukan dengan menggunakan prefix '#' sebelum nama variable atau method

class Human6 {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  // membuat method private
  #doGosip = () => {
    console.log(`my address will become viral ${this.address}`);
  };
  talk() {
    console.log(this.#doGosip()); //mengakses private method #doGosip
  }
  // membuat variable/property/field private
  static #isHidingArea = true;
}

let newHuman6 = new Human6("Bos Burhan", "Bima");
console.log(newHuman6.talk());

try {
  // Human6.#isHidingArea;// output : Private field '#isHidingArea' must be declared in an enclosing class
  // newHuman6.#doGosip;//output : Private field '#isHidingArea' must be declared in an enclosing class
} catch (error) {
  console.log(err);
}

// 3. protected : dimana kita mendefinikan property/method secara protected,hanya bisa di akses oleh child classnya
// jika di js protected dapat dilakukan dengan menggunakan prefix' _' sebelum nama variable atau method

class Human7 {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  // membuat method protected
  _call() {
    console.log(`Call me as a ${this.name}`);
  }
}

class Programer7 extends Human7 {
  constructor(name, address, task, salary) {
    super(name, address);
    this.task = task;
    this.salary = salary;
  }
  doCall() {
    super._call(); //mengakses method protected
  }
}

let newHuman7 = new Human7("mukti", "tangerang");
let job = new Programer7("developer", "$10");

console.log("<<< warning read comment now", newHuman7._call()); //meskipun ini tidak error saat kita panggil method/property dengan level visibilty protected secara public akan tetapi kita harus paham jika method/property protected hanya boleh di panggil pada child class saja
console.log(job.doCall()); //seharusnya seperti ini kita dapat memanggil method pada child class yang mengakses method protected pada class parent

// menerapkan teknik encapsulation untuk menerapkan visibility level pada method dan property dapat menjaga keamanan dari orang lain yg ingin menggunakan method/property tersebut

// contoh case penerapan encapsulation pada authentication

class User {
  constructor(props) {
    // probs merupakan object
    let { email, password } = props; //merupakan destruct
    this.email = email;
    this.encryptedPassword = this.#encrypt(password);
  }
  // membuat private method
  #encrypt = (password) => {
    return `encrypted-version-of-${password}`;
  };
  // Getter
  #decrypt = () => {
    return this.encryptedPassword.split(`encrypted-version-of-`)[1];
  };
  authenticate(password) {
    return this.#decrypt() === password; //ini akan mereturn/mengemnalikan nilai true atau false
  }
}

let Bot = new User({ email: "selo@gmail.com", password: "123456" });
const isAuthenticated = Bot.authenticate("123456");
console.log(isAuthenticated);

// abstraction : merupakan kerangka/gamabran umum/blue print yg berisi function yg akan diaplikasikan ke class lain
// catatan : abstraction tidak dapat dipanggil secara langsung harus melainkan di implementasikan ke dalam class lain atau class lain harus extends ke class abstraction tersebut

// membuat Abstract class
class Human8 {
  constructor(props) {
    if (this.constructor === Human8) {
      throw new Error(
        "tidak bisa intantiate/memulai langsung dari Abstract class"
      );
    }
    let { name, address } = props;
    this.name = name; //semua orang memiliki nama
    this.address = address; //semua orang memiliki alamat
    this.profession = this.constructor.name; //semua orang memiliki profesi biarkan class child yang mendifine ini
  }
  work() {
    //semua orang bisa bekerja
    console.log("working....");
  }
  introduce() {
    //semua orang bisa perkenalan
    console.log(`Hello, my name is ${this.name}`);
  }
}

// jika kita mencoba instantiate/menjalankan langsung class abstract akan terjadi error
try {
  let Abstract = new Human8({ name: "abstract", address: "unknown" });
} catch (err) {
  console.log(err.message);
}

// untuk menggunakan abstract class kita dapat menggunakan class lain untuk mengimplementasi isi pada abstract class tersebut
// kata mas rafid abtraction bisa disebut interface

// membuat class police untuk menggunakan/menjalankan class abstract Human8
class Police extends Human8 {
  constructor(props) {
    super(props);
    this.rank = props.rank; //menambahkan property/atribut rank
  }
  work() {
    console.log("Go to the police station");
    super.work();
  }
}

const newHuman8 = new Police({
  name: "mono",
  address: "lampung tengah",
  rank: "admiral",
});

console.log(newHuman8.profession);
console.log(newHuman8.work());
console.log(newHuman8.introduce());

// polymorpysm
