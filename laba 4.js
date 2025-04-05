// Nomer 1

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const table = new Set();

function processInput(input) {
    const numbers = input.trim().split(/\s+/).map(Number);

    for (const x of numbers) {
        if (x === 0) {
            console.log([...table].sort((a, b) => a - b).join(' '));
            rl.close();
            return;
        }
        if (x > 0) {
            table.add(x);
        } else {
            table.delete(-x);
        }
    }
    askForInput();
}

function askForInput() {
    rl.question('Введите число: ', processInput);
}

askForInput();


// Вводим: 3
// 1
// 2
// 3
// 0

// тут инпут должен быть 123