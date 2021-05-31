// Lista Cognomi:
var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

// chiedi all’utente il cognome
var userCognome = prompt('Inserisci il tuo cognome');
console.log(userCognome);

// Bonus: (da fare solo dopo aver concluso tutto) Trovate un modo per trasformare in maiuscolo la prima lettera del cognome inserito dall'utente e tutto il resto in minuscolo.

var userCognomeCapitalized = userCognome.charAt(0).toUpperCase() + userCognome.slice(1);

console.log(userCognomeCapitalized);

// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

cognomi.push(userCognomeCapitalized);

console.log(cognomi);

// stampa la lista ordinata alfabeticamente

cognomi.sort()

console.log(cognomi);


// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

for (var i = 0; i < cognomi.length; i++){
    if( cognomi[i] == userCognomeCapitalized){
        console.log('Il tuo cognome è alla posizione numero', i + 1);
    }
}
