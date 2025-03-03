/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numOfVowelsInWord(str) {
  return Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;
};

const numOfVowelsInWordArrow = (str) => {
  return Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(numOfVowelsInWord(word));

console.log(numOfVowelsInWordArrow(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)