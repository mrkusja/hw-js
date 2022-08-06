// 2

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//     return "Access denied, wrong password!";
  

//   // Change code above this line
// }
// console.log(checkPassword("jqueryismyjam"));

// 3

// function checkStorage(available, ordered) {
//   // Change code below this line
  
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } return "The order is accepted, our manager will contact you";
  
//   // Change code above this line
// }

// console.log(checkStorage(200, 250))


// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// const firstElemnt = array[0];
// const lastElement = array[array.length - 1];
// array = [firstElemnt, lastElement];
// console.log(array);


// 9

// function getExtremeElements(array) {
//     const firstElement = array[0];
//     const lastElement = array[array.length - 1];
//     array = [firstElement, lastElement];
   
//     // console.log(firstElement);
//     // console.log(lastElement);
//     console.log(array);
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

// 10

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
// words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "))

// 11

// let asd = "Mango hurries to the train";

// asd = (asd.split(' ')).length;
// // asd = asd.length;
// const price = asd * 10;


// console.log(asd);
// console.log(price);

// function calculateEngravingPrice(message, pricePerWord) {

// message = (message.split(' ')).length;
// const totalPrice = (message * pricePerWord);
// // return totalPrice;
// console.log(totalPrice);
// }

// calculateEngravingPrice("Mango hurries to the train", 10)
// calculateEngravingPrice("Web-development is creative work", 40)

// 12

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

// string = array.join(delimeter);

//   // Change code above this line
//   return string;
// }

// 13

// function slugify(title) {

//     const splitTitle = title.split(' ');
//     const joinTitle = splitTitle.join('-');
//     const slug = joinTitle.toLowerCase();

//  console.log(slug)
// }

// slugify("Arrays for begginers")

// 14

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, (fruits.length - 1));
// const lastThreeEls = fruits.slice(-3);

// 15

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients)

// 16

// function makeArray(firstArray, secondArray, maxLength) {

//     let array = firstArray.concat(secondArray);
//     const lenghtArray = array.length;
//     if (lenghtArray > maxLength) {
//         array = array.slice(0, maxLength);
//     } else
    
//         array;


//  console.log(array)
//   }

//   makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)

// 17

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// 18

// function calculateTotal(number) {
//  // Change code below this line
// let sum = 0;
// for (let i = 1; i <= number; i ++ ) {
//     sum += i;
// }
//     console.log(sum);
// return sum;
//   // Change code above this line
// }
// calculateTotal(3)

// 19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 20

// function calculateTotalPrice(order) {
//   let total = 0;
//     for (let i = 0; i < order.length; i += 1) {
//       total += order[i];
//     }
//     console.log(total);
//     return total;
// }

//  calculateTotalPrice([12, 85, 37, 4])

// 21

// перебрать массив по словам (сделать новый массив с элементами)
// сравнить длину символов каждого элемента
// вывести большее

// function findLongestWord(string) {
    
//     let longestWord = '';
//     const array = string.split(' ');
     
//     for (const word of array) {
//      if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     console.log(longestWord);
//     return longestWord;
//     }

// findLongestWord("The quick brown fox jumped over the lazy dog")
// findLongestWord("Google do a roll")

// 22

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for (let i = min; i <= max; i +=1) {
//         numbers.push(i);
       
//     }  console.log(numbers);

//      return numbers;
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);


// 23

// function filterArray(numbers, value) {
//     // Change code below this line
//     const newArray = [];
//     for (let elementNumber of numbers) {
//         if (elementNumber > value) {
//             newArray.push(elementNumber);
//         }
//     } console.log(newArray);
//     // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// 24

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
//     console.log(fruit)
//   return fruits.includes(fruit);
// }

// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));

// 25


// function getCommonElements(array1, array2) {
//         let newArr = [];
//     for (let i = 0; i < array2.length; i++) {
//             for (let j = 0; j < array1.length; j++) {
//                 if(array1[j] === array2[i]) {
//                     newArr.push(array1[j]);
//                 }
//             }
//         }
//         return newArr;
// }

// function getCommonElements(array1, array2) {
//     const newArr = [];
//     for (const elementArr of array1) {
//         if (array2.includes(elementArr)) {
//             newArr.push(elementArr)
//         }
//     }

//         return newArr;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// 26

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const elementsOrder of order) {
//     total += elementsOrder;
//   }

//   // Change code above this line
//   return total;
// }

// 27

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const itemNumbers of numbers) {
//     const number = itemNumbers;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// 29

// function getEvenNumbers(start, end) {
//     const array = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             console.log(i);
//             array.push(i);
//         }
//     } console.log(array);
// }
  
// getEvenNumbers(2, 5);
// getEvenNumbers(6, 12);

// 30

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// 31

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   // Change code above this line
// }

// 32

// function includes(array, value) {
//     for (const elArray of array) {
//         if (elArray === value) {
//             return true;
//         } 
//         }
//     return false;
//     }
    
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));

