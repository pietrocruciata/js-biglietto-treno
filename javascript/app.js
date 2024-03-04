/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
oppure applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.*/


//RICHIESTA KM 
let km = parseFloat(prompt('scrivi i km da percorrere')); //number
console.log('km da percorrere :' ,km);

//RICHIESTA ETà
let età = parseFloat(prompt('scrivi la tua età')); //number
console.log('età del passeggero :' ,età);


//TROVARE IL PREZZO DEL BIGLIETTO
let prezzo = parseFloat(km * 0.21).toFixed(2); //number
if(età >=18 || età <65){
    console.log('prezzo pieno del biglietto:' ,prezzo)
}


//APPLICARE UNO SCONTO PER I MINORENNI
let prezzoMino = parseFloat(prezzo * 0.2).toFixed(2); //number
if(età <18){
    console.log('biglietto scontato del 20%:' ,prezzo - prezzoMino);
}

//APPLICARE UNO SCONTO PER GLI OVER 65
let prezzoOver = parseFloat(prezzo * 0.4).toFixed(2); //number
if(età >=65){
    console.log('biglietto scontato del 40%:' ,prezzo - prezzoOver);
}