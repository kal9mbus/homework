"use strict"

//let money = 20000, time = 2021-05-15, question1 = "JKX", question2 = 1500, question3 = "SVET", question4 = 2500;
let money = prompt("Ваш бюджет на месяц?", ""), time = prompt("Введите дату в формате YYYY-MM-DD","");
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
