import { signIn } from "./cadastrar_conta.js";
import { consult } from "./consultar_saldo.js";
import { credit } from "./creditar_conta.js";
import { debit } from "./debitar_conta.js";
import { earn } from "./render_juros.js";
import { transfer } from "./trasferencia.js";

const controllerSignIn = document.querySelector(".sign-in");
const controllerConsult = document.querySelector(".consult");
const controllerCredit = document.querySelector(".credit");
const controllerDebit = document.querySelector(".debit");
const controllerTransfer = document.querySelector(".transfer");
const controllerInterest = document.querySelector(".interest");

const contentTitle = document.querySelector(".title");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const checkBoxDiv = document.querySelector(".checkbox");
const checkBoxBonus = document.querySelector("#bonus");
const checkboxSaving = document.querySelector("#saving");

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
  showForm(
    contentTitle,
    "Cadastrar conta",
    input1,
    "Digite o número da conta",
    sendButton,
    "Cadastrar"
  );
  checkBoxDiv.classList.add("show");
  sendButton.onclick = () => {
    if (checkboxSaving.checked) {
      if (result2 == "" || result2 == "0") {
        window.alert("A conta poupança deve possuir um saldo inicial!");
      } else {
        signIn(result1, checkBoxBonus, checkboxSaving, result2);
      }
    } else {
      signIn(result1, checkBoxBonus, checkboxSaving);
    }
    clearForm([input1, input2]);
    result2 = "";
  };
};

controllerConsult.onclick = () => {
  sendButton.removeAttribute("onclick");
  showForm(
    contentTitle,
    "Consultar saldo",
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
    contentTitle,
    "Crédito",
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
    contentTitle,
    "Débito",
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
    contentTitle,
    "Transferência",
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

controllerInterest.onclick = () => {
  sendButton.removeAttribute("onclick");
  showForm(
    contentTitle,
    "Render Juros",
    input1,
    "Digite o número da conta que irá render",
    sendButton,
    "Render",
    input2,
    "Digite a quantidade de juros"
  );
  sendButton.onclick = () => {
    earn(result1, result2);
    clearForm([input1, input2]);
  };
};

function showForm(
  title,
  valueTitle,
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
  checkBoxDiv.classList.remove("show");
  title.classList.add("show");
  title.innerText = valueTitle;
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

checkboxSaving.onclick = () => {
  if (checkboxSaving.checked) {
    input2.classList.add("show");
    input2.setAttribute("placeholder", "Digite o saldo inicial da conta");
  } else {
    input2.classList.remove("show");
  }
};

function clearForm(listInput) {
  listInput.forEach((input) => {
    input.value = "";
  });
}
