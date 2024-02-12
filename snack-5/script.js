// Snack 5 (bonus):
// Scrivi una funzione che accetti una stringa come parametro e restituisca la stessa stringa ma con le iniziali delle parole tutte in maiuscolo
// Es: funzioneEsempio("nel mezzo del cammin di nostra vita")  :freccia_destra:  "Nel Mezzo Del Cammin Di Nostra Vita"

function capitalInitials(string){

    // convertiamo la stringa in un array di parole
    const words = string.split(" ");

    //con charAt convertiamo la prima lettera (0) di ogni parola in maiuscolo
    const capitalWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    return capitalWords.join(" ");
}

document.addEventListener("click", function() {

    
    const string = document.getElementById("string").value;
    const capitalString = capitalInitials(string);


    document.getElementById("result").textContent = capitalString;
})