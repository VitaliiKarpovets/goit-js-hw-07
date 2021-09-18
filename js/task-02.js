// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients 
// создаст отдельный li, после чего вставит все li за одну операцию в 
// список ul.ingredients.Для создания DOM - узлов используй
// document.createElement().

const listContainer = document.getElementById('ingredients');

const elements = ingredients.map(element => {
    const listEl = document.createElement('li');
    listEl.textContent = element;
    return listEl;
})
console.log(elements);
listContainer.append(...elements);

