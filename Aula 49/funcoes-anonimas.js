function somar(a, b) {
  return a + b;
}

let operacao = somar;

console.log(operacao(4, 5));

//const subtrair = function (a, b) {
/// const subtrair = function subtracao (a, b){
//return a - b;
//};

//console.log(subtrair(36, 13));

operacao = function (a, b) {
  return a - b;
};

console.log(operacao(4, 5));

// Funções anônimas só podem ser chamadas após a atribuição da variável,
// elas não são jogadas para o topo do arquivo como funções normais
olaMundo();

function olaMundo() {
  console.log("Olá, mundo!");
}

const oiMundo = function () {
  console.log("Oi, mundo!");
};
oiMundo();
