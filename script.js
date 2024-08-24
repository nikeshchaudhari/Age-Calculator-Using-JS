function calc(){
    let years;
    let Months;
    let Days;
let currentDay = parseInt(cd.value.slice(8,10),10);
let currentMonths = parseInt(cd.value.slice(5,7),10);
let currentYear = parseInt(cd.value.slice(0,4),10);

console.log('currentDate :- ' ,currentYear,currentMonths,currentDay);
let birthDay = parseInt(dob.value.slice(8,10),10);
let birthMonths = parseInt(dob.value.slice(5,7),10);
let birthYear = parseInt(dob.value.slice(0,4),10);

console.log('Dob :- ',birthYear,birthMonths,birthDay);

if(currentDay >= birthDay){
    Days = currentDay-birthDay;
}else{
Days = currentDay + new Date(currentYear,currentMonths).getDate() - birthDay;
currentMonths --;
}
if(currentMonths >= birthMonths){
    Months = currentMonths-birthMonths;
}else{
   Months = currentMonths + 12 - birthMonths;
   years --;

}
years = currentYear- birthYear;
if(years<0){
    ageText.innerHTML="No jokes";
}
else{
    ageText.innerHTML=(years  + " Years," +  Months + " months,"+  Days + "Days");

}

}