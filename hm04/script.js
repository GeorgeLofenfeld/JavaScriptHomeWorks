// Задание 1.
let x = Number(prompt('Введите число от 0 до 999'));
let numObj = {};
if (x <= 999) {
    numObj = {
        hundreds: Math.floor(x / 100),
        dozens: Math.floor((x / 10) % 10),
        unit: (x % 10),
    }
    console.log(numObj)
} else {
    alert('Введено некорректное значение');
}

// Задание 2.
function countBasketPrice(obj) {
    let summ = 0;
    for (let key of Object.values(obj)) {
        summ += key;
    }
    return summ;
}
var basket = {
    jeans: 2500,
    jacket: 1000,
    undershirt: 1500,
    cap: 500,
    socks: 300,
};
console.log('Корзина: ', basket);
console.log(`${'Сумма корзины = '} ${countBasketPrice(basket)}`);

// Задание 3.
function countBasketPrice(obj) {
    let summ = 0;
    for (let key of Object.values(obj)) {
        for (let keyinside of Object.values(key)) {
            summ += keyinside;
        }
    }
    return summ;
}
var jeans = { count: 2500, },
    jacket = { count: 1000, },
    undershirt = { count: 1500, },
    cap = { count: 500, },
    socks = { count: 300, },
    basket = {
        jeans,
        jacket,
        undershirt,
        cap,
        socks,
    }
console.log('Корзина: ', basket);
console.log(`${'Сумма корзины = '} ${countBasketPrice(basket)}`);
