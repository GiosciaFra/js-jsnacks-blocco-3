// Snack 3:
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// Es: abbiamo un array così: arrayNumeri = [0, 1, 2, 3, 4, 5, 6]
// La nostra funzione viene dichiarata ad esempio così function tagliaArray(array, posizioneMin, posizioneMax)
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “posizioneMin” e “posizioneMax”
// Nel nostro caso, se la chiamassimo così tagliaArray(arrayNumeri, 2, 4) ci restituirebbe un array così composto: [2, 3, 4]
 

const numbersArray =['0', '1', '2', '3', '4', '5', '6'];

const trimmedArray = cutArray (numbersArray, 2, 4);

function cutArray (array, positionMin, positionMax){


    // controllo la validità delle posizioni
    if(positionMin < 0 || positionMin > array.length - 1){
        alert ('Posizione minima non valida');
    } if(positionMax < 0 || positionMax > array.length - 1 ){
        alert ('Posizione massima non valida');
    } if (positionMin > positionMax) {
        alert ("la posizione minima dev'essere minore o uguale alla posizione massima");
    }

    //creo un nuovo array vuoto

    const trimmedArray = [];


    // con il for aggiungo all'array tagliato i valori tra positionMin e PositionMax
    for (let i = positionMin; i <= positionMax; i++) {
        trimmedArray.push(array[i]);
    }

    return trimmedArray;
}

// console.log(trimmedArray);

document.addEventListener("click", function () {
    
    
    // recuperiamo dall'utente l'array e le posizioni
    const arrayString = document.getElementById("array").value;
    
    const posMinString = document.getElementById("positionMin").value;
    
    const posMaxString = document.getElementById("positionMax").value;
    
    //convertiamo le stringhe in array e numeri
    
    const array = arrayString.split(",").map(Number);
    const positionMin = parseInt(posMinString);
    const positionMax = parseInt(posMaxString);
    
    //taglio array
    const trimmedArray = cutArray(array, positionMin, positionMax);
    
    
    
    document.getElementById("result").innerHTML = "Il tuo array tagliato è " + trimmedArray;
})