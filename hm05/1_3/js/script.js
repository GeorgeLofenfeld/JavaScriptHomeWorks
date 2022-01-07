function chess() {
    var field = document.getElementById('table'); // сохраняем элемент разметки поле, для добавления в него элементов
    var string = document.createElement('div'); // создаем блок для букв над полем
    string.style.display = 'flex'; // присваиваем этому блоку стили
    string.style.margin = '0 auto';
    string.style.justifyContent = 'center';
    string.style.backgroundColor = '#ccd';
    string.style.width = '600px';
    var a = document.createElement('h1'); // начинаем создавать блоки букв (отдельными блоками для точного позиционирования)
    a.style.width = '75px';
    a.style.height = '75px;'
    a.style.textAlign = 'center';
    a.innerText = 'A';
    var b = document.createElement('h1');
    b.style.width = '75px';
    b.style.height = '75px;'
    b.style.textAlign = 'center';
    b.innerText = 'B';
    var c = document.createElement('h1');
    c.style.width = '75px';
    c.style.height = '75px;'
    c.style.textAlign = 'center';
    c.innerText = 'C';
    var d = document.createElement('h1');
    d.style.width = '75px';
    d.style.height = '75px;'
    d.style.textAlign = 'center';
    d.innerText = 'D';
    var e = document.createElement('h1');
    e.style.width = '75px';
    e.style.height = '75px;'
    e.style.textAlign = 'center';
    e.innerText = 'E';
    var f = document.createElement('h1');
    f.style.width = '75px';
    f.style.height = '75px;'
    f.style.textAlign = 'center';
    f.innerText = 'F';
    var g = document.createElement('h1');
    g.style.width = '75px';
    g.style.height = '75px;'
    g.style.textAlign = 'center';
    g.innerText = 'G';
    var h = document.createElement('h1');
    h.style.width = '75px';
    h.style.height = '75px;'
    h.style.textAlign = 'center';
    h.innerText = 'H';
    string.insertAdjacentElement('beforeend', a); // добавляем блоки букв в родительский блок над полем
    string.insertAdjacentElement('beforeend', b);
    string.insertAdjacentElement('beforeend', c);
    string.insertAdjacentElement('beforeend', d);
    string.insertAdjacentElement('beforeend', e);
    string.insertAdjacentElement('beforeend', f);
    string.insertAdjacentElement('beforeend', g);
    string.insertAdjacentElement('beforeend', h);
    document.body.insertAdjacentElement('afterbegin', string); // добавляем блок с буквами над полем
    for (let i = 1; i <= 4; i++) { // цикл для всей доски, создающий по две строки за раз
        for (let i = 1; i <= 4; i++) { // создаем строку из черных и белых блоков
            var blackBlock = document.createElement('div');
            var whiteBlock = document.createElement('div');
            blackBlock.style.backgroundColor = 'black';
            blackBlock.style.width = '75px';
            blackBlock.style.height = '75px';
            whiteBlock.style.backgroundColor = 'white';
            whiteBlock.style.width = '75px';
            whiteBlock.style.height = '75px';
            field.insertAdjacentElement('beforeend', blackBlock);
            field.insertAdjacentElement('beforeend', whiteBlock);
        }
        for (let i = 1; i <= 4; i++) { // создаём следующую строку, начиная с белого блока
            var blackBlock = document.createElement('div');
            var whiteBlock = document.createElement('div');
            blackBlock.style.backgroundColor = 'black';
            blackBlock.style.width = '75px';
            blackBlock.style.height = '75px';
            whiteBlock.style.backgroundColor = 'white';
            whiteBlock.style.width = '75px';
            whiteBlock.style.height = '75px';
            field.insertAdjacentElement('beforeend', whiteBlock);
            field.insertAdjacentElement('beforeend', blackBlock);
        }
    }
}
window.onload = chess; // без обработчика не работало 

/*
Реализовать с цифрами и буквами скорее всего смог бы (уже делал на других языках на учёбе в колледже),
но это задание и так заняло слишком много времени.
И представляя примерную реализацию с цифрами и буквами фигур, боюсь представить, сколько мне бы потребовалось кода.
*/
