let somma = 0;

for (let i = 0; i < 10; i++) {
  let numero = Number(prompt("Inserisci il numero "));
  somma += numero;
}

console.log("La somma dei numeri inseriti è: " + somma);