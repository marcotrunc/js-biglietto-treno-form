/*Il programma dovrà mostrare una form da compilare con cui chiedere
all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
 secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina 
(formattato con massimo due decimali, per indicare centesimi sul prezzo).*/
// ** Richiamo gli elementi button
const generateElement = document.getElementById('generate');
const deleteElement = document.getElementById('delete');
// ** Richiamare Elementi in pagina (km da percorrere, fascia d'età, cost-ticket)
let kmElement = document.querySelector('#km');
let ageElement = document.querySelector('#age option');
let costTicket = document.getElementById('cost-ticket'); 
// ** Quando premo su Genera Acquisisco i valori
generateElement.addEventListener('click', function(){
    kmElement = kmElement.value;
    ageElement = ageElement.value
});
console.log(kmElement);
console.log(ageElement);