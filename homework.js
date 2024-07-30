
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

const tekstas1=['jonas','petras','virgis'];
const tekstas2=['varle','zuikis','vilkas'];
const tekstas3=['agurkas','svogunas','morka'];
console.log(tekstas1);
console.log(tekstas2);
console.log(tekstas3);
console.log("-------------");

/*
Veiksmai su kintamaisiais

Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
*/

let marks1Sum = 0;
let mark1index= 0; 
marks1Sum += marks1[mark1index++];
marks1Sum += marks1[mark1index++];
marks1Sum += marks1[mark1index++];
marks1Sum += marks1[mark1index++];
marks1Sum += marks1[mark1index++];

let marks2Sum = 0;
let mark2index= 0; 
marks2Sum += marks2[mark2index++];
marks2Sum += marks2[mark2index++];
marks2Sum += marks2[mark2index++];
marks2Sum += marks2[mark2index++];
marks2Sum += marks2[mark2index++];

let marks3Sum = 0;
let mark3index= 0; 
marks3Sum += marks3[mark3index++];
marks3Sum += marks3[mark3index++];
marks3Sum += marks3[mark3index++];
marks3Sum += marks3[mark3index++];
marks3Sum += marks3[mark3index++];

console.log(marks1Sum + marks2Sum + marks3Sum);


/* Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console



Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/