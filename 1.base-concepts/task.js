"use strict";

// Задача 1: Решение квадратных уравнений
function solveEquation(a, b, c) {
    let discriminant = b ** 2 - 4 * a * c; // Вычисляем дискриминант
    let roots = []; // Массив для хранения корней

    if (discriminant < 0) {
        return roots; // Если дискриминант меньше 0, корней нет
    } else if (discriminant === 0) {
        let root = -b / (2 * a); // Если дискриминант равен 0, вычисляем один корень
        roots.push(root);
        return roots;
    } else {
        // Если дискриминант больше 0, вычисляем два корня
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        roots.push(root1, root2);
        return roots;
    }
}

// Примеры вызова функции для первого задания
console.log(solveEquation(1, -3, 2)); // [2, 1]
console.log(solveEquation(1, 2, 1));  // [-1]
console.log(solveEquation(1, 0, -4)); // [2, -2]
console.log(solveEquation(1, 0, 4));  // []

// Задача 2: Калькулятор ипотечных выплат
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    percent = percent / 100 / 12; // Преобразуем годовую процентную ставку в месячную
    const S = amount - contribution; // Тело кредита
    const monthlyPayment = S * (percent + (percent / (Math.pow(1 + percent, countMonths) - 1))); // Ежемесячный платёж
    const totalAmount = monthlyPayment * countMonths + contribution; // Общая сумма

    return Math.round(totalAmount * 100) / 100; // Округляем до двух знаков после запятой
}

// Примеры вызова функции для второго задания
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52
