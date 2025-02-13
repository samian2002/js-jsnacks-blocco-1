let dispari = []
for (let i = 0; i < 6; i++) {
    let numero = Number(prompt('Inserisci un numero'))
    if (numero % 2 !== 0) 
        dispari.push(numero)
}

console.log('I numeri dispari sono: ', dispari)
