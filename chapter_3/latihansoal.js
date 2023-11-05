// no 1
function tarikUang(jumlahPenarikan) {
  // Memeriksa apakah saldo mencukupi
  let saldoSabrina = 100000;
  let biayaBank = 0.5;

  // cek penarikan kelipatan 5
  if (jumlahPenarikan % 5 != 0) {
    return "Jumlah penarikan harus kelipatan 5.";
  }

  //cek jumlah saldo
  if (jumlahPenarikan + biayaBank > saldoSabrina) {
    return "Saldo tidak mencukupi untuk melakukan penarikan.";
  }

  // Mengurangi saldo dan menghitung biaya bank
  saldoSabrina = saldoSabrina - (jumlahPenarikan + biayaBank);

  return saldoSabrina;
}

let jumlahPenarikan = 50000; // Ubah sesuai kebutuhan
let hasil = tarikUang(jumlahPenarikan);
console.log("sisa saldo sabrina adalah :", hasil);
// no 2
function nilaiMahasiswa(nilai) {
  if (nilai >= 91 && nilai <= 100) {
    return "A";
  } else if (nilai >= 81 && nilai <= 90) {
    return "B";
  } else if (nilai >= 71 && nilai <= 80) {
    return "C";
  } else if (nilai >= 61 && nilai <= 70) {
    return "D";
  } else {
    return "E";
  }
}

console.log(nilaiMahasiswa(72));
