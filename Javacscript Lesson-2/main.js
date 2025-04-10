// alert("hello world");

// let a = 5;

// const b = 9;

// console.log(5 * "5");

// MISOL UCHUN

// let a = prompt("son kirit: ");
// let b = prompt("username: ");
// if (a > 0 && b == "admin") {
//     alert("musbat");
// } else if (a < 0 && b != "admin") {
//     alert("manfiy");
// } else {
//     alert("nolga teng");
// }

//birinchi misol

// let x = prompt("X va Y ");
// if (x > 0 == "max") {
//     alert("X va Y");
// } else {
//     alert("nolga teng");
// }

// let x = prompt("son kiriting: ");
// let y = prompt("son kiriting: ");
// if (x > y) {
//     alert("max Y");
// } else if (y > x) {
//     alert("minX");
// } else {
//     alert("x = y");
// }

// 2-masala

// let x = prompt("son kiriting: ");
// let y = prompt("son kiriting: ");
// let z = prompt("son kiriting: ");
// if (0 > 5 && 0 > 7 && 7 > 5) {
//     alert("Y");
// } else if (y > x) {
//     alert("X");
// } else if (x < z) {
//     alert("Z");
// } else {
//     alert("xato raqam");
// }

// 3-masala

// let x = 1
// let y = 1
// let z = 5
// if((x+y+z)>x*y*z){
//     alert("max")
// }else if((x*y*z)>x+y+z){
//     alert('min')
// }else{
//     alert('x=y')
// }

// let x = 1
// let y = 1
// let z = 1
// if(((x+y+z/2))>x*y*z){
//     alert("max")
// }else if(((x+y+z/2)<x*y*z)**2+1){
//     alert("min")
// }else{
//     alert("nolga teng")
// }

// 4-masala

// let a = 1
// let b = 5
// let c = 10

// let text = "webbrain academy";

// var text = 1

// console.log(text);

// let num = 1;
// a = 2;
// b = 3;

// console.log(num, a, b);

// ====================

// let name = "hush kelibsiz";

// console.log(`osiyo universiteriga ${name}`);

// let ar = ["muhhmad, 12, 'islom"];
// let obj = {};
// let funk = () => {};
// function test() {}

// console.log(ar);
// ==================== 4-masala

// let a = 15;
// b = 10;
// c = 5;
// if (a >= b && a >= c) {
//     alert(a);
// } else if (b <= a && b <= c) {
//     alert(b);
// } else if (c <= b && c <= a) {
//     alert(c);
// } else {
//     alert("shart noto'g'ri berilgam");
// }

// ==================== 5-masala

// let a = 1;
// let b = 1;
// let c = 1;
// if(a >= b >= c) *2 {
// 	else if()
// }

// Foydalanuvchidan sonlarni olish (brauzer uchun)
// let a = prompt("a ni kiriting:");
// let b = prompt("b ni kiriting:");
// let c = prompt("c ni kiriting:");

// Node.js muhiti uchun alternativ (agar console dan kiritmoqchi bo'lsangiz)
// let a = parseFloat(require('readline-sync').question("a ni kiriting: "));
// let b = parseFloat(require('readline-sync').question("b ni kiriting: "));
// let c = parseFloat(require('readline-sync').question("c ni kiriting: "));

// if (a >= b && b >= c) {
// Agar a >= b >= c shart bajarilsa, qiymatlarni 2 marta oshiramiz
//     a *= 2;
//     b *= 2;
//     c *= 2;
// } else {
// Aks holda, qiymatlarning absolut qiymatini olamiz
//     a = Math.abs(a);
//     b = Math.abs(b);
//     c = Math.abs(c);
// }

// alert(`natija: a = ${a}, b = ${b}, c = ${c}`);

// console.log("Natija:");
// console.log();
// console.log("b =", b);
// console.log("c =", c);

// ==================== 6-masala

// let x = prompt("son kititing: ");

// let y = prompt("son kititing: ");

// if (x > y) {
//     alert("z=x-y");
// } else {
//     alert("y-x+1");
// }

// ==================== 7-masala

// let a = prompt("son kiriting: ");
// let b = prompt("son kiriting: ");
// if (a > b) {
//     alert(a)
// } else {
//     alert(a, b)
// }

// ==================== 8-masala

// let a = prompt("son kiriting: ");
// let b = prompt("son kiriting: ");
// if (a <= b) {
//     alert((a = 0));
// } else if (a>b){
//     alert(a, b);
// }

// FOR VA WHILE oid malasalar

// 1-masala

// let yigindi = 0;

// while (true) {
//   let kiritilganSon = prompt("Son kiriting (0 - yakunlash):");
//   let son = Number(kiritilganSon);

//   if (son === 0) {
//     break;
//   }

//   yigindi += son;
// }

// alert("Yig'indi = " + yigindi);

// 2-masala

// let i = 0;

// while (i < 10) {
//     let a = prompt("son kirit: ");
//     if (a % 2 == 0) {
//         console.log(`juft ${a}`);
//     } else {
//         console.log(`toq ${a}`);
//     }
//     i++;
// }

// 2-masala

// let a = +prompt("son kiriting: ");
// let i = 1;
// while (i <= a) {
//     if (i % 2) {
//         console.log(i);
//     }
//     i++;
// }

// 3-masala

// let x = prompt("son kiriting: ");

// let = xonalarsoni = 0;

// while (x > 0) {
//     x = x / 10;
//     xonalarsoni++;
// }
// alert(`bu son ${xonalarsoni} xonalari, `);

// 3-masala

// let x = Number(prompt("Son kiriting: "));
// let xonalarsoni = 0;

// while (x >= 1) {
//     x = Math.floor(x / 10);
//     xonalarsoni++;
// }

// alert(`Bu son ${xonalarsoni} xonali.`);

// 4-masala

// FOR and WHILE operatorlari

// 1-masala

// let n = +prompt("son kiriting: ");
// for (let i = 1; i <= n; i++) {
//     if (n % i == 0){
//         console.log(i);
//     }
// }

// 2-masala

// let n = +prompt("son kiriting: ");
// a = 0;
// for (let i = 1; i <= n; i++ && i + a) {
//     if (n % i == 0) {
//         a = a + i;
//         console.log(a);
//     }
// }

// 3-masala

// let n = +prompt("son: ");
// let a = 0;
// for (let i = 1; i < n; i++) {
//     if (n % i == 0) {
//         a += i;
//     }
// }
// if (n == a) {
//     alert(`${n} mukammal son`);
// }

// 5-masala

// let x = +prompt("son kiriting: ");
// let a = 0;

// 6-masala

// let number = +prompt("son: ");
// let isPrime = true;

// if (number <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i <= number / 2; i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if (isPrime) {
//     console.log("tub");
// } else {
//     console.log("tub emas");
// }


// 7-masala

let number = +prompt('son kiriting: ')
