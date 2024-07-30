"use strict"
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
        price: 2,
        units: 2,
    },
    {
        title:'pienas',
        price: 5,
        units: 3,
    },
    {
        title:'tortas',
        price: 20,
        units: 5,
    },
    {
        title:'piestukas',
        price: 1,
        units: 14,
    },
 
]
const item1 = items[0];
const line1 = item1.title + ' ' + item1.price +
' Eur ' + '(kaina uz vnt) ' + 'Kiekis - ' + item1.units;

const item2 = items[1];
const line2 = item2.title + ' ' + item2.price +
' Eur ' + '(kaina uz vnt) ' + 'Kiekis - ' + item2.units;

const item3 = items[2];
const line3 = item3.title + ' ' + item3.price +
' Eur ' + '(kaina uz vnt) ' + 'Kiekis - ' + item3.units;

const item4 = items[3];
const line4 = item4.title + ' ' + item4.price +
' Eur ' + '(kaina uz vnt) ' + 'Kiekis - ' + item4.units;

const item5 = items[4];
const line5 = item5.title + ' ' + item5.price +
' Eur ' + '(kaina uz vnt) ' + 'Kiekis - ' + item5.units;

let count=item1.units + item2.units + item3.units + item4.units
+ item5.units; 

let totalPrice= item1.price * item1.units +
item2.price * item2.units +
item3.price * item3.units +
item4.price * item4.units +
item5.price * item5.units;

console.log('Prekiu krepselyje yra ' + count + ' vnt prekiu');
console.log('---------------------------------');
console.log(line1);
console.log(line2);
console.log(line3);
console.log(line4);
console.log(line5);
console.log('Prekiu krepselio verte yra ' + totalPrice + ' Eur');






