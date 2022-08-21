// 1
// ФУНКЦИЯ КАК ЗНАЧЕНИЕ

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line
  
//   const result = makePizza();
//   const pointer = makePizza;

// 2
// КОЛБЭК-ФУНКЦИИ

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
  

//  console.log(makeMessage("Royal Grand", makePizza)) 

// 3
// ИНЛАЙН-КОЛБЭКИ

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

// 4
// НЕСКОЛЬКО КОЛБЭКОВ

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//       return this.pizzas.includes(pizzaName) ? onSuccess(pizzaName) : onError(pizzaName);
//     },
//   };
//   // Change code above this line
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError (pizzaName) {
//     return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
//   }
  
//   // Method calls with callbacks
//   pizzaPalace.order('Smoked', makePizza, onOrderError);
//   pizzaPalace.order('Four meats', makePizza, onOrderError);
//   pizzaPalace.order('Big Mike', makePizza, onOrderError);
//   pizzaPalace.order('Vienna', makePizza, onOrderError);

// 5
// МЕТОД FOREACH(CALLBACK)

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
//     orderedItems.forEach(function(item, i) {
//     totalPrice += item;
//   });
    
  
  
//     // Change code above this line
//     return totalPrice;
//   }

//   function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
//     orderedItems.forEach(item) => {
//     totalPrice += item;
//   });
//     // Change code above this line
//     return totalPrice;
//   }

// 6
// ЗАДАЧА. ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line
  
//     numbers.forEach(number => {
//         if (number > value) {
//         filteredNumbers.push(number);
//       }
//     })
  
//     // Change code above this line
//     return filteredNumbers;
//   }

//   console.log(filterArray([12, 24, 8, 41, 76], 38))
//   console.log(filterArray([12, 24, 8, 41, 76], 20))

// 7
// ЗАДАЧА. ОБЩИЕ ЭЛЕМЕНТЫ

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line
  
//     firstArray.forEach(el => {
//       if (secondArray.includes(el)) {
//         commonElements.push(el);
//       }
//     })
//     return commonElements;
//     // Change code above this line
//   }

//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))

// 8
// СТРЕЛОЧНЫЕ ФУНКЦИИ.

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
//   }

// 9
// НЕЯВНЫЙ ВОЗВРАТ

// const calculateTotalPrice = (quantity, pricePerItem) => 
//   quantity * pricePerItem;

// 10
// СТРЕЛОЧНЫЕ ФУНКЦИИ КАК КОЛЛБЕКИ

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
  
//     orderedItems.forEach(item => {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }

// 11
// ЗАДАЧА. ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ 2.0

// // Change code below this line
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Change code above this line
//     return filteredNumbers;
//   }

// 12
// ЗАДАЧА. ОБЩИЕ ЭЛЕМЕНТЫ 2.0

// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Change code above this line
//     return commonElements;
//   }

// 13
// ЧИСТЫЕ ФУНКЦИИ

// 13.1
// function changeEven(numbers, value) {

//     let newNumbers = [...numbers];
//     for (let i = 0; i < newNumbers.length; i += 1) {
//       if (newNumbers[i] % 2 === 0) {
//         newNumbers[i] = newNumbers[i] + value;
//       } 
//     } return newNumbers
//   }

// 13.2
// let newNumbers = [];
// numbers.forEach(number => {
//     if (number % 2 === 0) {
//         number = number + value
//     }
//     newNumbers.push(number)
// })
//  return newNumbers
// } 

// console.log(changeEven([1, 2, 3, 4, 5], 10))

// 14
// МЕТОД MAP()

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths)

// 15
// МЕТОД MAP() И МАССИВ ОБЪЕКТОВ

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line
  
//   const titles = books.map(book => book.title);

// 16
// МЕТОД FLATMAP()

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
//   // Change code below this line
  
//   const genres = books.flatMap(book => book.genres);

// 17
// ЗАДАЧА. ИМЕНА ПОЛЬЗОВАТЕЛЕЙ

// 17.1
// const getUserNames = users => 
//     users.map(user => user.name)

// 17.2
// const getUserNames = users => {
    
//     return users.map(user => user.name)
// }
    

  
//   console.log(getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ]))

// 18
// ЗАДАЧА. ПОЧТЫ ПОЛЬЗОВАТЕЛЕЙ

// const getUserEmails = users => {
//     return users.map(user => user.email)

//   };

// 19
// МЕТОДЫ FILTER И FIND

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(even => even % 2 === 0);
// const oddNumbers = numbers.filter(odd => odd % 2 !== 0);

// 20
// ФИЛЬТРАЦИЯ УНИКАЛЬНЫХ ЭЛЕМЕНТОВ

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
  
//   const allGenres = books.flatMap(book => book.genres);
//   console.log(allGenres)
//   const uniqueGenres = allGenres.filter((element, index) => allGenres.indexOf(element) === index);
//   console.log(uniqueGenres)

// 21
// МЕТОД FILTER() И МАССИВ ОБЪЕКТОВ

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
//   // Change code below this line
  
//   const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
//   const booksByAuthor = books.filter(book => book.author === AUTHOR);

// 22
// ЗАДАЧА. ПОЛЬЗОВАТЕЛИ С ЦВЕТОМ ГЛАЗ

// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(el => el.eyeColor === color)
//    };

// console.log(getUsersWithEyeColor ([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ], 'blue'))

// 23
// ЗАДАЧА. ПОЛЬЗОВАТЕЛИ В ВОЗРАСТНОЙ КАТЕГОРИИ

// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter(el => el.age >= minAge && el.age <= maxAge)
//    };

// 24
// ЗАДАЧА. ПОЛЬЗОВАТЕЛИ С ДРУГОМ

// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => user.friends.includes(friendName))
//     };

//   console.log(getUsersWithFriend([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39
//     }
//   ], "Goldie Gentry"))

// 25
// ЗАДАЧА. СПИСОК ДРУЗЕЙ

// const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends)
//     return allFriends.filter((el, i) => allFriends.indexOf(el) === i)
//  };

// 26
// ЗАДАЧА. АКТИВНЫЕ ПОЛЬЗОВАТЕЛИ

// const getActiveUsers = (users) => {
//    return users.filter(user => user.isActive)
//  };

// 27
// ЗАДАЧА. НЕАКТИВНЫЕ ПОЛЬЗОВАТЕЛИ

// const getInactiveUsers = (users) => {
//     return users.filter(user => !user.isActive)
//  };

// 28
// МЕТОД FIND()

// const books = [
//     {
//       title: 'The Last Kingdom',
//       author: 'Bernard Cornwell',
//       rating: 8.38,
//     },
//     {
//       title: 'Beside Still Waters',
//       author: 'Robert Sheckley',
//       rating: 8.51,
//     },
//     {
//       title: 'The Dream of a Ridiculous Man',
//       author: 'Fyodor Dostoevsky',
//       rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   ];
//   const BOOK_TITLE = 'The Dream of a Ridiculous Man';
//   const AUTHOR = 'Robert Sheckley';
//   // Change code below this line
  
//   const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
//   const bookByAuthor = books.find(book => book.author === AUTHOR);

// 29
// ЗАДАЧА. ПОЛЬЗОВАТЕЛЬ С ПОЧТОЙ

// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email)
//    };

// 30
// МЕТОД EVERY()

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(el => el % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(el => el % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(el => el % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(el => el % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(el => el % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(el => el % 2 !== 0);

// 31
// ЗАДАЧА. ВСЕ ЛИ ПОЛЬЗОВАТЕЛИ АКТИВНЫ

// const isEveryUserActive = (users) => {
//     return users.every(user => user.isActive)
//  };

// 32
// МЕТОД SOME()

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(el => el % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(el => el % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(el => el % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(el => el % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(el => el % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(el => el % 2 !== 0);

// 33
// ЗАДАЧА. ЕСТЬ ЛИ АКТИВНЫЕ ПОЛЬЗОВАТЕЛИ

// const isAnyUserActive = users => {
//     return users.some(user => user.isActive)
//  };

// 34
// МЕТОД REDUCE()

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
//   // Change code below this line
  
//   const totalPlayTime = playtimes.reduce((el, number) => {
//     return el + number
//   });
  
//   // Change code above this line
//   const averagePlayTime = totalPlayTime / playtimes.length;

// 35
// МЕТОД REDUCE() И МАССИВ ОБЪЕКТОВ

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
//   // Change code below this line
  
//   const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//     return (total + (player.playtime / player.gamesPlayed));
//   }, 0);

//   console.log(totalAveragePlaytimePerGame)

// 36
// ЗАДАЧА. ОБЩИЙ БАЛАНС ПОЛЬЗОВАТЕЛЕЙ

    //   const calculateTotalBalance = users =>  {
    //     return users.reduce((total, user) => {
    //         return total + user.balance;}, 0)
    //   }
   
// 37
// ЗАДАЧА. ОБЩЕЕ КОЛИЧЕСТВО ДРУЗЕЙ

// const getTotalFriendCount = users => {
//     return users.reduce((total, user) => {
//      return total + user.friends.length}, 0)
//   };

// 38
// МЕТОД SORT()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// 39
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates =  [...releaseDates].sort((a, b) => b - a);

// 40
// СВОЙ ПОРЯДОК СОРТИРОВКИ СТРОК

// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
//   ];
//   // Change code below this line
  
//   const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// 41
// СОРТИРОВКА ОБЪЕКТОВ

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line
  
//   const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
  
//   const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
  
//   const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
  
//   const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// 42
// ЗАДАЧА. СОРТИРОВКА ПО БАЛАНСУ

// const sortByAscendingBalance = users => {
//     return users.sort((a, b) => a.balance - b.balance)
//   };

// 43
// ЗАДАЧА. СОРТИРОВКА ПО КОЛИЧЕСТВУ ДРУЗЕЙ

// const sortByDescendingFriendCount = users => {
//     return [...users].sort((a, b) => b.friends.length - a.friends.length)
//  };

// 44
// ЗАДАЧА. СОРТИРОВКА ПО ИМЕНИ

// const sortByName = users => {
//     return [...users].sort((a, b) => a.name.localeCompare(b.name))
//  };

// 45
// ЦЕПОЧКИ МЕТОДОВ (ЧЕЙНИНГ, CHAINING)

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
//   // Change code below this line
  
//   const names = [...books]
//                 .filter(book => book.rating >= MIN_BOOK_RATING)
//                 .map(book => book.author)
//                 .sort((a, b) => a.localeCompare(b))

// 46
// ЗАДАЧА. ПОЛЬЗОВАТЕЛИ И ДРУЗЬЯ

// const getNamesSortedByFriendCount = users => {
//     return [...users]
//       .sort((a, b) => a.friends.length - b.friends.length)
//       .map(user => user.name)
//  };

// 47
// ЗАДАЧА. ИМЕНА ДРУЗЕЙ

// const getSortedFriends = users => {
//     return [...users]
//     .flatMap(user => user.friends)
//     .filter((friend, i) => [...users].flatMap(user => user.friends).indexOf(friend) === i)
//     .sort((a, b) => a.localeCompare(b))
//   };

// 48
// ЗАДАЧА. ОБЩИЙ БАЛАНС

// const getTotalBalanceByGender = (users, gender) => {

//     return [...users]
//     .filter(user => user.gender === gender)
//     .reduce((total, element) => {
//     return total + element.balance}, 0)
// };


// console.log(getTotalBalanceByGender([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ], "male"))
