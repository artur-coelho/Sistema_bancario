export const credit = (accountNumber, value) => {
  const response = JSON.parse(localStorage.getItem(`${accountNumber}`));
  let total = parseFloat(response.accountBalance);
  total += parseFloat(value);
  response.accountBalance = total;
  if (response.accountPoints) {
    const points = Math.trunc(value / 100);
    response.accountPoints += points;
  }

  localStorage.setItem(`${accountNumber}`, JSON.stringify(response));
  window.alert(
    "O novo saldo da conta " +
      response.accountNumber +
      " é: R$" +
      response.accountBalance
  );
};
