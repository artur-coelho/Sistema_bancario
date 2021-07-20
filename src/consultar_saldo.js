export const consult = (accountNumber, answerLabel) => {
  const response = JSON.parse(localStorage.getItem(`${accountNumber}`));

  answerLabel.innerText += response.accountBalance;
  answerLabel.classList.add("show");
};
