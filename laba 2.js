const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



// #nomer 1 Дано натуральное число n. Выведите все числа от 1 до n.

function vivod_chisel(n) {
    if (n === 0) {
        return;
    }
    console.log(n);
    vivod_chisel(n - 1);
}



// #nomer 2 Даны два целых числа A и В (каждое в отдельной строке).
// Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае

function vivod_chisel2(a, b) {
    console.log(a);

    if (a === b) {
        return;
    }

    if (a < b) {
        vivod_chisel2(a + 1, b);
    } else {
        vivod_chisel2(a - 1, b);
    }
}

// #nomer 3 Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки, списки,
// массивы (ну и циклы, разумеется).
function summa(n) {
    if (n === 0) {
        return 0;
    }
    return n % 10 + summa(Math.floor(n / 10));
}



// #nomer 4 Дано натуральное число n>1.
// Выведите все простые делители этого числа в порядке возрастания.
// Алгоритм должен иметь сложность О(n)

function del(n, k = 2, current = true) {
    if (n === 1) {
        return;
    }
    if (k*k > n) {
        console.log(n);
        return;
    }

    if (n % k === 0) {
        if (current) {
            console.log(k);
        }
        del(n / k, k, false);
    } else {
        del(n, k + 1, true);
    }
}



rl.question("Задание#1 Кол-во номеров: ", (count) => {
    count = parseInt(count);
    vivod_chisel(count);

    rl.question("Задание#2: Введите первое число (A): ", (a) => {
        rl.question("Задание#2: Введите второе число (B): ", (b) => {
            a = parseInt(a);
            b = parseInt(b);

            vivod_chisel2(a, b);

            rl.question("Задание#3: Введите число для вычисления суммы его цифр: ", (n) => {
                n = parseInt(n);
                console.log('Сумма цифр числа', n,  'равна', summa(n));
                rl.question('Задание#4: Введите n: ', (answer) => {
                    const n = parseInt(answer, 10);
                    if (!isNaN(n) && n > 0) {
                        del(n);
                    } else {
                        console.log('Введите корректное положительное число');
                    }
                    rl.close();
                });
            });
        });
    });
});