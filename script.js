const time = 1000
function getRandomNumber() {
    return Math.floor(Math.random() * 12) + 1;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function work(num1, num2) {
    return num1 * num2;
}
let number1 = getRandomNumber();
let number2 = getRandomNumber();
let number3 = work(number1, number2);
document.getElementById('number1').innerText = number1;
document.getElementById('number2').innerText = number2;
sleep(time).then(() => { document.getElementById('number3').innerText = number3; });

// Function to execute when the key is pressed
function executeOnKeyPress(event) {
    // Example: Check if the pressed key is the "Enter" key
    if (event.key === " ") {
        number1 = getRandomNumber();
        number2 = getRandomNumber();
        number3 = work(number1, number2);
        document.getElementById('number1').innerText = number1;
        document.getElementById('number2').innerText = number2;
        sleep(time).then(() => { document.getElementById('number3').innerText = number3; });
    }
}

// Add an event listener for keydown events on the document
document.addEventListener("keydown", executeOnKeyPress);
