// Напиши скрипт, который бы при потере фокуса на инпуте,
//     проверял его содержимое на правильное количество символов.

const input = document.querySelector('#validation-input');
const inp = document.querySelector('#validation-input').value;

console.log(input.dataset.length)
input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    let count = event.currentTarget.value;
    if (count.length !== Number(input.dataset.length)) {
        input.classList.add('invalid')
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid')
    }

}


