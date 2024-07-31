// Funkcija pavadinimu “tusciaFunkcija”:
function emptyFunction() {
    return ;
}
console.log(emptyFunction);

// Funkcija pavadinimu “daugyba”:

function daugyba(a, b) {
    return c = a * b;
}
let a= 3;
let b= 2;

console.log(daugyba(a, b));
console.log(daugyba(c, b));
console.log(daugyba(a, c));
console.log('---------------');

// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:

function skaitmenuKiekisSkaiciuje(skaicius)  {
    if (typeof skaicius !== 'number' || isNaN(skaicius)) {
        return 'Pateikta netinkamo tipo reikšmė';
    }else{
        return Math.abs(skaicius).toString().length;
        
    }
}
    
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(885));
console.log(skaitmenuKiekisSkaiciuje(37060548525));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));
console.log('------------------------');
// 2 variantas
function skaitmenuKiekisSkaiciuj(numeriai) {
    return (typeof numeriai !== 'number' || isNaN(numeriai)) ? 'Pateikta netinkamo tipo reikšmė': Math.abs(numeriai).toString().length;

    
}
console.log(skaitmenuKiekisSkaiciuj(5));
console.log(skaitmenuKiekisSkaiciuj(885));
console.log(skaitmenuKiekisSkaiciuj(37060548525));
console.log(skaitmenuKiekisSkaiciuj(true));
console.log(skaitmenuKiekisSkaiciuj('asd'));
console.log(skaitmenuKiekisSkaiciuj(NaN));

