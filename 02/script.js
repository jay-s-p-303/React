const isNumber = (x) => typeof Number(x) === "number" && isFinite(Number(x));
const errMsg = "<h1>Please refresh the page, <br>and Enter amount more then 3000rs</h1>";
let acc = null;

let choice = new Promise((resolve, reject) => {
  let x = prompt("Enter balance more than 3000 : ");

  if ((x == null) | !isNumber(x) | (x < 3000)) reject();

  resolve(x);
});

choice
  .then((amount) => {
    acc = new Account("Jay", amount);
  })
  .catch((error) => {
    document.body.innerHTML = errMsg;
  });

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
  acc.deposit(Number(document.querySelector("[name=debitAmount]").value));
  message("Money deposit successfully");
};
const creditBalance = () => {
  acc.withdrawal(Number(document.querySelector("[name=creditAmount]").value));
  message("Money credited successfully");
};
