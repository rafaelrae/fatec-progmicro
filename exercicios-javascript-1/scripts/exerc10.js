let num1 = prompt("Digite o primeiro número:");
let num2 = prompt("Digite o segundo número:");
let operador = prompt("Digite a operação (+, -, * ou /):");
if (operador == "+" || operador == "-" || operador == "*" || operador == "/") {
    if (operador == "+") {
        let resultado = num1 + num2;
        alert("O resultado da soma é: " + resultado);
    } else if (operador == "-") {
        let resultado = num1 - num2;
        alert("O resultado da subtração é: " + resultado);
    } else if (operador == "*") {
        let resultado = num1 * num2;
        alert("O resultado da multiplicação é: " + resultado);
    } else {
            let resultado = num1 / num2;
            alert("O resultado da divisão é: " + resultado);
        }
} else {
        alert("Operação inválida!");
}