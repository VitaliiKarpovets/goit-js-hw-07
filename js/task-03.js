// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
//     Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listContainer = document.getElementById('gallery');
listContainer.style.display = 'flex';
listContainer.style.listStyle = 'none';

const makeImageAtt = ({ url, alt }) => {
    return `<li><img src = ${url} alt = ${alt} width = '320'></img></li>`;
}

const makeListEls = images.map(makeImageAtt).join('');

listContainer.insertAdjacentHTML('afterbegin', makeListEls);



// console.log(makeListEls);







// const imageEls = ({ url, alt }) => {
//     const imageEl = document.createElement('img');
//     imageEl.src = url;
//     imageEl.alt = alt;
    
//     const listEl = document.createElement('li');
//     listEl.appendChild(imageEl);
//     return listEl;
// }

// const imagelist = images.map(imageEls)

// // const imagelist = images.map(({url, alt}) => {
// //     const imageEl = document.createElement('img');
// //     imageEl.src = url;
// //     imageEl.alt = alt;
// //     return imageEl;
// // }).map(element => {
// //     const listEl = document.createElement('li');
// //     listEl.appendChild(element);
// //     return listEl;
// // })

// listContainer.append(...imagelist);
