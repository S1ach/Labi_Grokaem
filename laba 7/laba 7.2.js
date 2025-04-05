// nomer 2
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cmp(a, b) {
    return (a[0] + a[1]) < (b[0] + b[1]);
}

function main() {
    rl.question("Введите количество пар: ", (n) => {
        n = parseInt(n);
        const a = [];

        let count = 0;
        let all = 0;
        let i = 0;

        function getPair() {
            if (i < n) {
                rl.question(`Введите пару (два числа через пробел): `, (input) => {
                    const pair = input.split(' ').map(Number);
                    a.push(pair);
                    i++;
                    getPair();
                });
            } else {
                a.sort(cmp);

                for (let i = 0; i < a.length; i++) {
                    const p = a[i];
                    if (all <= p[1]) {
                        all += p[0];
                        count++;
                    }
                }

                console.log(`Количество выбранных пар: ${count}`);
                rl.close();
            }
        }

        getPair();
    });
}

main();

// 5
// 3 4
// 1 2
// 5 6
// 2 3
// 4 5