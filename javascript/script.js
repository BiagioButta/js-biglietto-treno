// quanti km desidera percorrere
// quanti anni ha
// calcolare il prezzo ( km * 0.21)
// applicare sconto 20% per under 18 e 40% per over 65


const costKm = 0.21;
console.log(costKm);

let quantiKm = parseInt(prompt('Quanti Km desideri percorrere?'));
console.log(quantiKm);

document.getElementById('quantiKm').innerHTML = quantiKm;

let anni = parseInt(prompt('Quanti anni hai ?'));
console.log(anni);

document.getElementById('anni').innerHTML = anni;

isNaN(quantiKm);
isNaN(anni);


if(anni <= 18){
    prezzo = (quantiKm * costKm) - (quantiKm * costKm * 0.2);
} else if(anni >= 65){
    prezzo = (quantiKm * costKm) - (quantiKm * costKm * 0.4);
} else if(isNaN(quantiKm) || isNaN(anni)) {
    alert('dati errati');
} else {
    prezzo = (quantiKm * costKm);
}

document.getElementById('prezzo').innerHTML = prezzo;

console.log(prezzo.toFixed(2));

