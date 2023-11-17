let name = prompt('Inserisci il tuo nome')
console.log(name)
let surname = prompt('Inserisci il tuo cognome')
console.log(surname)
let favcolor = prompt('Inserisci il tuo colore preferito')
console.log(favcolor)
let year = 23
console.log(year)
document.getElementById('pwdgen').innerHTML = (`${name}${surname}${favcolor}${year}`)
