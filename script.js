console.log("js-mail-dadi")

// 1. Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

//  1. Chiedere all'utente mail
//      - SE mail è presente nell'elenco (array)
//          - può accedere
//              - stampa messaggio "Puoi accedere"
//      - ALTRIMENTI
//              - stampa messaggio "Non puoi accedere"


let mailUser = prompt("Inserisci la tua mail") //string

const mailList = ["giulia@gmail.com", "marco@gmail.com", "vulpix@gmail.com", "ilaria@gmail.com"] //string
    console.log (mailList)

if (mailList.includes(mailUser)){
    console.log ("Puoi accedere")
} else {
    console.log ("Non puoi accedere")
}



// 2. Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//  1. Generare numero random da 1 a 6 (Giocatore 1)
//      - creare variabile player1 -> ciclo for -> Math.random ()*6
//      
//  2. Generare numero random da 1 a 6 (Giocatore 2/computer)
//      - creare variabile player2 -> ciclo for -> Math.random ()*6
//
//  3. Vince punteggio più alto
//      - SE player1 > player2
//          - player1 Vince "Hai vinto"
//      - ALTRIMENTI SE player2 > player1
//          - player2 Vince "Hai vinto"
//      - ALTRIMENTI player2 = player1
//          - parità "Hai pareggiato"