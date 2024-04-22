"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function subjectMarks(name, mathM, englishM, scienceM, economicsM, accountsM) {
    let obtainedmarks = mathM + englishM + scienceM + economicsM + accountsM;
    let result = obtainedmarks * 100;
    let totalM = 500;
    return result / totalM;
}
let studentPer = subjectMarks("Misha", 35, 55, 35, 55, 45);
console.log('\n\t"StudentPer"', studentPer);
let percen = studentPer;
if (percen >= 90 && percen <= 100) {
    console.log("\tCongrajulations your grade is : 'A+'");
}
else if (percen >= 70 && percen <= 89) {
    console.log("\tyour grade is : 'B'");
}
else if (percen >= 60 && percen <= 69) {
    console.log("\tyour grade is : 'C'");
}
else if (percen >= 50 && percen <= 59) {
    console.log("\tYour grade is : 'D'");
}
else if (percen <= 49) {
    console.log('\t"you are fail"');
}
else {
    ("\tInvalid number");
}
