let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


let a, b;
for (let i = 0; i<2; i++)
{
    a = prompt("Введите обязательную статью расходов в этом месяце",""), b = prompt("Во сколько обойдётся?","");

    if(typeof(a) === 'string' && typeof(a)!= null){
        appData.expenses[a] = b;
    }
}
console.log(appData);
alert(appData.budget / 30);