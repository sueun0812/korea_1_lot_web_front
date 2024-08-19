// # 문제2-2.js

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) { 
      total += this.items[i].price;
    }
    return total;
  }

  printReceipt() {
    if (this.items.length === 0) {
      console.log("Your cart is empty.");
    } else {
      console.log("Receipt:");
      this.items.forEach(function(item) {
        console.log(`${item.name}: $${item.price}`);
      });
      console.log(`Total: $${this.calculateTotal()}`);
    }
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Apple", price: 1.5 });
cart.addItem({ name: "Banana", price: 2.0 });
cart.printReceipt();
