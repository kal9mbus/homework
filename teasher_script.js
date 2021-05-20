'use strict';
let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


let a, b, i = 0;

for (i = 0; i < 2; i++)
{
    a = prompt("Введите обязательную статью расходов в этом месяце",""), b = prompt("Во сколько обойдётся?","");

    if((typeof(a) === 'string') && typeof(a)!= null && (typeof(b) === 'string') && typeof(b)!= null && a != '' && b != '' && a.length <40 && b.length < 50){
		console.log("yeah");
		appData.expenses[a] = b;
	}
	else {
		console.log("something wrong" +i);
		i--;
	}
	
};

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет : " + appData.moneyPerDay);

if( appData.moneyPerDay < 100){
	console.log("минимальный уровень достатка");
}else if (appData.moneyPerDay >=100 && appData.moneyPerDay <2000){
	console.log("Средний уровень достатка");
}else if (appData.moneyPerDay >=2000){
	console.log("Высокий уровень достатка");
}
else {console.log("Произошла ошибка")
};
