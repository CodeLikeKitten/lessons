'use strict'

  
let money = parseInt(prompt("Ваш ежемесячный доход: ", 1000),10);
let income = 'фриланс';
let addExpenses = prompt("Перечислите ваши расходы через запятую:").split(',');
let deposit = prompt("Есть ли у вас депозит в банке?");
if (deposit.toLocaleLowerCase() == "да")
{
    deposit = true;
}
else
{
    deposit = false;
}
let expenses = prompt("Введите через запятую обязательные статьи расходов: ").split(',');
let amount = prompt("Во сколько это обойдётся? (также через запятую)").split(',');
let mission = 15000;
let period = 10;
let budgetMonth = money;
// for (let i = 0; i < addExpenses.length;i++)
// {
//     budgetMonth+=parseInt(addExpenses[i],10);
// }
for (let i = 0; i < amount.length;i++){
    budgetMonth-=parseInt(amount[i],10);
}
//console.log(money+ ' '+ income+ ' '+ deposit);

console.log('Типы данных: ', typeof(money),typeof(income), typeof(deposit));
console.log('Период равен '+period+' месяцев');
console.log('Цель заработать '+ mission+ ' рублей; Будет достигнута через '+ Math.ceil(mission/budgetMonth)+' месяцев');
let budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));

if (budgetDay>1200)
{
    console.log('У вас высокий уровень дохода');
}

if ((budgetDay>600) && (budgetDay<=1200))
{
    console.log('У вас средний уровень дохода');
}

if (budgetDay<=600)
{
    console.log('К сожалению, у вас уровень дохода ниже среднего');
}

if (budgetDay < 0)
{
    console.log('Что-то пошло не так');
}