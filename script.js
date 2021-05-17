"use strict"

//let money = 20000, time = 2021-05-15, question1 = "JKX", question2 = 1500, question3 = "SVET", question4 = 2500;
/*let money = prompt("Ваш бюджет на месяц?", ""), time = prompt("Введите дату в формате YYYY-MM-DD","");
let question1 = prompt("Введите обязательную статью расходов в этом месяце",""),  question2 = prompt("Во сколько обойдется?",""), question3 = prompt("Введите обязательную статью расходов в этом месяце", ""), question4 = prompt ("Во сколько обойдется?","");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
appData.expenses.question1 = question2;
appData.expenses.question3 = question4;
alert("Бюджет на 1 день : "+appData.budget/30);
console.log(appData)
*/

// Lesson 2.8 ///
/*let num = 50;

switch (num){
    case num > 50:
        break;
    case num <50:
        break;
    case 50:
        console.log("YEAH");
        break;
        default:
            console.log("NISHMAGLA");
        break;
}*/

//LESSON 2.9 ЦИКЛЫ
let num = 50;
while(num <55)
{
    console.log(num);
    num++;
}

do{
    console.log(num);
    num++;
}
while(num <60);

for(let i =0; i<10; i++){
    if (i ==6)continue;
    if(i ==8)break;
    console.log(i);

}