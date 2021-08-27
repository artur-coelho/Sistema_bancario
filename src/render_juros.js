export const earn = (accountNumber, rate) => {
  const response = JSON.parse(localStorage.getItem(`${accountNumber}`));
  const novaConta = { ...response }; //newAccount(response.accountNumber)
  if (novaConta.isSavings) {
    novaConta.earnInterest = function (interestRate) {
      const interestAmount = (interestRate / 100) * this.accountBalance;
      this.accountBalance += interestAmount;
    };

    novaConta.earnInterest(rate);
    console.log(novaConta);
    localStorage.setItem(`${accountNumber}`, JSON.stringify(novaConta));
    window.alert(
      "O novo saldo da conta " +
        novaConta.accountNumber +
        " é: R$" +
        novaConta.accountBalance
    );
  } else {
    window.alert("Essa conta não é poupança!");
  }
};
