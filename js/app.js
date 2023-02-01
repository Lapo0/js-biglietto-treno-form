// NOME E COGNOME
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
console.log(firstName, lastName)

const formBtnElement = document.querySelector('.container input[type="button"]')

formBtnElement.addEventListener('click', function () {
	console.log('applica modifiche al box')

// CHILOMETRI DA PERCORRERE
const distanza = document.querySelector('.container .distanza')
console.log(distanza)


// PREZZO BASE BIGLIETTO
const PREZZO_PER_KM = 0.21
const prezzoBase = PREZZO_PER_KM * distanza.value

console.log(prezzoBase)

let sconto = 0

const selectEtaElement = document.querySelector('.container select[name="eta"]')
console.log(selectEtaElement)

let eta = selectEtaElement.value

const prezzoFinale = prezzoBase - sconto

    switch (eta) {
        case 'minorenne':
            prezzoFinale = prezzoBase * 0.2
            break
        case 'maggiorenne':
            sconto = prezzoBase
            break
        case 'over65':
            sconto = prezzoBase * 0.4
            break
    }

    console.log(prezzoFinale)

})