export const credit = (accountNumber, value) => {
  const response = JSON.parse(localStorage.getItem(`${accountNumber}`));
  let total = parseFloat(response.accountBalance);
  total += parseFloat(value);
  response.accountBalance = total;

  localStorage.setItem(`${accountNumber}`, JSON.stringify(response));
  window.alert(
    "O novo saldo da conta " +
      response.accountNumber +
      " é: R$" +
      response.accountBalance
  );
};
