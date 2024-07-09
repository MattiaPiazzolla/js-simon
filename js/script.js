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
}, 1000)

// DEFINISCO UN'ARRAI DOVE INSERIRE I NUMERI DELL'UTENTE
const userNum = [];
// DEFINISCO IL setTimeout PER IL PROMPT
setTimeout(function(){
    
}, 1100)

console.log(randomNum)