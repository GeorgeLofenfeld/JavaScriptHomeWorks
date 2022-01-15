var products = [
    { id: 0, name: 'Джинсы', price: 2500, size: 'xl', imgKey: [1, 6, 5, ], },
    { id: 1, name: 'Куртка', price: 10000, size: 'l', imgKey: [2, 1, 6, ], },
    { id: 2, name: 'Шорты', price: 1500, size: 'm', imgKey: [3, 2, 1, ], },
    { id: 3, name: 'Кепка', price: 500, size: 'xs', imgKey: [4, 3, 2, ], },
    { id: 4, name: 'Носки', price: 300, size: 's', imgKey: [5, 4, 3, ], },
];

function countBasketPrice(array) {
    let summ = 0;
    for (let key in array) {
        summ += array[key].price;
    }
    return summ;
}
var basket = {
    items: [

    ],
}

function init() {
    for (let key of products) {
        let id = key.id;
        let name = key.name;
        let price = key.price;
        let catalog = document.getElementById('catalog');
        let item = document.createElement('div');
        item.innerHTML =
            `<div id="${id}"> 
                <img src="img/product-${key.imgKey[0]}.jpg" alt="photo" width="100" height="100">
                <p>${'Название:'} ${name}</p>
                <span>${'Цена:'} ${price}р</span>
                <button id="buy-button-${id}" class="buy-button">Купить</button>
            </div>`;
        catalog.insertAdjacentElement('beforeend', item)
        document.getElementById(`buy-button-${id}`).addEventListener('click', buyClick);
    };
    var basketMessage = document.getElementById('basket');
    basketMessage.innerHTML = '<h3>Корзина пуста</h3>';

    function buyClick(event) {
        let parentOfButton = event.target.parentNode;
        let idOfProduct = parentOfButton.getAttribute('id');
        basket.items.unshift(products[idOfProduct]);
        if (basket.items.length > 0) {
            basketMessage.innerHTML = `<h3>
            ${'Товаров в корзине:'} 
            ${basket.items.length} 
            ${', на сумму'} 
            ${countBasketPrice(basket.items)} 
            ${'рублей.'}
            </h3>
            <button id="clear-basket">Очистить корзину</button>`;
            document.getElementById('clear-basket').addEventListener('click', clearBasket);
        } else {
            basketMessage.innerHTML = '<h3>Корзина пуста</h3>';
        };
        for (let key of basket.items) {
            let id = key.id;
            let name = key.name;
            let price = key.price;
            let basket = document.getElementById('basket');
            let item = document.createElement('div');
            item.innerHTML =
                `<div id="${id}"> 
                <img src="img/product-${key.imgKey[0]}.jpg" alt="photo" width="100" height="100">
                <p>${'Название:'} ${name}</p>
                <span>${'Цена:'} ${price}р</span>
                <button id="delete-button-${id}" class="delete-button">Удалить</button>
            </div>`;
            basket.insertAdjacentElement('afterbegin', item);
            document.getElementById(`delete-button-${id}`).addEventListener('click', deleteClick);
        };
    };

    function deleteClick(event) {
        let idOfProduct = Number(event.target.parentNode.getAttribute('id'));
        for (let i = 0; i < basket.items.length; i++) {
            if (basket.items[i].id === idOfProduct) {
                basket.items.splice(i, 1);
                break;
            };
        };
        if (basket.items.length > 0) {
            basketMessage.innerHTML = `<h3>
            ${'Товаров в корзине:'}
            ${basket.items.length}
            ${', на сумму'}
            ${countBasketPrice(basket.items)}
            ${'рублей.'}
            </h3>
            <button id="clear-basket">Очистить корзину</button>`;
            document.getElementById('clear-basket').addEventListener('click', clearBasket);
        } else {
            basketMessage.innerHTML = '<h3>Корзина пуста</h3>';
        };
        for (let key of basket.items) {
            let id = key.id;
            let name = key.name;
            let price = key.price;
            let basket = document.getElementById('basket');
            let item = document.createElement('div');
            item.innerHTML =
                `<div id="${id}"> 
                <img src="img/product-${key.imgKey[0]}.jpg" alt="photo" width="100" height="100">
                <p>${'Название:'} ${name}</p>
                <span>${'Цена:'} ${price}р</span>
                <button id="delete-button-${id}" class="delete-button">Удалить</button>
            </div>`;
            basket.insertAdjacentElement('afterbegin', item);
            document.getElementById(`delete-button-${id}`).addEventListener('click', deleteClick);
        };
    };

    function clearBasket() {
        basket.items.splice(0, basket.items.length);
        basketMessage.innerHTML = '<h3>Корзина пуста</h3>';
    }

};
window.onload = init;
