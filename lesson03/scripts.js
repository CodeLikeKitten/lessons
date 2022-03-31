'use strict'

  
let money = prompt("Ваш ежемесячный доход: ", 1000);
let income = 'фриланс';
let addExpenses = prompt("Перечислите ваши расходы через запятую:").split(',');
let deposit = !!prompt("Есть ли у вас депозит в банке?");
let expenses = prompt("Введите через запятую обязательные статьи расходов: ").split(',');
let amount = prompt("Во сколько это обойдётся? (также через запятую)").split(',');
let mission = 15000;
let period = 10;
let budgetMonth = 0;
for (let i = 0; i < expenses.length;i++){
    budgetMonth+=amount[i];
}
console.log(money+ ' '+ income+ ' '+ deposit);

console.log('Типы данных: ', typeof(money),typeof(income), typeof(deposit));
console.log('Период равен '+period+' месяцев');
console.log('Цель заработать '+ mission+ ' рублей');
let budgetDay = money / 30;
console.log(budgetDay);