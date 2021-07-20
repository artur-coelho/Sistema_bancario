import { signIn } from "./cadastrar_conta.js";

const content = document.querySelector("#content");

const controllerSignIn = document.querySelector(".sign-in");
const controllerConsult = document.querySelector(".consult");
const controllerCredit = document.querySelector(".credit");
const controllerDebit = document.querySelector(".debit");
const controllerTransfer = document.querySelector(".transfer");

const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const sendButton = document.querySelector(".send");

let result1 = "";
let result2 = "";
let result3 = "";

input1.onchange = (e) => {
  result1 = e.target.value;
  console.log(result1);
};

controllerSignIn.onclick = () => {
  showForm(input1, "Digite o número da conta", sendButton, "Cadastrar");
  signIn(result1);
};
controllerConsult.onclick = () => {
  console.log("clicou");
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
  inputA.value = "";
  inputA.classList.add("show");
  inputA.setAttribute("placeholder", valueInputA);
  if (inputB) {
    inputB.value = "";
    inputB.classList.add("show");
    inputB.setAttribute("placeholder", valueInputB);
  }
  if (inputC) {
    inputC.value = "";
    inputC.classList.add("show");
    inputC.setAttribute("placeholder", valueInputC);
  }
  button.innerText = valueButton;
  button.classList.add("show");
}
