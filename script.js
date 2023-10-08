//if,else,nested-if 
// Perhitungan berat badan ideal anak bayi samai anak-anak
console.log("Contoh if,else,nested-if : ");

const satu_tahun = 12;

let umur_bulan = 8;
let berat_anak = 8;
let BBI = 0;

if (umur_bulan <= 12) {
    BBI = umur_bulan / 2 + 4;
    if (berat_anak < BBI - 2) {
        console.log("Berat badan bayi anda kurang ideal");
    }
    if (berat_anak > BBI + 2) {
        console.log("Berat badan bayi anda melebihi batas ideal");
    } else {
        console.log("berat badan bayi anda sudah ideal");
    }
} else if (umur < 10 * satu_tahun) {
    BBI = (umur_bulan / satu_tahun) * 2 + 4;
    if (berat_anak < BBI - 2) {
        console.log("Berat badan anak anda kurang ideal");
    }
    if (berat_anak > BBI + 2) {
        console.log("Berat badan anak anda melebihi batas ideal");
    } else {
        console.log("berat badan bayi anda sudah ideal");
    }
} else {
    console.log("Anak anda sudah menginjak Remaja")
}


// switch case
console.log("");
console.log("Contoh Switch case: ");

let syntax = "switch";

switch (syntax) {
    case "switch":
        console.log("Ini syntax switch");
        break;
    case "if":
        console.log("Ini syntax if");
        break;
    case "for":
        console.log("Ini syntax for");
        break;
    case "do-while":
        console.log("Ini syntax do while");
        break;
    default:
        console.log("Syntax ini tidak dikenali");
}

// for statement
for (let i = 1; i <= 15; i++) {
    console.log("Anak Gen halilintar ke-" + i);
}

// while, do while
console.log("");
console.log("Contoh While, do while: ");

let x = 1;

do {
    console.log("umur x: " + x);
    x++;
} while (x <= 10);

// function
console.log("");
console.log("Contoh function (tambah): ");
function tambah(a, b) {
    return a + b;
}

let hasil = tambah(5, 10);
console.log("Hasil penambahan: " + hasil);