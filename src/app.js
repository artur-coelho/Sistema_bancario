import { signIn } from "./cadastrar_conta.js";
import { consult } from "./consultar_saldo.js";

const content = document.querySelector("#content");

const controllerSignIn = document.querySelector(".sign-in");
const controllerConsult = document.querySelector(".consult");
const controllerCredit = document.querySelector(".credit");
const controllerDebit = document.querySelector(".debit");
const controllerTransfer = document.querySelector(".transfer");

const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");

const answerLabel = document.querySelector(".answer");
const sendButton = document.querySelector(".send");

let result1 = "";
let result2 = "";
let result3 = "";

input1.onchange = (e) => {
  result1 = e.target.value;
  console.log(result1);
};

controllerSignIn.onclick = () => {
  sendButton.removeAttribute("onclick");
  showForm(input1, "Digite o número da conta", sendButton, "Cadastrar");
  sendButton.onclick = () => {
    signIn(result1);
    clearForm([input1]);
  };
};

controllerConsult.onclick = () => {
  sendButton.removeAttribute("onclick");
  showForm(
    input1,
    "Digite o número da conta que deseja consultar",
    sendButton,
    "Consultar"
  );
  sendButton.onclick = () => {
    consult(result1, answerLabel);
  };
};

controllerCredit.onclick = () => {
  console.log("clicou");
};

controllerDebit.onclick = () => {
  console.log("clicou");
};

controllerTransfer.onclick = () => {
  console.log("clicou");
};

function showForm(
  inputA,
  valueInputA,
  button,
  valueButton,
  inputB = null,
  valueInputB = null,
  inputC = null,
  valueInputC = null
) {
  input2.classList.remove("show");
  input3.classList.remove("show");
  answerLabel.classList.remove("show");
  inputA.classList.add("show");
  inputA.setAttribute("placeholder", valueInputA);
  if (inputB) {
    inputB.classList.add("show");
    inputB.setAttribute("placeholder", valueInputB);
  }
  if (inputC) {
    inputC.classList.add("show");
    inputC.setAttribute("placeholder", valueInputC);
  }
  button.innerText = valueButton;
  button.classList.add("show");
}

function clearForm(listInput) {
  lisInput.forEach((input) => {
    input.value = "";
  });
}
