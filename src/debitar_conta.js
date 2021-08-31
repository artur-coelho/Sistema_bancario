export const debit = (accountNumber, value) => {
  const response = JSON.parse(localStorage.getItem(`${accountNumber}`));
  let total = parseFloat(response.accountBalance);
  total -= parseFloat(value);
  if (total < -1000) {
    window.alert("O saldo da conta não pode ser menor que R$ -1000,00");
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
