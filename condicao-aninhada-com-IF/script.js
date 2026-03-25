let renda = Number(prompt("digite sua renda:"));
// ! simbolo de negação 
// is NaN: is not number (verifica se NÃO é um numero)
if(!isNaN(renda)){
  if (renda >= 3000) {
  let nomelimpo = prompt("Nome limpo? (sim ou não)");
  if (nomeLimpo === "sim") { 
    alert("Financiamento aprovado");
  } else {
      alert("Nome negativado");
  }
} else {
    alert("Renda insuficiente");
  }

  }
