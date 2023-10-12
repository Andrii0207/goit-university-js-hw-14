const input = document.querySelector("#name-input")
const text = document.querySelector("#name-output")

input.addEventListener("input", enterSomeName)

const someText = text.innerText;

function enterSomeName(e) {

    if (e.currentTarget.value) {
        return text.textContent = e.currentTarget.value
    }
    text.textContent = someText;
}
