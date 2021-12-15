// Задание 1.
var a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c); // 2. Выдаёт такой результат, т.к. используется префикс инкремента (a = 1; c = a + 1).
d = b++;
alert(d); // 1. Выдаёт такой результат, т.к. используется постфикс инкремента (b = 1; d = b; b = b + 1)
c = (2 + ++a);
alert(c); // 5. // Выдаёт такой результат, т.к. а = 3 (использовался префикс инкремента, а было равно 2). В итоге 2 + 3 = 5.
d = (2 + b++);
alert(d); // 4. // Выдаёт такой результат, т.к. использовался постфикс инкремента (d = 2 + b; b = b + 1). b было равно 2. 
alert(a); // 3. // Выдаёт такой результат, т.к. переменная а два раза увеличивалась на единицу с помощью префикса.
alert(b); // 3. // Выдаёт такой результат, т.к. переменная b два раза увеличивалась на единицу с помощью постфикса.

// Задание 2.
var a = 2;
var x = 1 + (a *= 2); // x будет равен 5, т.к. операция a *= 2 заменяет a = a * 2.

// Задание 3.
var a = Number(prompt('Введите первое число'));
b = Number(prompt('Введите второе число'));
if (((a > 0) && (b > 0)) || ((a === 0) && (b === 0)) || ((a > 0) && (b === 0)) || ((a === 0) && (b > 0))) {
    alert(a - b);
} else if ((a < 0) && (b < 0)) {
    alert(a * b);
} else {
    alert(a + b);
}

// Задание 4. Данное задание можно реализовать циклом всего в пару строк. Но если сказано сделать через кейс - сделано.
var a = Math.floor(Math.random() * 16);
switch (a) {
    case 0:
        console.log(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 1:
        console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 2:
        console.log(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 3:
        console.log(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 4:
        console.log(4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 5:
        console.log(5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 6:
        console.log(6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 7:
        console.log(7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 8:
        console.log(8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case 9:
        console.log(9, 10, 11, 12, 13, 14, 15);
        break;
    case 10:
        console.log(10, 11, 12, 13, 14, 15);
        break;
    case 11:
        console.log(11, 12, 13, 14, 15);
        break;
    case 12:
        console.log(12, 13, 14, 15);
        break;
    case 13:
        console.log(13, 14, 15);
        break;
    case 14:
        console.log(14, 15);
        break;
    case 15:
        console.log(15);
        break;
}
// Через цикл можно осуществить следующим образом:
var a = Math.floor(Math.random() * 16);
while (a != 15) {
    console.log(a);
    ++a;
}

// Задание 5.
function summ(arg1, arg2) {
    let a;
    a = arg1 + arg2;
    alert(`${'Сумма'} ${a} `);
}

function diff(arg1, arg2) {
    let a;
    a = arg1 - arg2;
    alert(`${'разность'} ${a} `);
}

function multi(arg1, arg2) {
    let a;
    a = arg1 * arg2;
    alert(`${'произведение'} ${a} `);
}

function div(arg1, arg2) {
    let a;
    a = (arg1 / arg2) * 100;
    a = Math.floor(a) / 100;
    alert(`${'Чaстное'} ${a} `);
}
var x = +prompt('Введите первое число');
y = +prompt('Введите второе число');
summ(x, y);
diff(x, y);
multi(x, y);
div(x, y);

// Задание 6.
function oper(arg1, arg2, operation) {
    let a;
    switch (operation) {
        case 'сложить':
            a = arg1 + arg2;
            break;
        case 'вычесть':
            a = arg1 - arg2;
            break;
        case 'умножить':
            a = arg1 * arg2;
            break;
        case 'разделить':
            a = (arg1 / arg2) * 100;
            a = Math.floor(a) / 100;
            break;
        default:
            a = 'Введены некорректные значения';
    };
    return a;
}
var x = +prompt('Введите первое число');
y = +prompt('Введите второе число');
str = prompt('Введите операцию: сложить, вычесть, умножить, разделить');
str = str.toLowerCase();
alert(oper(x, y, str));

// Задание 7.
null == 0 // False, т.к. null равен только undefined.
null === 0 // False, т.к. сравниваем разные типы данных.
null > 0 // False, т.к. ноль не больше нуля.
null < 0 // False, т.к. ноль не меньше нуля.
null >= 0 // True, т.к. ноль равен нулю.
null <= 0 // True, т.к. ноль равен нулю.
    /* Дело в том, что нестрогое равенство и сравнения работают по-разному. Сравнения преобразуют null в ноль, а он не больше и не меньше нуля. Поэтому null >= 0 истинно, как и null <= 0.
    В случае нестрого равенства особый случай: null и undefined равны только друг другу и не к чему не приводятся.
    В случае со строгим равенством мы пытаемся сравнить разные типы данных.
    */

// Задание 8.
function power(val, pow) {
    if (pow === 1) {
        return val;
    } else if (pow === 0) {
        power = 1;
    } else {
        power = power(val, pow - 1) * val;
    }
    return power;
}
var x = +prompt('Введите первое число');
y = +prompt('Введите второе число')
alert(power(x, y))
    // Не удалось реализовать с отрицательными числами
