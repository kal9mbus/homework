'use strict'

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD","");
let question1 = prompt("Введите обязательную статью расходов в этом месяце","");
let question2 = prompt("Во сколько обойдется?","");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
appData.expenses.question1 = question2;
alert("Бюджет на 1 день : "+appData.budget/30);
alert(appData.expenses.question1);
