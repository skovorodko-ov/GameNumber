'use strict';

// функция проверки на число
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

// функция вывода первого prompt с заданием пользователю
function whatNum() {
    let num = 38;       // загаданное число, находится в замыкании с функцией check
    let userAnswer = prompt('Угадай число от 1 до 100');

    // функция проверки, какое число или не число ввел пользователь
    function check(n) {
        if (!isNumber(n) && n !== null) {   // проверка переменной на число
            userAnswer = prompt('Введите число!');
            check(userAnswer);           // вызов функцией самой себя (рекурсия)
        } else if (n === null) {            // проверка нажатия пользователем "отмена"
            alert('Игра окончена!');
        } else if (n > num) {               // проверка введенного ползавателем числа
            userAnswer = prompt('Загаданное число меньше. Попробуйте еще раз');
            check(userAnswer);           // вызов функцией самой себя (рекурсия)
        } else if (+n === num) {            // пользователь угадал число
            userAnswer = alert('Поздравляю, Вы угадали!');
        } else {                            // введенное число больше загаданного
            userAnswer = prompt('Загаданное число больше. Попробуйте еще раз');
            check(userAnswer);           // вызов функцией самой себя (рекурсия)
        }
    }

    check(userAnswer);
}

// вызов функции
whatNum();        
    