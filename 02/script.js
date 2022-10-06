let acc = new Account("Jay", 5000);

const main = document.getElementById("main");

const message = (msg) => {
    main.innerHTML = "";
    setTimeout(() => {
        main.innerHTML = msg;
    }, 300);
};

const displayName = () => {
    message("Name = " + acc.getName());
};
const displayBalance = () => {
    message("Balance = " + acc.getBalance());
};
const changeName = () => {
    acc.setName(document.querySelector("[name=nameInput]").value);
    message("Name has been changed successfully.");
};
const debitBalance = () => {
    acc.deposit(Number(document.querySelector("[name=amount]").value));
    message("Money has been deposit successfully");
};
const creditBalance = () => {
    acc.withdrawal(Number(document.querySelector("[name=amount]").value));
    message("Money has been credited successfully");
};
