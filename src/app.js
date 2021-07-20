import { signIn } from "./cadastrar_conta.js";
import { consult } from "./consultar_saldo.js";
import { credit } from "./creditar_conta.js";
import { debit } from "./debitar_conta.js";
import { transfer } from "./trasferencia.js";

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
};

input2.onchange = (e) => {
  result2 = e.target.value;
};

input3.onchange = (e) => {
  result3 = e.target.value;
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
    clearForm([input1]);
  };
};

controllerCredit.onclick = () => {
  sendButton.removeAttribute("onclick");
  showForm(
    input1,
    "Digite o número da conta que deseja creditar",
    sendButton,
    "Creditar",
    input2,
    "Digite o valor a creditar"
  );
  sendButton.onclick = () => {
    credit(result1, result2);
    clearForm([input1, input2]);
  };
};

controllerDebit.onclick = () => {
  sendButton.removeAttribute("onclick");
  showForm(
    input1,
    "Digite o número da conta que deseja debitar",
    sendButton,
    "Debitar",
    input2,
    "Digite o valor a Debitar"
  );
  sendButton.onclick = () => {
    debit(result1, result2);
    clearForm([input1, input2]);
  };
};

controllerTransfer.onclick = () => {
  sendButton.removeAttribute("onclick");
  showForm(
    input1,
    "Digite o numero da conta origem:",
    sendButton,
    "Transferir",
    input2,
    "Digite o numero da conta destino:",
    input3,
    "Digite o valor que deseja transferir"
  );
  sendButton.onclick = () => {
    transfer(result1, result2, result3);
    clearForm([input1, input2, input3]);
  };
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
  listInput.forEach((input) => {
    input.value = "";
  });
}
