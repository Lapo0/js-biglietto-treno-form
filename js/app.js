// NOME E COGNOME
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
console.log(firstName, lastName)



// CHILOMETRI DA PERCORRERE
const distanza = document.querySelector('.container .distanza')
console.log(distanza)

// AL CLICK DEL MOUSE
const formBtnElement = document.querySelector('.container input[type="button"]')

formBtnElement.addEventListener('click', function () {
console.log('applica modifiche al box')


// PREZZO BASE BIGLIETTO
const PREZZO_PER_KM = 0.21
const prezzoBase = PREZZO_PER_KM * distanza.value

console.log(prezzoBase)

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

    console.log(prezzoFinale)

})

// Mandare a schermo Nome e Cognome

