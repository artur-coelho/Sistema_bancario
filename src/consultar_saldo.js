export const consult = (accountNumber, answerLabel) => {
  const response = JSON.parse(localStorage.getItem(`${accountNumber}`));

  answerLabel.innerText = `R$ ${response.accountBalance}`;
  answerLabel.classList.add("show");
};
