let startBtn = document.querySelector("#start"),
    budgetValue = document.querySelector(".budget-value"),
    daybudgetValue = document.querySelector(".daybudget-value")[0],
    levelValue = document.querySelector(".level-value")[0],
    expensesValue = document.querySelector(".expenses-value"),
    optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthsavingsValue = document.querySelector(".monthsavings-value"),
    yearsavingsValue = document.querySelector(".yearsavings-value"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

    let money, time;

startBtn.addEventListener("click", function(){
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');
	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц, ммм?", '');
	}
	budgetValue.textContent = money;
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function(){

		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
			b = +prompt("Во сколько обойдётся?", "");
	
			if ((typeof (a) === 'string') && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 40 && !isNaN(b)) {
				console.log("yeah" + a + ', ' + b);
				appData.expenses[a] = b;
			} else {
				console.log("something wrong" + i);
				i--;
			}
	
		}
	},
	detectDayBudget: function(){
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Ежедневный бюджет : " + appData.moneyPerDay);
	},
	detectLevel: function(){
		if (appData.moneyPerDay < 100) {
			console.log("минимальный уровень достатка");
		} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else if (appData.moneyPerDay >= 2000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Произошла ошибка");
		}
	},
	checkSavings: function(){
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?", ''),
				percent = +prompt("Под какой процент?", '');
			appData.monthIncome = save / 100 / 12 * percent;
			alert("Доход в месяц с вашего депозита : " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function(){
		for (let i = 1; i <= 3; i++) {
			let a = '';
			while(a == '' || typeof(a) !== 'string' || a.length > 50){
				a = prompt("Статья необязательных расходов?",""); 
			}
			appData.optionalExpenses[i] = a;
		}
	},
	chooseIncome: function(){
		let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)","");
		while(items == '' || items == null){
			items = prompt("Что принесет дополнительный доход? (перечислите через запятую)","");
		}
		appData.income = items.split(', ');
		appData.income.push(prompt("Может что то еще?",""));
		appData.income.sort();
		array.forEach(function(){
			
		});
	}
};


