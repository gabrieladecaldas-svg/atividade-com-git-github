// Declaração de variaveis e entrada de dados 
let idade = Number(prompt("insira sua idade:"));
let estudante = prompt("É estudante?( sim ou não)");
let professor = prompt("É professor?( sim ou não)")
//Condição com OU
if(idade >= 60 || estudante === "sim" || professor === "sim"){
  alert("Tem direito ao desconto");
} else {
alert("Não tem desconto");
}