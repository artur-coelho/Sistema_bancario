export const consult = (accountNumber, answerLabel) => {
  const response = JSON.parse(localStorage.getItem(`${accountNumber}`));

  answerLabel.innerText = `O saldo da conta ${response.accountNumber} é R$ ${response.accountBalance}`;
  answerLabel.classList.add("show");
};
