// Snack 4 (bonus):
// Scrivi una funzione  che accetti una stringa come parametro e restituisca la stringa con i caratteri ordinati alfabeticamente
// Es: riordina("webmaster") :freccia_destra: "abeemrstw"


function sortString(string){

    
    // convertiamo la stringa in un array di caratteri
    
    const characters = string.split("");
    
    // ordiniamo l'array di caratteri
    characters.sort();   
    

    // restituiamo la stringa ordinata

    return characters.join("");
    
}

// const string = "webdevelop";

// const sortedString = sortString(string);

// console.log(sortedString);


document.addEventListener("click", function(){
    const string = document.getElementById("string").value;

    const sortedString = sortString(string);

    document.getElementById("result").textContent = sortedString;
})