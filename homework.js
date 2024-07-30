
/*
Kintamųjų inicijavimas

Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/
const mark1 = 1;
const mark2 = -11;
const mark3 = 5.25;
console.log(mark1);
console.log(mark2);
console.log(mark3);
console.log("-----------");

const name1 = "vardas";
const name2 = "pavarde";
const name3 = "nikas";
console.log(name1);
console.log(name2);
console.log(name3);
console.log("-------------");

const marks1 = [1,5,14,17,23];
const marks2 = [-1,4,17,87,-23];
const marks3 = [12,15,34,47,33];
console.log(marks1);
console.log(marks2);
console.log(marks3);
console.log("-------------");

const tekstas1=['jonas','petras','virgis','markas','antanas'];
const tekstas2=['varle','zuikis','vilkas','karve','kibiras'];
const tekstas3=['agurkas','svogunas','morka','bulve','agrastas'];
console.log(tekstas1);
console.log(tekstas2);
console.log(tekstas3);
console.log("-------------");

/*
Veiksmai su kintamaisiais

Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
*/

const markSum = [...marks1, ...marks2, ...marks3].reduce((sum, mark) => sum + mark, 0);
console.log(markSum);


/* Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console */


const tekstasVisi = [...tekstas1, ...tekstas2, ...tekstas3].join(' ');
console.log(tekstasVisi);
/* Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
*/
marks1value = marks1[0]-marks1[1]+marks1[2]-marks1[3]+marks1[4];
console.log(marks1value);

marks2value = marks2[0]-marks2[1]+marks2[2]-marks2[3]+marks2[4];
console.log(marks2value)

marks3value = marks3[0]-marks3[1]+marks3[2]-marks3[3]+marks3[4];
console.log(marks3value);
/*
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/
const tekstasVisas = [...tekstas1, ...tekstas2, ...tekstas3].join(', ');
console.log(tekstasVisas);

/*Kintamųjų palyginimas
Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

Tarpusavyje palyginti skaičiaus tipo kintamuosius:
*/
const metai = 7;
const menuo = 3;

// kuris didesnis

if (metai > menuo){
    console.log('Pomidoras');
}else{
    console.log('Bandykite dar karta.');
}

// kuris mažesnis
if (metai < menuo){
    console.log('Pomidoras');
}else{
    console.log('Bandykite dar karta.');
}
// ar jie lygūs
if (metai === menuo){
    console.log('Pomidoras');
}else{
    console.log('Bandykite dar karta.')};

    // ar jie nelygūs
    if (metai === menuo){
        console.log('Bandykite dar karta.');
    }else{
        console.log('Pomidoras')};
 // kuris didesnis arba lygus
 if (metai >= menuo){
    console.log('Pomidoras');
}else{
    console.log('Bandykite dar karta.')};
    // kuris mažesnis arba lygus
    if (metai <= menuo){
        console.log('Pomidoras');
    }else{
        console.log('Bandykite dar karta.')};

// Išvesti teksto tipo kintamųjų ilgius


const text1 = 'pavadinimas';
const text2 = 'vardas';
// Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
// kuris didesnis

if (text1 .length > text2 .length ) {
    console.log("pomodoras");
}else{ console.log('Bandykite dar karta.');}

// kuris mažesnis
if (text1 .length < text2 .length ) {
    console.log("pomodoras");
}else{ console.log('Bandykite dar karta.');}
// ar jie lygūs
if (text1 .length === text2 .length ) {
    console.log("pomodoras");
}else{ console.log('Bandykite dar karta.');}

// ar jie nelygūs
if (text1 .length === text2 .length ) {
    console.log('Bandykite dar karta.');
}else{ console.log('pomodoras');}
// kuris didesnis arba lygus
if (text1 .length >= text2 .length ) {
    console.log("pomodoras");
}else{ console.log('Bandykite dar karta.');}
// kuris mažesnis arba lygus
if (text1 .length <= text2 .length ) {
    console.log("pomodoras");
}else{ console.log('Bandykite dar karta.');}



/*
Išvesti sąrašo tipo kintamųjų ilgius
*/

const tekstas1ilgis = [tekstas1[0].length + tekstas1[1].length + tekstas1[2].length + tekstas1[3].length + tekstas1[4].length];
const tekstas2ilgis = [tekstas2[0].length + tekstas2[1].length + tekstas2[2].length + tekstas2[3].length + tekstas2[4].length];
const tekstas3ilgis = [tekstas3[0].length + tekstas3[1].length + tekstas3[2].length + tekstas3[3].length + tekstas3[4].length];

console.log(tekstas1ilgis);
console.log(tekstas2ilgis);
console.log(tekstas3ilgis);
/*
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus

*/