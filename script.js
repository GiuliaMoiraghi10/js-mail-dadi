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


let mailUser = prompt("Inserisci la tua mail")
    console.log (mailUser)

const mailList = ["giulia@gmail.com", "marco@gmail.com", "vulpix@gmail.com", "ilaria@gmail.com"]
    console.log (mailList)

if (mailList.includes(mailUser)){
    console.log ("Puoi accedere")
} else {
    console.log ("Non puoi accedere")
}