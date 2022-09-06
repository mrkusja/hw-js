// 1
// КОНТЕКСТ ВЫЗОВА ФУНКЦИИ

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//       return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);
  
//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }
  
//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
//   };

// 2
// ЗАДАЧА: АККАУНТ ПОЛЬЗОВАТЕЛЯ

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//     // Change code above this line
//   };
  
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// 3
// ЗАДАЧА: ИСТОРИЯ ЗАКАЗОВ

// const historyService = {
//     orders: [
//       { email: "jacob@hotmail.com", dish: "Burrito" },
//       { email: "solomon@topmail.net", dish: "Burger" },
//       { email: "artemis@coldmail.net", dish: "Pizza" },
//       { email: "solomon@topmail.net", dish: "Apple pie" },
//       { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//       return this.orders
//         .map(order => `email: ${order.email} dish: ${order.dish}`)
//         .join(" - ");
//     },
//     getEmails() {
//       const emails = this.orders.map(order => order.email);
//       const uniqueEmails = new Set(emails);
//       return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//       return this.orders.filter(order => order.email === email);
//     },
//     // Change code above this line
//   };

// 4
// ПРОТОТИП ОБЪЕКТА

// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
//   };
//   // Change code below this line
  
//   const child = Object.create(parent);
  
//   // Change code above this line
//   child.name = "Jason";
//   child.age = 27;

// 5
// ЗАДАЧА: ЦЕПОЧКА ПРОТОТИПОВ

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
//   };
//   // Change code below this line
  
//   const parent = Object.create(ancestor);
//   parent.name = "Stacey";
//   parent.surname = "Moore";
//   parent.age = 54;
  
//   const child = Object.create(parent);
//   child.name = "Jason";
//   child.age = 27;

// 6
// ОБЪЯВЛЕНИЕ КЛАССА
// class Car {}

// 7
// КОНСТРУКТОР КЛАССА

// class Car {
//     // Change code below this line
//   constructor (brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//     // Change code above this line
//   }

// console.log(new Car("Audi", "Q3", 36000))
// console.log(new Car("BMW", "X5", 58900))

// 8
// ОБЪЕКТ ПАРАМЕТРОВ

// class Car {
//     // Change code below this line
//     constructor({brand, model, price}) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     // Change code above this line
//   }

// 9
// МЕТОДЫ КЛАССА

// class Car {
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     // Change code below this line
//   getPrice() {
//     return this.price;
//   }
  
//     changePrice(newPrice) {
//       this.price = newPrice;
//     }
  
//     // Change code above this line
//   }

// 10
// ЗАДАЧА: СКЛАД

// class Storage {
//     constructor (items) {
//       this.items = items;
//     }
      
//     getItems() {
//       return this.items;
//     }
    
//     addItem(newItem) {
//       return this.items.push(newItem);
//     }
    
//     removeItem(itemToRemove) {
//       this.items.forEach((item, i) => {
//         if (item === itemToRemove) {
//           return this.items.splice(i, 1)
//         }
//       })
//     }
//     }
//     // Change code above this line
//     const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//     console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//     storage.addItem("Droid");
//     console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//     storage.removeItem("Prolonger");
//     console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// 11
// ЗАДАЧА: КОНСТРУКТОР СТРОК

// class StringBuilder {
//     constructor(value) {
//       this.value = value;
//     }
//     getValue() {
//       return this.value;
//     }
//     padStart(str) {
//         this.value = str + this.value
//     }
//     padEnd(str) {
//         this.value = this.value + str
//     }
//     padBoth(str) {
//         this.value = str + this.value + str
//     }
//   }
//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="

// 12
// ПРИВАТНЫЕ СВОЙСТВА

// class Car {
//     // Change code below this line
//   #brand;
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
  
//     getBrand() {
//       return this.#brand
//     }
  
//     changeBrand(newBrand) {
//       this.#brand = newBrand
//     }
  
//     // Change code above this line
//   }

// 13
// ЗАДАЧА: СКЛАД 2.0

// class Storage {
//     // Change code below this line
//     #items;
//     constructor(items) {
//       this.#items = items;
//     }
  
//     getItems() {
//       return this.#items;
//     }
  
//     addItem(newItem) {
//       this.#items.push(newItem);
//     }
  
//     removeItem(itemToRemove) {
//       this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
//   }
  
//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// 14
// ЗАДАЧА: КОНСТРУКТОР СТРОК 2.0

// class StringBuilder {
//     // Change code below this line
//     #value;
//     constructor(initialValue) {
//       this.#value = initialValue;
//     }
  
//     getValue() {
//       return this.#value;
//     }
  
//     padEnd(str) {
//       this.#value += str;
//     }
  
//     padStart(str) {
//       this.#value = str + this.#value;
//     }
  
//     padBoth(str) {
//       this.padStart(str);
//       this.padEnd(str);
//     }
//   }
  
//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="

// 15
// ГЕТТЕРЫ И СЕТТЕРЫ

// class Car {
//     #brand;
//     #model;
//     #price;
  
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.#model = model;
//       this.#price = price;
//     }
  
//     get brand() {
//       return this.#brand;
//     }
  
//     set brand(newBrand) {
//       this.#brand = newBrand;
//     }
  
//     get model() {
//       return this.#model;
//     }
  
//     set model(newModel) {
//       this.#model = newModel;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       this.#price = newPrice;
//     }
//   }

// 16
// СТАТИЧЕСКИЕ СВОЙСТВА

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE) {
//     this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// audi.price = 48500;
// console.log(audi.price); // 48500

// audi.price = 60000;
// console.log(audi.price); // 48500

// 17
// СТАТИЧЕСКИЕ МЕТОДЫ

// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line
//     static checkPrice(price) {
//       if (price > Car.#MAX_PRICE) {
//         return 'Error! Price exceeds the maximum';
//       } return 'Success! Price is within acceptable limits';
//     }
//     // Change code above this line
//     constructor({ price }) {
//       this.price = price;
//     }
//   }
  
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
  
//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// 18
// НАСЛЕДОВАНИЕ КЛАССОВ

// class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   // Change code below this line
//   class Admin extends User {
//     static AccessLevel = {BASIC: "basic", SUPERUSER: "superuser"}
//   };

// 19
// КОНСТРУКТОР ДОЧЕРНЕГО КЛАССА

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     // Change code below this line
//     constructor ({email, accessLevel}) {
//        super(email);
//        this.accessLevel = accessLevel;
//     }
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });

//   const kivi = new Admin({
//     email: "kivistar@mail.com",
//     accessLevel: Admin.AccessLevel.BASIC,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"

//   console.log(kivi.email);
//   console.log(kivi.accessLevel);

// 20
// МЕТОДЫ ДОЧЕРНЕГО КЛАССА

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     // Change code below this line
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     blacklistedEmails = [];
//     blacklist(email) {
//       this.blacklistedEmails.push(email);
//     }
//     isBlacklisted(email) {
//     //  return this.blacklistedEmails.includes(email);
//      return this.blacklistedEmails.some(black => black === email);
//     }
  
//     constructor({ email, accessLevel}) {
//       super(email);
//       this.accessLevel = accessLevel;
//     }
  
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
  
//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true