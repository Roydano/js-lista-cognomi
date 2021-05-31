// Mail
var mail = ['aglio@gmail.com', 'olio@gmail.com', 'peperoncino@gmail.com', 'spaghetti@libero.it'];


// 1-Chiedi all’utente la sua email,
var userMail = prompt('Inserisci la tua mail');


//   2-controlla che sia nella lista di chi può accedere,
var i = 0;
var messaggio = 'Siamo spiacenti, la tua mail non è stata riconosciuta';

while (i < mail.length) {
    i++;
    if(userMail == mail[i]) {
        messaggio = 'La tua mail è stata riconosciuta!'  
    }  
}


//  3-stampa un messaggio appropriato sull’esito del controllo.

console.log(messaggio);







