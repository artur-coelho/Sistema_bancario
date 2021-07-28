export const signIn = (accountNumber, isBonus, isSavings) => {
  const account = {
    accountNumber: accountNumber,
    accountBalance: 0,
  };
  if (isBonus) {
    account.accountPoints = 10;
  }
  if (isSavings) {
    account.earnInterest = function (interestRate) {
      const interestAmount = interestRate * this.accountBalance;
      this.accountBalance += interestAmount;
    };
  }
  const textAccount = JSON.stringify(account);
  localStorage.setItem(`${accountNumber}`, textAccount);
};
