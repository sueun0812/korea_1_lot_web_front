// # 문제 2-1.js

class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  printInfo() {
    console.log(`이름 : ${this.name}, 나이 : ${this.age}, 이메일 : ${this.email}`);
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  printProduct() {
    console.log(`상품명 : ${this.name}, 가격 : ${this.price}`);
  }
}

class Order {
  constructor(user, product, quantity) {
    this.user = user;
    this.product = product;
    this.quantity = quantity;
  }

  printOrderSummary() {
    console.log(`주문자 : ${this.user.name}, 상품 : ${this.product.name}, 가격 : ${this.quantity}, 총금액 : ${this.product.price * this.quantity}`);
  }
}

let user1 = new User('김철수', 15, 'qwe1234');
user1.printInfo();

let product1 = new Product('사과', 1.5);
product1.printProduct();

let order1 = new Order(user1, product1, 2);
order1.printOrderSummary();