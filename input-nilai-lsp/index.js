// bahan input cmd
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rumus pencari nilai
// urutkan nilai ascending
const ascending = (a, b, c) => {
  let group = [a, b, c];
  return group.sort((a, b) => a - b);
};

// urutkan nilai descending
const descending = (a, b, c) => {
  let group = [a, b, c];
  return group.sort((a, b) => b - a);
};

// cari nilai max
const nilaiMax = (a, b, c) => Math.max(a, b, c);

// cari nilai min
const nilaiMin = (a, b, c) => Math.min(a, b, c);

// // cari nilai rata - rata
const nilaiRataRata = (a, b, c) => (parseInt(a) + parseInt(b) + parseInt(c)) / 3;
// console.log(nilaiRataRata(60,20,10))


console.log("Masukkan Tiga Buah Nilai");
// input nilai
const inputNilai = () => {
  rl.question("Nilai A : ", nilaiA => {
    rl.question("Nilai B : ", nilaiB => {
      rl.question("Nilai C : ", nilaiC => {
        // output
        console.log(`Urutan Nilai Ascending : ${ascending(nilaiA, nilaiB, nilaiC)}`);
        console.log(`Urutan Nilai Descending : ${descending(nilaiA, nilaiB, nilaiC)}`);
        console.log(`Nilai Max : ${nilaiMax(nilaiA, nilaiB, nilaiC)}`);
        console.log(`Nilai Min : ${nilaiMin(nilaiA, nilaiB, nilaiC)}`);
        console.log(`Rata - Rata : ${nilaiRataRata(nilaiA, nilaiB, nilaiC)}`);

        // tanya lagi
        rl.question("apakah mau input nilai lagi (y/n) ? ", (ask) => {
          if (ask === "y") {
            inputNilai();
          } else {
            rl.close();
          }
        });
      });
    });
  });
};

inputNilai();
