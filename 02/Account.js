class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = Number(balance);
    }

    getName = () => this.name;
    setName = (name) => (this.name = name);
    getBalance = () => this.balance;
    setBalance = (balance) => (this.balance = balance);

    getBalance = () => {
        return this.balance;
    }

    deposit = (amount) => {
        this.balance += Number(amount);
    }

    withdrawal = (amount) => {
        this.balance -= Number(amount);
    }
}