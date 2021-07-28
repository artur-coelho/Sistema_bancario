export const signIn = (accountNumber, isBonus) => {
  const account = {
    accountNumber: accountNumber,
    accountBalance: 0,
  };
  if (isBonus) {
    account.accountPoints = 10;
  }
  const textAccount = JSON.stringify(account);
  localStorage.setItem(`${accountNumber}`, textAccount);
};
