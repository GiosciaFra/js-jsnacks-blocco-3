// Snack 1:
// Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")


function reverseString(string) {
    let resultString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        resultString += string[i];
    }

    return resultString;
}

document.addEventListener ("click", function(){
    const insertWord = document.getElementById("user-input").value;
    
    const wordTurn = reverseString(insertWord);

    document.getElementById("result").textContent = wordTurn;
})