let startBtn = document.querySelector("#start"),
	budgetValue = document.querySelector(".budget-value"),
	daybudgetValue = document.querySelector(".daybudget-value"),
	levelValue = document.querySelector(".level-value"),
	expensesValue = document.querySelector(".expenses-value"),
	optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
	incomeValue = document.querySelector(".income-value"),
	monthsavingsValue = document.querySelector(".monthsavings-value"),
	yearsavingsValue = document.querySelector(".yearsavings-value"),
	yearValue = document.querySelector(".year-value"),
	monthValue = document.querySelector(".month-value"),
	dayValue = document.querySelector(".day-value"),
	expensesItemBtn = document.querySelector('.expenses-item-btn'),
	expensesItem = document.querySelectorAll('.expenses-item'),
	optionalExpensesBtn = document.querySelector(".optionalexpenses-btn"),
	optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
	countBudgetBtn = document.querySelector(".count-budget-btn"),
	chooseIncome = document.querySelector(".choose-income"),
	savings = document.querySelector("#savings"),
	sumValue = document.querySelector("#sum"),
	percentValue = document.querySelector("#percent");
	let money, time, fullExp;

startBtn.addEventListener("click", function () {
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	money = +prompt("Ваш бюджет на месяц?", '');
	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц, ммм?", '');
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click', function () {//УТВЕРДИТЬ обязательные расходы
	let sum = 0;
	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
		if ((typeof (a) === 'string') && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 40 && !isNaN(b)) {
			console.log("yeah" + a + ', ' + b);
			appData.expenses[a] = b;
			sum += +b;
		} else {
			console.log("something wrong" + i);
			i--;
		}
	}
	expensesValue.textContent = appData.fullExpenses = sum;
});


optionalExpensesBtn.addEventListener('click', function () {
	for (let i = 0; i < optionalexpensesItem.length; i++) {
		let a = optionalexpensesItem[i].value;
		while (a == '' || typeof (a) !== 'string' || a.length > 50) {
			a = optionalexpensesItem[i].value;
		}
		appData.optionalExpenses[i] = a;
		optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

countBudgetBtn.addEventListener('click', function () { //расчет дневного бюджета
	if (appData.budget != undefined) {
		appData.moneyPerDay = ((appData.budget - +appData.fullExpenses) / 30).toFixed();
		daybudgetValue.textContent = appData.moneyPerDay;
		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "минимальный уровень достатка";
		} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Средний уровень достатка";
		} else if (appData.moneyPerDay >= 2000) {
			levelValue.textContent = "Высокий уровень достатка";
		} else {
			levelValue.textContent = "Произошла ошибка";
		}
	}else{
		alert("НАЖМИ НАЧАТЬ РАСЧЕТ!");
	}
});

chooseIncome.addEventListener('input', function(){
	let items = chooseIncome.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function(){
	if(appData.savings == true){
		appData.savings = false;
	}
	else{
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function(){
	if(appData.savings == true){
		let sum = +sumValue.value,
		percent = +percentValue.value;
		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100  * percent;

		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function(){
	if(appData.savings == true){
		let sum = +sumValue.value,
		percent = +percentValue.value;
		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100  * percent;

		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budget: money,
	expenses: {},
	fullExpenses: 0,
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false,
};