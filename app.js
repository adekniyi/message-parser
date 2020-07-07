let btn = document.getElementById('btn');
let input = document.getElementById('input');
let span = document.querySelector('.output')
let p = document.querySelector('p')


btn.addEventListener('click', displayMessage)

function displayMessage() {
    let inputValue = input.value;
    if (inputValue === "") {
        p.style.display = 'block'
    } else {
        // p.style.display = 'block'
        span.textContent = inputValue
        p.style.display = 'none'
    }
}