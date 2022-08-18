// 1

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
// descr: "Spacious apartment in the city center",
// rating: 4,
// price: 2153,
// tags: ["premium", "promoted", "top"]
// };




// 2

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com"
//    },
// };

// 3

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// 4

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line

// 5

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// 6

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment.price)

// Change code below this line

// 7

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;

// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// };

// console.log(apartment.location.city);

// 8

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

// 9
// ВЫЧИСЛЯЕМЫЕ СВОЙСТВА

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
//   // Change code above this line
// };

// console.log(credentials.email)

// 10
// ЦИКЛ FOR...IN

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// 11
// МЕТОД HASOWNPROPERTY()

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//   };
//   // Change code above this line
// }

// 12
// ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ

// function countProps(object) {
//     let propCount = 0;
//     let keys = [];
//   // Change code below this line
// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         keys.push(key);
//       };  
//     };
//     console.log(keys);
//     propCount = keys.length;
//     console.log(propCount);
//   // Change code above this line
//   return propCount;
// }

// countProps({ name: "Mango", age: 2 });

// 13
// МЕТОД OBJECT.KEYS()

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
  
//   for (const key of keys) {
//     values.push(apartment[key]);
//   }

// 14

// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//   const keys = Object.keys(object);
//     for (const key of keys) {
    
//         propCount += 1;
      
//     }
  
//     return propCount;
//     // Change code above this line
//   }

// 15
// МЕТОД OBJECT.VALUES()
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);

// 16

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     for (const key in salaries) {
//         if (salaries.hasOwnProperty(key)) {
//           totalSalary += salaries[key];  
//         };
//     };
//     console.log(totalSalary);
//     // Change code above this line
//     return totalSalary;
//   }

//   countTotalSalary({ mango: 100, poly: 150, alfred: 80 })

// 17

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
//   for (const key of colors) {
//     hexColors.push(key.hex);
//     rgbColors.push(key.rgb);
//   };

// console.log(hexColors);
// console.log(rgbColors);
 

// 18

// ЗАДАЧА. ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВА

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line
//     for (const product of products) {
//         if (productName === product.name) {
//             return product.price;
//         } 
//     } return null;
//     } 
//     // Change code above this line

//   console.log(getProductPrice("Radar"));
 
// 19
// ЗАДАЧА. КОЛЛЕКЦИЯ ЗНАЧЕНИЙ СВОЙСТВА

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

  
//   function getAllPropValues(propName) {
//     const arr = [];
//        for (const product of products) {
//         if (Object.keys(product).includes(propName)) {
//           arr.push(product[propName]);
//         }
//       } return arr;
//     }

//   console.log(getAllPropValues("name"));
//   console.log(getAllPropValues("price"));

// 20
// ЗАДАЧА. ОБЩАЯ СТОИМОСТЬ ТОВАРА

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let total = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//       total = product.price * product.quantity;
//     }
//   } return total;
// }

// console.log(calculateTotalPrice("Radar"));

// 21
// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday, today, tomorrow} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// 22
// ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// 23
// ИЗМЕНЕНИЕ ИМЕНИ ПЕРЕМЕННОЙ

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 24
// ДЕСТРУКТУРИЗАЦИЯ В ЦИКЛАХ

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);

// 25
// ГЛУБОКАЯ ДЕСТРУКТУРИЗАЦИЯ

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//   tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}
// } = forecast;

// console.log(lowToday);

// 26
// ПАТТЕРН «ОБЪЕКТ НАСТРОЕК»

// function calculateMeanTemperature(forecast) {
//   const {
//     today: {low: todayLow, high: todayHigh},
//     tomorrow: {low: tomorrowLow, high: tomorrowHigh}
//   } = forecast;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }))

// 27
// ОПЕРАЦИЯ SPREAD ПРИ ПЕРЕДАЧЕ АРГУМЕНТОВ

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// 28
// ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО МАССИВА

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// 29
// ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО ОБЪЕКТА

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

// 30
// ЗАДАЧА. КАРТОЧКИ ЗАДАЧ

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const newData = {
//     completed, category, priority, ...data
//   }
// return newData;
// }

// 31
// ОПЕРАЦИЯ REST ДЛЯ СБОРА ВСЕХ АРГУМЕНТОВ ФУНКЦИИ

// function add(...args) {
//  console.log(args);
//  let total  = 0;
//  for (let i = 0; i < args.length; i++) {
//   total += args[i];
//  }  return total;
// }

// console.log(add(12, 4, 11, 48))

// 32
// ОПЕРАЦИЯ REST ДЛЯ СБОРА ЧАСТИ АРГУМЕНТОВ ФУНКЦИИ

// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//        total += arg;
//     }
//   }
//   return total;
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))

// 33
// ЗАДАЧА. МАССИВ СОВПАДЕНИЙ

// function findMatches(compareArray, ...args) {
//   const matches = [];
//  for (const arg of args) {
// if (compareArray.includes(arg)) {
// matches.push(arg);
// };
//  };
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))

// 34
// МЕТОДЫ ОБЪЕКТА

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };

// 35
// ДОСТУП К СВОЙСТВАМ ОБЪЕКТА В ЕГО МЕТОДАХ

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//       const bookIndex = this.books.indexOf(oldName);
//       this.books.splice(bookIndex, 1, newName);
//       // Change code above this line
//     } 
//   };console.log(bookShelf.books);

//   bookShelf.updateBook("Haze", "Dungeon chronicles")

// 36
// ЗАДАЧА. ЛАВКА ЗЕЛИЙ «У СТАРОЙ ЖАБЫ»

// const atTheOldToad = {
//     // Change code below this line
  
//   potions: []
  
//     // Change code above this line
//   };

// 37
// ЗАДАЧА. ПОЛУЧАЕМ ВСЕ ЗЕЛЬЯ

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     getPotions() {
//        return this.potions;
//     },
//   };

//   console.log(atTheOldToad.getPotions())

// 38
// ЗАДАЧА: ДОБАВЛЯЕМ НОВОЕ ЗЕЛЬЕ

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//       // Change code below this line
//   this.potions.push(potionName)
//       // Change code above this line
//     },
//   };

// 39
// ЗАДАЧА. УДАЛЯЕМ ЗЕЛЬЕ

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//       // Change code below this line
//       const potionIndex = this.potions.indexOf(potionName);
//       this.potions.splice(potionIndex, 1)
//       // Change code above this line
//     },
//   };

// 40
// ЗАДАЧА: ОБНОВЛЯЕМ ЗЕЛЬЕ

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//       // Change code below this line
//       const potionIndex = this.potions.indexOf(oldName);
//       this.potions.splice(potionIndex, 1, newName)
//       // Change code above this line
//     },
//   };

// 41
// ЗАДАЧА: РАСШИРЯЕМ ИНВЕНТАРЬ

const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },

    addPotion(potion) {
     const potionsName = [];
     for (const element of this.potions) {
      potionsName.push(element.name);
     };
     if (potionsName.includes(potion.name)) {
      return `Error! Potion ${potion.name} is already in your inventory!`;
    }

    this.potions.push(potion);
    
    },

    removePotion(potionName) {
      let potionIndex = -1;
      for (let i = 0; i < this.potions.length; i++) {
        const element = this.potions[i];
        if (element.name === potionName) {
          potionIndex = i;
        }
      }
   
      if (potionIndex === -1) {
        return `Potion ${potionName} is not in inventory!`;
      }
  
      this.potions.splice(potionIndex, 1);
    },

    updatePotionName(oldName, newName) {
      let potionIndex = -1;
      for (let i = 0; i < this.potions.length; i++) {
        const element = this.potions[i];
        if (element.name === oldName) {
          potionIndex = i;
        }
      }

      if (potionIndex === -1) {
        return `Potion ${oldName} is not in inventory!`;
      }

      const oldPotion = this.potions[potionIndex];
      const newPotion = ({...oldPotion, name: newName})
  
      this.potions.splice(potionIndex, 1, newPotion);
    },
    // Change code above this line
  };

  
  atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
 
  atTheOldToad.removePotion('Dragon breath')
  atTheOldToad.updatePotionName("Speed potion", "asas")
  console.log(atTheOldToad.getPotions())

  