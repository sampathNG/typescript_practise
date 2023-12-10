"use strict";
class Invoice {
    constructor(name, details, amount) {
        this.name = name;
        this.details = details;
        this.amount = amount;
    }
    format() {
        console.log(`${this.name} is from place ${this.details} and ${this.amount}`);
    }
}
const invoice = new Invoice("sampath", "devap", 123);
console.log(invoice);
