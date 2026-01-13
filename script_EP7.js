// operasi string

// 1. char at
let dataString3 = "abcde";
let dataChar = dataString3.charAt(0);
console.log(`character pada index 0 = ${dataChar}`);
dataChar = dataString3.charAt(1);
console.log(`character pada index 1 = ${dataChar}`);
dataChar = dataString3.charAt(2);
console.log(`character pada index 2 = ${dataChar}`);
dataChar = dataString3.charAt(3);
console.log(`character pada index 3 = ${dataChar}`);
dataChar = dataString3.charAt(4)
console.log(`character pada index 4 = ${dataChar}`);
dataChar = dataString3.charAt(5)
console.log(`character pada index 5 = ${dataChar}`); // tidak ada character

// 2. menyambung string
let namaDepan3 = "Ucup";
let namaBelakang3 = "Surucup";

let namaLengkap1 = namaDepan3.concat(' ',namaBelakang3,' si keren');
console.log(namaLengkap1);

// 3. mengambil index (kemunculan pertama)
console.log(namaLengkap1.indexOf('k'));
console.log(namaLengkap1.indexOf('c'));
console.log(namaLengkap1.indexOf('u'));
console.log(namaLengkap1.indexOf('u'));

// 4. substring
let namaLengkap1_5_12 = namaLengkap1.substring(5,12);
console.log(namaLengkap1_5_12);
console.log(namaLengkap1.substring(12,5));

// 5. slice
console.log(namaLengkap1.slice(5,12));
console.log(namaLengkap1.slice(12,5));

// 6. replace 
let namaBaru = namaLengkap1.replace('Ucup Surucup','Otong Surotong');
console.log(namaBaru);

// 7. tolower
console.log(namaLengkap1.toLowerCase());

// 8. uppercase
console.log(namaLengkap1.toUpperCase());

//9. extarct data number
let dataString4 = '10';
console.log(typeof dataString4);
let dataInteger = parseInt(dataString4);
console.log(dataInteger);
console.log(typeof dataInteger);

let dataString5 = '10.125'
console.log(typeof dataString5);
let dataFloat = parseFloat(dataString5);
console.log(dataFloat);
console.log(typeof dataFloat);

