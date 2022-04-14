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



function getExpensesMonth()
{
    let sum = 0;
    for (let i=0;i<amount.length;i++)
    {
        sum+=parseInt(amount[i],10);
    }    
    return sum;
}

function getAccumulatedMonth()
{
    return money-getExpensesMonth();
}

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth()
{
    return Math.ceil(mission/accumulatedMonth);
}

let budgetDay = accumulatedMonth/30;

console.log('Типы данных: ', typeof(money),typeof(income), typeof(deposit));
console.log('Период равен '+period+' месяцев');
console.log('Расходы в месяц: '+getExpensesMonth().toString() + '; ' + addExpenses);
console.log('Цель заработать '+ mission+ ' рублей; Будет достигнута через '+ getTargetMonth().toString()+' месяцев');
console.log('Бюджет в день: '+Math.floor(budgetDay));
console.log(getStatusIncome());

function getStatusIncome()
{
    if (budgetDay>1200)
    {
        return 'У вас высокий уровень дохода';
    }

    if ((budgetDay>600) && (budgetDay<=1200))
    {
        return 'У вас средний уровень дохода';
    }

    if (budgetDay<=600)
    {
        return 'К сожалению, у вас уровень дохода ниже среднего';
    }

    if (budgetDay < 0)
    {
        return 'Что-то пошло не так';
    }
}