let btn = document.getElementById('btn');
let h2 = document.getElementById('h2')
let input = document.getElementById('input');
let span = document.querySelector('.output')
    //let p = document.querySelector('p')


btn.addEventListener('click', displayMessage)

function displayMessage() {
    let inputValue = input.value;
    if (inputValue === "") {
        const message = "Please fill in the field";

        createP(message)
    } else {
        // p.style.display = 'block'
        span.textContent = inputValue.toUpperCase();
    }
}

function createP(message) {
    let p = document.createElement('p')
    p.className = "p";
    const container = document.querySelector('.container')
    p.appendChild(document.createTextNode(message))
    container.insertBefore(p, h2)
    p.style.display = 'block'
    setTimeout(() => p.remove(), 3000)

}