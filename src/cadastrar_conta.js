export const signIn = (accountNumber, isBonus, isSavings) => {
  const account = {
    accountNumber: accountNumber,
    accountBalance: 0,
  };
  if (isBonus.checked) {
    account.accountPoints = 10;
  }
  if (isSavings.checked) {
    console.log("entrou");
    account.earnInterest = function (interestRate) {
      const interestAmount = (interestRate / 100) * this.accountBalance;
      this.accountBalance += interestAmount;
    };
    account.earnInterest(10);
  }
  const textAccount = JSON.stringify(account);
  localStorage.setItem(`${accountNumber}`, textAccount);
};
