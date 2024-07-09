Esercizio di oggi: Simon Says
nome repo: js-simon
Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Numero push minimi: 7
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.

SCOMPOSIZIONE IN SOTTOPROBLEMI
>Definisco un array vuoto dove andro a pushare i numeri generati 
>Definisco una funzione che genera 5 numeri in maniera randomica 
    >>Attreverso l'utilizzo del ciclo while genero 5 numeri 
        >>>Utilizzando la condizione if, verifico che il numero non sia gia presente nel'array 
            >>>>Pusho il numero nell'array
>Gestisco l'output dei numeri
>Utilizzando setTimerOut, faccio sparire i numeri generati randomicamente dopo 30 secondi 
>Sempre attraverso la funzione setTimer out, dopo 30 secondi, faccio apparire un prompt che chiede l'inserimento fino a quando il numero di numeri inseriti non è uguale a 5 
    >>Creo un'altro array vuoto dove andrò a pushare i numeri inseriti dall'utente 
        >>>Utilizzando un ciclo for, comparo i numeri inseriti dall'utente con quelli generati randomicamente 
>Gestisco l'output che rivela quanti numeri sono stati indovinati/ricordati 