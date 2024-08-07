// 1.Buatlah variabel menggunakan var, let, dan const, kemudian coba ubah nilai masing-masing variabel tersebut. 
// Jelaskan hasilnya.
var a = 10;
console.log(a); 

a = 20; 
console.log(a); 

var a = 30; 
console.log(a); 

let b = 10;
console.log(b);

b = 20;
console.log(b); 

// 4.Buat dua variabel dengan nama yang sama menggunakan var dalam satu fungsi dan jelaskan hasilnya.
function arina() {
    var x = 112;
    console.log(x); 
    var x = 113; 
    console.log(x); 
  }
  
  arina();

  // 6.Buat variabel dengan tipe data string, number, bigint, boolean, dan null. Cetak tipe data masing-masing variabel menggunakan typeof.r n
  let nama = "ARINA";
  let umur = 18;
  let angkaTerbesar = 782372637127372718n;
  let isStudent = true;
  let nilaiMidsemester = null;
  
  console.log(typeof nama);       
  console.log(typeof umur);       
  console.log(typeof angkaTerbesar); 
  console.log(typeof isStudent);  
  console.log(typeof nilaiMidsemester); 

// 7.Konversikan variabel string menjadi number dan sebaliknya. Jelaskan proses dan hasilnya.
var strToNum = "123";
var numConverted = Number(strToNum);
console.log(numConverted); 
console.log(typeof numConverted); 

// 8.Buat variabel dengan nilai boolean dan coba ubah nilai boolean tersebut menjadi string dan number.
var numToStr = 321;
var strConverted = String(numToStr);
console.log(strConverted); 
console.log(typeof strConverted); 

// 9.Buat objek dengan beberapa properti dan akses properti tersebut.
let biodata = {
  name: "Arina",
  age: 18,
  occupation: "Developer"
};


console.log(biodata.name);        
console.log(biodata.age);         
console.log(biodata.occupation);  

// 10. Menambahkan Properti Baru ke Objek yang Sudah Ada dan Mengakses Properti Tersebut
// Menambahkan properti baru ke objek person
biodata.country = "KOREA SELATAN";

console.log(biodata.country);  

// 11. Membuat Objek Menggunakan Object.create dan Demonstrasikan Pewarisan Properti dari Objek Lain
let hewan = {
  makan: true
};

let kelinci = Object.create(hewan);
kelinci.lompat = true;

console.log(kelinci.makan);   
console.log(kelinci.lompat);  

// 12. Membuat Fungsi Konstruktor dan Menambahkan Metode Menggunakan Prototype
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log("Hello, namaku " + this.name + " " + this.age );
};

let person1 = new Person("Arina", 19);
let person2 = new Person("Salsa", 10);

person1.greet(); 
person2.greet(); 

// 13. Membandingkan Dua Variabel dengan Tipe Data Berbeda tetapi Nilai Sama
var num = 10;    
var str = "10";         

console.log(num == str); 
console.log(num === str); 

// 14. Membandingkan Dua Variabel dengan Nilai Berbeda
var a = 5;
var a = 10;

console.log(a != b); 
console.log(a !== b);

// 15. Membandingkan Menggunakan Operator >, <, >=, dan <=
var x = 15;
var y = 20;

console.log(x > y);
console.log(x < y); 
console.log(x >= y);
console.log(x <= y);

// 16. Membuat Array, Menambahkan Elemen Baru, dan Menghapus Elemen Terakhir

let buah = ["apel", "pisang", "jeruk"];
console.log(buah);

buah.push("mangga");
console.log(buah); 
buah.pop();
console.log(buah); 

// 17. Mengakses dan Mengubah Nilai Elemen Tertentu dalam Array

let numbers = [1, 13, 3, 41, 10];
console.log(numbers); 

numbers[2] = 20;
console.log(numbers); 


// 18. Membuat Array dengan Tipe Data Campuran dan Mencetak Tipe Data Setiap Elemen

let mixedArray = ["text", 123, true, null, { key: "value" }];
console.log(mixedArray); 

mixedArray.forEach(element => {
  console.log(typeof element);
});

// 19. Konversi Tipe Data String ke Number


// 20. Konversi Tipe Data Boolean ke String dan Number
let bool = true;

let boolStr = String(bool);
console.log(boolStr); 
console.log(typeof boolStr); 

let boolNum = Number(bool);
console.log(boolNum); 
console.log(typeof boolNum); 

// 20. Konversi Boolean ke String dan Number


// 21. Loop for yang Mencetak Angka dari 1 hingga 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 22. Loop while yang Mencetak Angka dari 1 hingga 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 23.Loop do...while yang Mencetak Angka dari 1 hingga 10
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

// 24. Loop yang Mengiterasi Elemen dalam Array dan Mencetak Setiap Elemen
let array = [10, 20, 30, 40, 50];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// 25. Loop yang Mengiterasi Properti dalam Objek dan Mencetak Setiap Properti
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}

