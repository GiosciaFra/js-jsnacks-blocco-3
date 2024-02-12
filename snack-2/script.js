// Snack 2:
// Scrivi una funzione che fonda due array presi come parametri 
// (date per scontato che abbiano lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


const firstArray = ["1","2","3"];
const secondArray = ["a","b","c"];
const toggleArrays = mergedArrays(firstArray, secondArray);

function mergedArrays(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        alert ('Gli array devono avere la stessa lunghezza')
    }
    
    const toggleArrays = [];
    for (let i = 0; i < firstArray.length; i++){
        toggleArrays.push(firstArray[i]);
        toggleArrays.push(secondArray[i]);
    }
    return toggleArrays;
}


console.log(toggleArrays);
