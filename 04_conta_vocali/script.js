/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function getVowelsInWord(str) {
  return Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(getVowelsInWord(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)