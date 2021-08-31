export const newAccount = (accountNumber) => {
  return {
    accountNumber: accountNumber,
    accountBalance: 0,
  };
};

export const signIn = (
  accountNumber,
  isBonus,
  isSavings,
  initialValue = "0"
) => {
  const account = newAccount(accountNumber);

  if (isBonus.checked) {
    account.accountPoints = 10;
  }
  if (isSavings.checked) {
    account.isSavings = true;
    account.accountBalance = parseFloat(initialValue);
  }
  const textAccount = JSON.stringify(account);
  localStorage.setItem(`${accountNumber}`, textAccount);
};
