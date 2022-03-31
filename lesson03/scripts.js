'use strict'

  
let money = prompt("Ваш ежемесячный доход: ", 1000);
let income = 'фриланс';
let addExpenses = prompt("Перечислите ваши расходы через запятую:").split(',');
let deposit = !!prompt("Есть ли у вас депозит в банке?");
let expenses = prompt("Введите через запятую обязательные статьи расходов: ").split(',');
let mission = 15000;
let period = 10;
console.log(money+ ' '+ income+ ' '+ deposit);

console.log('Типы данных: ', typeof(money),typeof(income), typeof(deposit));
console.log('Период равен '+period+' месяцев');
console.log('Цель заработать '+ mission+ ' рублей');
let budgetDay = money / 30;
console.log(budgetDay);