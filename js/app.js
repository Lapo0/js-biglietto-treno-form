// NOME E COGNOME
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')


// CHILOMETRI DA PERCORRERE
const distanza = document.querySelector('.container .distanza')

// AL CLICK DEL MOUSE
const formBtnElement = document.querySelector('.container input[type="button"]')

formBtnElement.addEventListener('click', function () {
console.log('applica modifiche al box')

// Nome e Cognome
console.log(firstName.value);
console.log(lastName.value);

const nomeUtenteElement = document.querySelector('.nome-utente');
nomeUtenteElement.textContent = firstName.value;

const cognomeUtenteElement = document.querySelector('.cognome-utente');
cognomeUtenteElement.textContent = lastName.value;

// Km
console.log(distanza.value);

const chilometriElement = document.querySelector('.chilometri-utente');
chilometriElement.textContent = distanza.value;


// PREZZO BASE BIGLIETTO
const PREZZO_PER_KM = 0.21
const prezzoBase = PREZZO_PER_KM * distanza.value

console.log(prezzoBase.toFixed(2))

let sconto = 0

const selectEtaElement = document.querySelector('.container select[name="eta"]')
console.log(selectEtaElement)

let eta = selectEtaElement.value

let prezzoFinale = prezzoBase

    switch (eta) {
        case 'minorenne':
            prezzoFinale = prezzoBase * 0.8
            break
        case 'maggiorenne':
            prezzoFinale = prezzoBase
            break
        case 'over65':
            prezzoFinale = prezzoBase * 0.6
            break
    }

    console.log(prezzoFinale.toFixed(2))

    const prezzoFinaleElement = document.querySelector('.prezzo-finale');
    prezzoFinaleElement.textContent = prezzoFinale;


    
    // Mandare a schermo Nome e Cognome
    

})


