let somma = 0;

for (let i = 1; i <= 10; i++) {
  let numero = Number(prompt("Inserisci il numero "));
  somma = somma + numero;
}

console.log("La somma dei numeri inseriti è: " + somma);