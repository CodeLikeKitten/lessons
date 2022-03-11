let money = 1000;
let income = 'фриланс';
let addExpenses = 'интернет, такси, комуналка';
let deposit = false;
let mission = 15000;
let period = 10;
console.log(money+ ' '+ income+ ' '+ deposit);

console.log('Типы данных: ', typeof(money),typeof(income), typeof(deposit));
console.log('Длина строки addExpenses',addExpenses.length);
console.log('Период равен '+period+' месяцев');
console.log('Цель заработать '+ mission+ ' рублей');
console.log(addExpenses.toLocaleLowerCase().split(' '));

let budgetDay = money / 30;
console.log(budgetDay);

