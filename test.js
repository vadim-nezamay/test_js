"use strict"
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// console.log(totalPrice)
// for (let i = 0; i <= 5; i +=1){
//     console.log(i)
// }
// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting);
// function multiply() {
//   // Тело функции
// //   console.log("Это лог при вызове функции multiply");
// // }

// // // 2. Вызовы функции multiply
// // multiply(); // 'Это лог при вызове функции multiply'
// // multiply(); // 'Это лог при вызове функции multiply'
// // multiply();
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }
// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange =!isInRange ; // Change this line

//   return isNotInRange;
// }
// function getSubstring(string, length) {
//   const substring = getSubstring.slice(0, getSubstring.length) ; // Change this line

//   return substring;
// }
// function checkForName(fullName, name) {
//  const result =fullName.includes("name");
//   return result;
// }
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
// const clients = "Mango";

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34

// }
// 1. Объявление параметров x, y, z
function multiply(x, y, z) {
  console.log(`Результат умножения равен ${x * y * z}`);
}

// 2. Передача аргументов
multiply(2, 3, 5); // Результат умножения равен 30
multiply(4, 8, 12); // Результат умножения равен 384
multiply(17, 6, 25); // Результат умножения равен 2550