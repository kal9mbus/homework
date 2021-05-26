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
	}
};




/*let options = {
	width: 1024,
	height: 1024,
	name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
	border: "black",
	bg: "red"
};
delete options.bool;
console.log(options);

for(let key in options){
	console.log('Свойство ' + key + ", имеет значение " + options[key]);
}

console.log(Object.keys(options).length);

let arr = [1,2,3,4,5];

for(let i = 0; i< arr.length; i++){
	console.log(arr[i]);
}
arr.forEach(function(item, i, mass){
	console.log(i + ' : ' + item + '(массив: ' + mass + ')');
});

console.log(arr);

let mass =[1,3,4,6,7];
for( let key of mass){
	console.log(key);
}*/

/*let ans = prompt('',''), arr = [];

arr = ans.split(',');
console.log(arr);
*/

//let arr = ['sssss', 'ssssaweqw', 'ewqweqw'], i = arr.join(', ');
//console.log(i);
/*
let soldier = {
	helth: 400,
	armor: 100
};
let John = {
	health: 100
};
John.__proto__ = soldier;

console.log(John);
console.log(John.armor);*/