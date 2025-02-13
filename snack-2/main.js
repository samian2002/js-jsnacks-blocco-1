let primaStringa = prompt("Inserisci un testo");
let secondaStringa = prompt("Inserisci un altro testo");

if (primaStringa.length === secondaStringa.length) {
    console.log("La lunghezza è uguale.");
} else if (primaStringa.length < secondaStringa.length) {
    console.log("La parola più corta è: " + primaStringa);
    console.log("La parola più lunga è: " + secondaStringa);
} else {
    console.log("La parola più corta è: " + secondaStringa);
    console.log("La parola più lunga è: " + primaStringa);
}