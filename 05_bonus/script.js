/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greetingBasedOnHour(str) {
  const now = new Date();
  const hour = now.getHours();

  return hour <= 13 ? `Buongiorno ${str}` : hour <= 17 ? `Buon pomeriggio ${str}` : `Buonasera ${str}` 
};

// Invoca la funzione qui e stampa il risultato in console
console.log(greetingBasedOnHour(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.