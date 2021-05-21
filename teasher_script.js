//'use strict';
let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц, ммм?", '');
	}
	console.log(money);
}
start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {
	let a, b, i = 0;
	for (i = 0; i < 2; i++) {
		a = prompt("Введите обязательную статью расходов в этом месяце", "");
		b = +prompt("Во сколько обойдётся?", "");

		if ((typeof (a) === 'string') && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 40 && !isNaN(b)) {
			console.log("yeah" + a + ', ' + b);
			appData.expenses[a] = b;
		} else {
			console.log("something wrong" + i);
			i--;
		}

	}
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();
alert("Ежедневный бюджет : " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log("минимальный уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}

function checkSavings(){
	if (appData.savings == true){
		let save = +prompt("Какова сумма накоплений?",''), percent = +prompt("Под какой процент?",'');
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита : "+ appData.monthIncome);
	}
}
checkSavings();