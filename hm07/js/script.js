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
        document.getElementById('clear-basket').addEventListener('click', clearBasket);
        let buttonsBlock = document.createElement('div');
        buttonsBlock.style.height = '50px';
        buttonsBlock.style.display = 'flex';
        buttonsBlock.style.justifyContent = 'flex-end';
        buttonsBlock.innerHTML = `<button id="nextBtn">Далее</button>`;
        document.getElementById('basket').insertAdjacentElement('beforeend', buttonsBlock);
        document.getElementById('nextBtn').addEventListener('click', nextBtn);
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
            let buttonsBlock = document.createElement('div');
            buttonsBlock.style.height = '50px';
            buttonsBlock.style.display = 'flex';
            buttonsBlock.style.justifyContent = 'flex-end';
            buttonsBlock.innerHTML = `<button id="nextBtn">Далее</button>`;
            document.getElementById('basket').insertAdjacentElement('beforeend', buttonsBlock);
            document.getElementById('nextBtn').addEventListener('click', nextBtn);
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
    let basketComposition = document.createElement('div');
    basketComposition.innerText = 'Состав корзины';
    basketComposition.style.border = '1px solid black';
    basketComposition.style.background = 'pink';
    basketComposition.style.textAlign = 'right';
    document.getElementById('basket-header').insertAdjacentElement('afterend', basketComposition);
    let basketComment = document.createElement('div');
    basketComment.setAttribute('id', 'comment');
    basketComment.innerText = 'Комментарий';
    basketComment.style.border = '1px solid black';
    basketComment.style.background = 'pink';
    basketComment.style.textAlign = 'right';
    document.getElementById('basket').insertAdjacentElement('afterend', basketComment);
    let deliveryAddress = document.createElement('div');
    deliveryAddress.setAttribute('id', 'address');
    deliveryAddress.innerText = 'Адрес доставки';
    deliveryAddress.style.border = '1px solid black';
    deliveryAddress.style.background = 'pink';
    deliveryAddress.style.textAlign = 'right';
    document.getElementById('basket').insertAdjacentElement('afterend', deliveryAddress);

    function nextBtn() {
        document.getElementById('basket').innerHTML = '';
        document.getElementById('address').innerHTML = '<p>Адрес доставки</p><input type="text"><input type="text"><input type="text">';
        let buttonsBlock = document.createElement('div');
        buttonsBlock.style.height = '50px';
        buttonsBlock.style.display = 'flex';
        buttonsBlock.style.justifyContent = 'flex-end';
        buttonsBlock.innerHTML = `<button id="nextBtn">Далее</button>`;
        document.getElementById('address').insertAdjacentElement('beforeend', buttonsBlock);
        document.getElementById('nextBtn').addEventListener('click', nextBtn2);
        for (let i = 0; i < products.length; i++) {
            document.getElementById(`buy-button-${i}`).removeEventListener('click', buyClick);
        }
    };

    function nextBtn2() {
        document.getElementById('address').innerHTML = 'Адрес доставки';
        document.getElementById('comment').innerHTML = `<p>Комментарий</p>
        <input type="text">
        <button>Оформить заказ</button>
        <button id="back-to-basket">Назад к корзине</button>`;
        document.getElementById('back-to-basket').addEventListener('click', backToBasket);
    };

    function backToBasket() {
        document.getElementById('comment').innerHTML = 'Комментарий';
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
        document.getElementById('clear-basket').addEventListener('click', clearBasket);
        let buttonsBlock = document.createElement('div');
        buttonsBlock.style.height = '50px';
        buttonsBlock.style.display = 'flex';
        buttonsBlock.style.justifyContent = 'flex-end';
        buttonsBlock.innerHTML = `<button id="nextBtn">Далее</button>`;
        document.getElementById('basket').insertAdjacentElement('beforeend', buttonsBlock);
        document.getElementById('nextBtn').addEventListener('click', nextBtn);
        for (let i = 0; i < products.length; i++) {
            document.getElementById(`buy-button-${i}`).addEventListener('click', buyClick);
        }
    };
};
window.onload = init;
