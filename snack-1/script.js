// Snack 1:
// Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")


const string = "Ciao";

const turnedString = reverseString(string);

function reverseString(string) {
    let resultString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        resultString += string[i];
    }

    return resultString;
}

console.log(turnedString);