let dataString2 = "data string";
console.log(dataString2);

// 1. escaping string (\' \" \\ \n \r \t \b \f)
let data1 = 'ucup \berkata "apa kabar dunia?"';
console.log(data1);
let data2 = "otong berkata \'tetep asyikk\'";
console.log(data2);
let data3 = "ucup berjalan-jalan di tepi pantai, \nkereeen";
console.log(data3);

// 2. literal string (template loteral string)
let namaDepan2 = "Dora";
let namaBelakang2 = "Explor";
let umur = 10;
let namaLengkap = namaDepan2 + " " + namaDepan2 + " " + namaBelakang2; // menjadi masalahnya
console.log(namaLengkap);

// lebih elegan supaya ini tidak bikin error
let biodata = `${namaDepan2} ${namaBelakang2} dengan umur ${umur}`;
console.log(biodata);