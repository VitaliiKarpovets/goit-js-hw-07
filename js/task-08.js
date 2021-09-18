// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input 
// и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает
// 1 параметр amount - число.Функция создает столько div, сколько 
// указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше 
// предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const buttonContainer = document.querySelector('#controls');
const input = buttonContainer.querySelector('input');
const buttonRender = buttonContainer.querySelector('[data-action="render"]');
const buttonDestroy = buttonContainer.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');

// console.log(buttonContainer.children.length)

function createBoxes(amount) {
    amount = input.value;
    const amountOfBox = boxesContainer.children.length;
    for (let i = 1; i <= amount; i += 1) {
        const box = document.createElement('div');
        boxesContainer.append(box)
        let sideLength = 30 + 10 * (amountOfBox + i - 1);
        box.style.width = sideLength.toString() +'px'
        box.style.height = sideLength.toString() +'px'
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        console.log(r, g, b);
        box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}
// createBoxes(3);

function clearPage() {
    const allBoxes = boxesContainer.children.length;
    for (let i = 0; i < allBoxes; i += 1) {
        const firstBox = boxesContainer.firstChild;
        firstBox.remove();
    }
}

buttonRender.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', clearPage);


