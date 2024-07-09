// RECUPERO IL PULSANTE START
const start = document.getElementById('startBtn');
// RECUPERO IL PULSANTE RESET
const reset = document.getElementById('resetBtn');

// DEFINISCO UN'ARRAY VUOTA, DOVE ANDRÒ A PUSHARE 
const randomNum = [];
// DEFINISCO LA FUNZIONE PER GENERARE 5 NUMERI CASUALI 
function generateRandomNum (){
    // DEDINISCO UN CICLO WHILE PER GENERARE 5 NUMERI 
    while (randomNum.length < 5){
        // TRAMITE I COMANTI MATH DEFINISCO LA CREAZIONE DI UN NUMERO ENTRO UN DETERMINATO RANGE DI NUMERI (IN QUESTO CASO DA 1 A 100)
        let num = Math.floor(Math.random() * 100 + 1);
        // DEFINISCO LE CONDIZIONI PER VERIFICARE CHE I NUMERI NON SI RIPETANO ALL'INTERNO DELL'ARRAY
        if (!randomNum.includes(num)){
            // IN CASO LE CONDIZIONI SI VERIFICHINO, INSERISCO IL NUMERO NELL'ARRAY CON UN PUSH
            randomNum.push(num);
        }
    }
    
}

start.addEventListener('click', function(){
    // DEFINISCO L'OUTPUT DEI NUMERI CHIAMANDO LA FUNZIONE
    generateRandomNum();
    
    // RECUPERO LA DESTINAZIONE DELL'OUTPUT
    const numbersOutput = document.getElementById('numbersOutput')
    // DEFINISCO UN CICLO FOR PER CICLARE E RECUPERARE TUTTI GLI ELEMENTI DELL'ARRAY 
    for(let i = 0; i < randomNum.length; i++){
        // CREO L'ELEMENTO DOVE INSERIRO IL NUMERO 
        let p = document.createElement('p');
        // INSERISCO IL CONTENUTO NELL'ELEMENTO CREATO
        p.innerText = randomNum[i];
        // APPENDO L'ELEMENTO NELLA DESTINAZIONE
        numbersOutput.append(p);
    }
    
    // DEFINISCO IL setTimeout
    setTimeout(function(){
        // AGGIUNGO UNA CLASSE PER NASCONDERE I NUMERI AL TERMINE DEL TIMER
        numbersOutput.classList.add('invisible')
    }, 30000)
    
    // DEFINISCO UN'ARRAI DOVE INSERIRE I NUMERI DELL'UTENTE
    const userNum = [];
    
    // DEFINISCO IL setTimeout PER IL PROMPT
    setTimeout(function(){
            // AGGIUNGO UN CICLO WHILE PER FAR COMPARIRE UN FOR PER ACCETTARE PROMPT CON I NUMERI INSERITI DALL'UTENTE
            while (userNum.length < 5){
                // DEFINISCO UNA VARIABILE PER IN NUMERI INSERITI DALL'UTENTE
                let numAdd = parseInt(prompt('Inserisci uno dei numeri che hai appena visto'));
                // DEFINISCO LE CONDIZIONI PER VERIFICARE CHE I NUMERI NON SI RIPETANO ALL'INTERNO DELL'ARRAI
                if(!userNum.includes(numAdd) && (!isNaN(numAdd))){
                    userNum.push(numAdd)
                } else {
                    alert('Assicurati di inserire un numero e che il numero non sia già stato inserito')
                }
                
            }
            // DICHIARO UNA VARIABILE PER I NUMERI INDOVINATI
            let guessedNumber = 0;
            // CICLO FOR PER COMPARARE I NUMERI 
            for (let i = 0; i < userNum.length; i++) {
                // CONDIZIONI CHE VERIFICANO SE IL VALORE userNum in posizione i È INCLUSO NELL'ARRAY randomNum
                if (randomNum.includes(userNum[i])) {
                    // AUMENTO IL PUNTEGGIO DEI NUMERI INDOVINATI
                    guessedNumber++;
                }
            }
    
            // RECUPERO LA DESTINAZIONE DELL'OUTPUT DEI RISULTATI
            const resultsOutput = document.getElementById('resultsOutput');
            // GESTISCO L'OUTPUT DEI RISULTATI
            resultsOutput.innerText = `Hai indovinato ${guessedNumber} numeri!`;
        }, 30200)
})
    
// PROBLEMI:
// come posso evitare di inserire l'array dei numeri random, in posizione globale? 
