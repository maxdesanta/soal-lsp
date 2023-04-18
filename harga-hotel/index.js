// import readline
const readline = require("readline");

// proses input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// buatlah daftar harga
const menuKamar = {
  1: {
    durasi: "1 - 2 Hari",
    Superior: "100.000/night",
    Deluxe: "150.000/night",
    Premium: "200.000/night",
  },
  2: {
    durasi: "3 - 4 Hari",
    Superior: "90.000/night",
    Deluxe: "135.000/night",
    Premium: "180.000/night",
  },
  3: {
    durasi: ">=5 Hari",
    Superior: "80.000/night",
    Deluxe: "120.000/night",
    Premium: "160.000/night",
  },
};

// tampilkan daftar harga di cmd
console.table(menuKamar, ["durasi", "Superior", "Deluxe", "Premium"]);
console.log("Keterangan :");
console.log("1. Superior");
console.log("2. Deluxe");
console.log("3. Premium");
console.log("                       ");

// harga untuk penginputan data
const harga = {
  1: [
    { hari: 1, harga: 100000 },
    { hari: 2, harga: 100000 },
    { hari: 3, harga: 90000 },
    { hari: 4, harga: 90000 },
    { hari: 5, harga: 80000 },
    { hari: Infinity, harga: 80000 },
  ],
  2: [
    { hari: 1, harga: 150000 },
    { hari: 2, harga: 150000 },
    { hari: 3, harga: 135000 },
    { hari: 4, harga: 135000 },
    { hari: 5, harga: 120000 },
    { hari: Infinity, harga: 120000 },
  ],
  3: [
    { hari: 1, harga: 200000 },
    { hari: 2, harga: 200000 },
    { hari: 3, harga: 180000 },
    { hari: 4, harga: 180000 },
    { hari: 5, harga: 160000 },
    { hari: Infinity, harga: 160000 },
  ],
};

// tipe kamar
const tipeKamar = {
  1: "Superior",
  2: "Deluxe",
  3: "Premium",
};

// rubah menjadi rupiah
const convertRupiah = angka => {
  let rubah = angka.toString().split("").reverse().join("");
    let rp = rubah.match(/\d{1,3}/g);
    rp = rp.join(".").split("").reverse().join("");
    return `Rp ${rp}`;
}

// mencari data harga malam
const cariMalam = (a, b) => a.find(data => b <= data.hari);

// function perhitungan
const total = (a, b) => a * b;


const processHotel = () => {
  rl.question("Pilih tipe kamar (input dalam angka) : ", tk => {
    if (tk in tipeKamar) {
      rl.question("Lama menginap (dalam hari) : ", lm => {
        // bahan
        const convert = tipeKamar[tk];
        const hargaTk = harga[tk];

        // ambil rumus
        const hargaPerMalam = cariMalam(hargaTk, lm);
        const totalHarga = total(hargaPerMalam.harga, lm)

        console.log("                       ");

        console.log(`Tipe Kamar : ${convert}`);
        console.log(`Lama Menginap: ${lm} hari`);
        console.log(`Total Harga : Rp ${convertRupiah(totalHarga)}`);

        console.log("                       ");

        rl.question('Apakah mau memesan lagi(y/n) : ', jwb => {
          if (jwb === 'y') {
            processHotel();
          } else {
            rl.close();
          }
        })
      });
    } else {
      console.log('Maaf pilihan tidak tersedia');
      processHotel();
    }
    
  });
};

processHotel();