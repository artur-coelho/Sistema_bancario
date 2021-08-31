export const debit = (accountNumber, value) => {
  const response = JSON.parse(localStorage.getItem(`${accountNumber}`));
  let total = parseFloat(response.accountBalance);
  total -= parseFloat(value);

  if (response.isSavings && total < 0) {
    window.alert("O saldo da conta poupança não pode ser negativo!");
    return false;
  }
  response.accountBalance = total;

  localStorage.setItem(`${accountNumber}`, JSON.stringify(response));
  window.alert(
    "O novo saldo da conta " +
      response.accountNumber +
      " é: R$" +
      response.accountBalance
  );
  return true;
};
