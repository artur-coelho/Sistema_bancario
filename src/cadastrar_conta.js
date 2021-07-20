export const signIn = (accountNumber) => {
  const account = {
    accountNumber: accountNumber,
    accountBalance: 0,
  };
  const textAccount = JSON.stringify(account);
  localStorage.setItem(`${accountNumber}`, textAccount);
};

//const pegaralgo = JSON.parse(localstorage.getItem(`${accountNumber}`));
