// NOME E COGNOME
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
console.log(firstName, lastName)

// CHILOMETRI DA PERCORRERE
const distanza = document.querySelector('.container .distanza')
console.log(distanza)

// PREZZO BASE BIGLIETTO
const PREZZO_PER_KM = 0.21

const prezzoBase = PREZZO_PER_KM * distanza
