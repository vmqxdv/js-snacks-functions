/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function getStringThatStartsWith(arr, str) {
  return arr.filter(i => i.startsWith(str));
};

const getStringThatStartsWithArrow = (arr, str) => {
  return arr.filter(i => i.startsWith(str));
};

// Invoca la funzione qui e stampa il risultato in console
console.log(getStringThatStartsWith(names, 'A'));

console.log(getStringThatStartsWithArrow(names, 'A'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]