// Definição de variáveis
var display = document.getElementById("display");
var igual = document.getElementById("igual");
var calculadora = document.getElementById("calculadora").classList;

//Adicionar embaçado nos botões
window.onload = function () {
  function blur() {
    this.blur();
  }
  var btns = document.querySelectorAll(".btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", blur);
  }
};

//Atalhos de teclado
window.addEventListener("keydown", ({ keyCode }) => {
  if (keyCode == 13) {
    return calcular();
  }
  if (
    keyCode == 96 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value += "0";
  }
  if (
    keyCode == 97 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value += "1";
  }
  if (
    keyCode == 98 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value += "2";
  }
  if (
    keyCode == 99 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value += "3";
  }
  if (
    keyCode == 100 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value += "4";
  }
  if (
    keyCode == 101 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value += "5";
  }
  if (
    keyCode == 102 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value += "6";
  }
  if (
    keyCode == 103 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value += "7";
  }
  if (
    keyCode == 104 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value += "8";
  }
  if (
    keyCode == 105 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value += "9";
  }
  if (
    keyCode == 107 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value += "+";
  }
  if (
    keyCode == 109 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value += "-";
  }
  if (
    keyCode == 106 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value += "*";
  }
  if (
    keyCode == 111 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value += "/";
  }
  if (
    keyCode == 110 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value += ".";
  }
  if (
    keyCode == 8 &&
    display.value != "ERRO" &&
    display.value != "Digite um número"
  ) {
    display.value = display.value.substring(0, display.value.length - 1);
  }
});

//Limpar display
function limpar() {
  display.value = "";
  display.style.color = "";
}

//Inserir número no display
function inserir(value) {
  if (display.value != "ERRO" && display.value != "Digite um número") {
    display.value += value;
  }
  if (
    display.value == "*" ||
    display.value == "-" ||
    display.value == "+" ||
    display.value == "/" ||
    display.value == "."
  ) {
    display.value = "";
  }
}

//Calcular o valor
function calcular() {
  if (display.value == "" || display.value == "Digite um número") {
    display.value = "Digite um número";
    display.style.color = "#FF3041";

    //Tremer a calculadora
    calculadora.add("terremoto");
    setTimeout(function () {
      calculadora.remove("terremoto");
    }, 400);
  } else {
    try {
      //Calcular o valor da calculadora
      display.value = eval(display.value);

      //Definir "Erro" no Display
      if (display.value == "Infinity" || display.value == "NaN") {
        display.value = "ERRO";
        display.style.color = "#FF3041";

        //Tremer a calculadora
        calculadora.add("terremoto");
        setTimeout(function () {
          calculadora.remove("terremoto");
        }, 400);

        //Definir "Erro" no Display
        if (display.value == "Infinity") {
          display.value = "ERRO";
          display.style.color = "#FF3041";
        }
      }
    } catch {
      //Definir "Erro" no Display
      display.value = "ERRO";
      display.style.color = "#FF3041";

      if (display.value == "ERRO" || display.value == "Digite um número") {
        //Tremer a calculadora
        calculadora.add("terremoto");
        setTimeout(function () {
          calculadora.remove("terremoto");
        }, 400);

        //Definir "Erro" no Display
        if (display.value == "Infinity") {
          display.value = "ERRO";
          display.style.color = "#FF3041";
        }
      }
    }
  }
}
