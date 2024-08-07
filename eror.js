// 2.Buat variabel dengan nama yang tidak valid dan jelaskan kesalahan yang terjadi.
var x = A;            
console.log(x); 
x = B; 
console.log(x); 

// Menggunakan let
let y = ARINA;
console.log(y); 
y = ARINJEE; 
console.log(y); 

// 3.Deklarasikan variabel dalam sebuah blok kode (misalnya, dalam if statement) menggunakan let dan const. Coba akses variabel tersebut di luar blok dan jelaskan hasilnya.
if (true) {
    let a = 30;
    const b = 40;
    console.log(a); // Output: 30
    console.log(b); // Output: 40
  }
  
  console.log(a); // Error: a is not defined
  console.log(b); // Error: b is not defined
  

// 5.Deklarasikan variabel menggunakan var dalam sebuah fungsi dan akses variabel tersebut di luar fungsi. Jelaskan hasilnya.
function ARINA() {
    var y = 30;
    console.log(y); 
  }
  
  ARINA();
  console.log(y); // Error: y is not defined
  


  