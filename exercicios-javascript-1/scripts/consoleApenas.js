// Exercício 1
console.log("Exercício 1:");
let nome = "Rafael";
let idade = 30;
let almocouHoje = true;
console.log(typeof nome, typeof idade, typeof almocouHoje + "\n");


// Exercício 2
console.log("Exercício 2:");
let num1=55, num2=555;
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
console.log(` A soma dos valores é ${soma}.\n A subtração dos valores é ${subtracao}.\n A multiplicação dos valores é ${multiplicacao}.\n A divisão dos valores é ${divisao}.\n`);


// Exercício 3
console.log("Exercício 3:");
let cidade = "Itapevi";
let estado = "São Paulo";
let anoAtual = 2025;
console.log("Moro em " + cidade + " - " + estado + ". Ano da declaração: " + anoAtual + ".\n");
// Interpolação de strings (template literals)
console.log(`Moro em ${cidade} - ${estado}. Ano da declaração: ${anoAtual}.\n`);


// Exercício 6
console.log("Exercício 6:");
let var1 = 25;
let var2 = "25";
// O operador == compara apenas o valor, enquanto o === compara valor e tipo da variável. Portanto, == retrorna true e === retorna false.
console.log(var1 == var2); 
console.log(var1 === var2); 
console.log("\n");


// Exercício 7
console.log("Exercício 7:");
let diaSemana = 5;
switch (diaSemana) {
    case 1:
        console.log(`O número ${diaSemana} corresponde a Segunda-feira.`);
        break;
    case 2:
        console.log(`O número ${diaSemana} corresponde a Terça-feira.`);
        break;
    case 3:
        console.log(`O número ${diaSemana} corresponde a Quarta-feira.`);
        break;
    case 4:
        console.log(`O número ${diaSemana} corresponde a Quinta-feira.`);
        break;
    case 5:
        console.log(`O número ${diaSemana} corresponde a Sexta-feira.`);
        break;
    case 6:
        console.log(`O número ${diaSemana} corresponde a Sábado.`);
        break;
    case 7:
        console.log(`O número ${diaSemana} corresponde a Domingo.`);
        break;
    default:
        console.log("Número inválido! Insira um número entre 1 e 7.");  
        break;
}


// Exercício 8
console.log("\nExercício 8:");
let contador = 10;
while (contador > 4) {
    console.log(`Contador: ${contador}`);
    contador = contador - 1;
}


// Exercício 9
console.log("\nExercício 9:");
for (parImpar = 1; parImpar <= 20; parImpar++) {
    if (parImpar % 2 == 1) {
        console.log(`${parImpar} é impar.`);
    } else {
        console.log(`${parImpar} é par.`);
    }
}


// Exercício 10
console.log("\nExercício 10:");
