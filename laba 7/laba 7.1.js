// nomer 1
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let inputLines = [];

console.log('Напиши кол-во N строк. Затем вводится N строк с описаниями заявок - по два числа в каждом si и fi.');

rl.on('line', (line) => {
    inputLines.push(line);
    if (inputLines.length === parseInt(inputLines[0]) + 1) {
        rl.close();
    }
}).on('close', () => {
    function cmp(a, b) {
        if ((a[1] - a[0]) !== (b[1] - b[0])) {
            return (a[1] - a[0]) - (b[1] - b[0]);
        }
        return a[0] - b[0];
    }

    let n = parseInt(inputLines[0]);
    let sf = inputLines.slice(1, n + 1).map(line => line.split(' ').map(Number));

    sf.sort(cmp);

    let count = 0;
    let used = new Array(1441).fill(false);

    for (let seg of sf) {
        let flag = true;
        for (let i = seg[0]; i < seg[1]; i++) {
            if (used[i]) {
                flag = false;
                break;
            }
        }

        if (flag) {
            for (let i = seg[0]; i < seg[1]; i++) {
                used[i] = true;
            }
            count++;
        }

        if (count > n) {
            break;
        }
    }

    console.log("Максимальное количество лекций:", count);
});