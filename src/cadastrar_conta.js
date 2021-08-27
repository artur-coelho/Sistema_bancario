export const newAccount = (accountNumber) => {
  return {
    accountNumber: accountNumber,
    accountBalance: 0,
  };
};

export const signIn = (accountNumber, isBonus, isSavings) => {
  const account = newAccount(accountNumber, isBonus);

  if (isBonus.checked) {
    account.accountPoints = 10;
  }
  if (isSavings.checked) {
    account.isSavings = true;
  }
  const textAccount = JSON.stringify(account);
  localStorage.setItem(`${accountNumber}`, textAccount);
};
