let numeroEscolhido = prompt("Escolha um número de 1 a 10  (ง ͠° ͟ل͜ ͡°)ง");
for (let counter = 1; counter < (10+1); counter++) {
    let resultado = numeroEscolhido * counter;
    console.log(`${numeroEscolhido} x ${counter} = ${resultado}`);
    let linhaTabuada = `${numeroEscolhido} x ${counter} = ${resultado}<br>`;
    resultadoTabuada.innerHTML += linhaTabuada;
}
numeroEscolhidoTabuada.innerHTML += numeroEscolhido;