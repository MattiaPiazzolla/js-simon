// DEFINISCO LA FUNZIONE PER GENERARE 5 NUMERI CASUALI 
function generateRandomNum (){
    // DEFINISCO UN'ARRAY VUOTA, DOVE ANDRÒ A PUSHARE 
    const randomNum = [];
    // DEDINISCO UN CICLO WHILE PER GENERARE 5 NUMERI 
    while (randomNum.length < 5){
        // TRAMITE I COMANTI MATH DEFINISCO LA CREAZIONE DI UN NUMERO ENTRO UN DETERMINATO RANGE DI NUMERI (IN QUESTO CASO DA 1 A 100)
        let num = Math.floor(Math.random() * 100 + 1);
        // DEFINISCO LE CONDIZIONI PER VERIFICARE CHE I NUMERI NON SI RIPETANO ALL'INTERNO DELL'ARRAY
        if (!randomNum.incluedes(num)){
            
        }
    }
}