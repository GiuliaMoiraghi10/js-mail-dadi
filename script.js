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

let found = false

for (let i = 0; i < mailList.length; i++){
    const currentMail = mailList[i]
    // console.log (currentMail, mailUser)
    console.log (currentMail === mailUser)

    if (currentMail === mailUser){
        found = true
    }
}

if (found){
    console.log ("Hai accesso alla pagina")
} else {
    console.log ("Accesso negato")
}

// if (mailList.includes(mailUser)){
//     console.log ("Puoi accedere")
// } else {
//     console.log ("Non puoi accedere")
// }



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
//      - ALTRIMENTI SE player2 = player1
//          - parità "Hai pareggiato"
//      - ALTRIMENTI 
//          - "Hai perso"


const player1 = []

for (let i = 0; i < 6; i++){
    const num = Math.random()
    // console.log (num)
    const player1 = Math.floor(Math.random() * 6) + 1
    console.log (player1)
}

const player2 = []

for (let i = 0; i < 6; i++){
    const num = Math.random()
    // console.log (num)
    const player1 = Math.floor(Math.random() * 6) + 1
    console.log (player1)
}

if (player1 > player2){
    console.log ("Hai vinto!")
} else if (player2 == player1){
    console.log ("Pareggio")
} else {
    console.log ("Hai perso")
}