// #nomer 1

console.log('nomer #1 ');
function generateRandom1(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

function selectionSort1(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

let n = generateRandom1(10, 2, 103); //Тут надо задавать параметры для генерации массива
console.log("Изначальный массив:", n);
console.log("Отсортированный массив:", selectionSort1(n), '\n'.repeat(5));






// #nomer 2


console.log('nomer #2 ');
function generateRandom2(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

function selectionSort2(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
        }
    }
    return arr;
}

let k = generateRandom2(10, 2, 103); //Тут надо задавать параметры для генерации массива
console.log("Изначальный массив:", n);
console.log("Отсортированный массив:", selectionSort2(n));




// #nomer 3
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('nomer #3 ');
function proverkanomera(n) {
    const reg = /^\d{2}-\d{2}-\d{2}$/;
    return reg.test(n);
}

function main() {
    rl.question("Кол-во номеров:", (count) => {
        count = parseInt(count, 10);
        if (isNaN(count) || count <= 0) {
            console.log("Некорректное количество номеров.");
            rl.close();
            return;
        }

        let phones = [];
        let i = 0;

        function askForPhone() {
            if (i < count) {
                rl.question("Введите номер телефона в формате XX-XX-XX:", (phone) => {
                    if (!proverkanomera(phone)) {
                        console.log("Некорректный номер телефона.");
                        rl.close();
                        return;
                    }
                    phones.push(phone);
                    i++;
                    askForPhone();
                });
            } else {
                phones.sort();
                console.log("Отсортированные номера:");
                phones.forEach(phone => console.log(phone));
                rl.close();
            }
        }

        askForPhone();
    });
}

main();