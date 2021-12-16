// Задание 1.
let a = 0;
while (a <= 100) {
    console.log(a++);
}

// задание 2. Одномерный массив:
function countBasketPrice(count) {
    let summ = 0;
    for (let i = 0; i < n; i++) {
        summ = summ + count[i];
    }
    return summ;
}
var basket = [];
var n = 10;
for (let i = 0; i < n; i++) { // Заполняем массив корзины товарами со случайной ценой, определяя его размер заранее заданной переменной
    basket[i] = Math.floor(Math.random() * 5000)
}
console.log(`${'Сумма корзины = '} ${countBasketPrice(basket)}`);

// Задание 3.
for (let i = 0; i <= 9; console.log(i++)) {

}

// Задание 4.
let str = '';
for (let i = 0; i <= 19; i++) {
    str = str + 'x';
    console.log(str);
}
