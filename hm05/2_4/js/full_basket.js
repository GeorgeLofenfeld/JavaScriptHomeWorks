var products = [ // создание массива с объектами - товарами
    { id: 1, name: 'Джинсы', price: 2500, size: 'xl', },
    { id: 2, name: 'Куртка', price: 1000, size: 'l', },
    { id: 3, name: 'Шорты', price: 1500, size: 'm', },
    { id: 4, name: 'Кепка', price: 500, size: 'xs', },
    { id: 5, name: 'Носки', price: 300, size: 's', },
];

function countBasketPrice(array) { // функция подсчёта стоимоти корзины
    let summ = 0;
    for (let key in array) { // перебираем массив по индексам
        summ += array[key].price; // берем значение price у того товара - объекта, который находится по данному индексу массива 
    }
    return summ; // возвращаем итоговую сумму 
}
var basket = [ // создание массива корзины 
    { id: 1, name: 'Джинсы', price: 2500, size: 'xl', },
    { id: 2, name: 'Куртка', price: 1000, size: 'l', },
]

function init() { // создание функции для загрузки кода после загрузки документа
    for (let key of products) { // функция заполнения страницы товарами
        let name = key.name; // получаем имя
        let price = key.price; // получаем цену
        let catalog = document.getElementById('catalog'); // получаем блок, в который будем вставлять разметку товаров
        let item = document.createElement('div'); // создаем блок, в котором будет хранится товар
        item.innerHTML = // создаем разметку каждого товара 
            `<div> 
                <p>${'Название:'} ${name}</p>
                <span>${'Цена:'} ${price}р</span>
            </div>`;
        catalog.insertAdjacentElement('beforeend', item) // добавляем товар на страницу
    };
    var basketMessage = document.getElementById('basket'); // создание переменной, хранящей длинну массива товаров в корзине
    if (basket.length > 0) { // проверка корзину на пустоту
        basketMessage.innerHTML = `<h3>${'В корзине'} ${basket.length} ${'предмета, на сумму'} ${countBasketPrice(basket)} ${'рублей'}</h3>`; // если полная, то выводим количество товаров и стоимость

    } else {
        basketMessage.innerHTML = '<h3>Корзина пуста</h3>'; // если пустая, выводим соответствующее сообщение 
    };
    for (let key of basket) { // заполнение корзины разметкой по аналогии с заполнением товарами
        let name = key.name;
        let price = key.price;
        let basket = document.getElementById('basket');
        let item = document.createElement('div');
        item.innerHTML =
            `<div> 
                <p>${'Название:'} ${name}</p>
                <span>${'Цена:'} ${price}р</span>
            </div>`;
        basket.insertAdjacentElement('afterbegin', item);
    };
}
window.onload = init; // вызов обработчика событий для загрузки кода, который нужно загрузить после документа, находящегося в функции
