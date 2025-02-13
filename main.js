let primaSringa = prompt("Inserisci un testo");
let secondaStringa = prompt("Inserisci un altro testo");

if (primaSringa.length <= secondaStringa.length) {
    console.log('la parola più corta è: ' + primaSringa);
    console.log('la parola più lunga è: ' + secondaStringa);
}
else {
    console.log('la parola più corta è: ' + secondaStringa);
    console.log('la parola più lunga è: ' + primaSringa);
}