/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numOfVowelsInWord(str) {
  return Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;
};

const numOfVowelsInWordArrow = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    
    for (let v = 0; v < vowels.length; v++) {
    
      if (str[i] === vowels[v]) vowelsCount++;
    
    };
  
  };

  return vowelsCount;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(numOfVowelsInWord(word));

console.log(numOfVowelsInWordArrow(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)