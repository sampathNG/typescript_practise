class Invoice {
    name: string;
    details: string;
    amount: number;
    constructor(name: string, details: string, amount: number) {
        this.name = name;
        this.details = details;
        this.amount = amount;
    }
    format(){
        console.log( `${this.name} is from place ${this.details} and ${this.amount}`)
    }
}
const invoice = new Invoice("sampath","devap",123);
console.log(invoice);