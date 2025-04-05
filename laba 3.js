const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// #nomer 1
let n = 1000;

function quickSort(arr, l = 0, r = arr.length - 1) {
    if (l < r) {
        let pivot = partition(arr, l, r);
        quickSort(arr, l, pivot - 1);
        quickSort(arr, pivot + 1, r);
    }
}

function partition(arr, l, r) {
    let pivot = arr[r], i = l;
    for (let j = l; j < r; j++) {
        if (arr[j] <= pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[r]] = [arr[r], arr[i]];
    return i;
}

let random_number = Array.from({ length: n }, () => Math.floor(Math.random() * 1000));

quickSort(random_number);
console.log('#1 Сортировка элементов в порядке возрастания: ', random_number);




// #nomer 2
let random_number_2 = Array.from({ length: n }, () => Math.floor(Math.random() * 51) + 50);
quickSort(random_number_2);
console.log('#2 Сортировка элементов в порядке возрастания: ', random_number_2);




// #nomer 3
const rows = 10;  // Количество строк
const cols = 5;   // Количество столбцов


let random_number_3 = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Math.floor(Math.random() * 57) + 5)
);
quickSort(random_number_3);
console.log('#3 Сортировка элементов в порядке возрастания: ',random_number_3);


// #nomer 4

rl.question('Введите количество студентов: ', (n) => {
    n = parseInt(n);
    let students = [];

    function getStudentNames(i) {
        if (i < n) {
            rl.question(`Введите имя студента ${i + 1}: `, (name) => {
                students.push(name);
                getStudentNames(i + 1);
            });
        } else {
            students.sort(); // Сортировка по алфавиту
            console.log('Список студентов в алфавитном порядке:');
            students.forEach(student => console.log(student));
            rl.close();
        }
    }

    getStudentNames(0);
});