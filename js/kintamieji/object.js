/*
N.D.

Reikalingas sarasas prekiu.
Kiekviena preke yra aprasoma pavadinimu, kaina uz vieneta ir norimu pirkti kiekiu.

Reikia isspausdinti:

A) SABLONAS:
Prekiu krepselyje yra COUNT prekiu.

B) SABLONAS:
Prekiu krepselis
----------------
1) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS
2) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS
...
N) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS

C) SABLONAS:
Prekiu krepselio verte yra TOTAL KAINA Eur.
*/

const items = [
    {
        title:'duona',
        price: 1,
        units: 1,
    },
    {
        title:'sviestas',
        price: 2.2,
        units: 2,
    },
    {
        title:'pienas',
        price: 0.5,
        units: 3,
    },
    {
        title:'tortas',
        price: 20,
        units: 5,
    },
    {
        title:'piestukas',
        price: 1.4,
        units: 14,
    },
    {
        title:'agurkas',
        price: 0.8,
        units: 9,
    },
]
const items1 = items[0];
const line1 = items1.title + ' ' + items1.price +
' Eur ' + '(kaina uz vnt) ' + 'Kiekis - ' + items1.units;

const items2 = items[1];
const line2 = items2.title + ' ' + items2.price +
' Eur ' + '(kaina uz vnt) ' + 'Kiekis - ' + items2.units;

const items3 = items[2];
const line3 = items3.title + ' ' + items3.price +
' Eur ' + '(kaina uz vnt) ' + 'Kiekis - ' + items3.units;

const items4 = items[3];
const line4 = items4.title + ' ' + items4.price +
' Eur ' + '(kaina uz vnt) ' + 'Kiekis - ' + items4.units;

const items5 = items[4];
const line5 = items5.title + ' ' + items5.price +
' Eur ' + '(kaina uz vnt) ' + 'Kiekis - ' + items5.units;

let count=items1.units + items2.units + items3.units + items4.units
+ items5.units 
let totalPrice=items1.price * items1.units +
items2.price * items2.units +
items3.price * items3.units +
items4.price * items4.units +
items5.price * items5.units 

console.log('Prekiu krepselyje yra ' + count + ' vnt prekiu');
console.log('---------------------------------');
console.log(line1);
console.log(line2);
console.log(line3);
console.log(line4);
console.log(line5);
console.log('Prekiu krepselio verte yra ' + totalPrice + ' Eur');