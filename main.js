"use strict";
let n = 2;
//            3 + 2   +6 +1   + 2     = 14
console.log(++n + --n + 6 + --n + ++n);
let a = 18;
//          19  + 18  +6 + 19   -8  + 20   = 74
console.log(++a + --a + 6 + ++a + -8 + ++a);
let b = 24;
//          23  - 8  + 24  - 23  +6  = 68
console.log(--b + -8 + ++b + --b + 6);
//      BMI
let weightInKg = 41;
let heightInMeters = 4.6;
let bmi = weightInKg / (heightInMeters * heightInMeters);
console.log(`Your BMI is ${bmi}`);
