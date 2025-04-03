const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function dijkstra_algorithm(graph, n, start, finish) {
    const INF = Number.MAX_SAFE_INTEGER;
    const distance = new Array(n).fill(INF);
    distance[start] = 0;

    const used = new Array(n).fill(false);

    for (let i = 0; i < n; ++i) {
        let from = -1;
        for (let v = 0; v < n; ++v) {
            if (!used[v] && (from === -1 || distance[v] < distance[from])) {
                from = v;
            }
        }

        if (from === -1) break;

        used[from] = true;
        for (let to = 0; to < n; ++to) {
            if (graph[from][to] !== -1 && distance[from] + graph[from][to] < distance[to]) {
                distance[to] = distance[from] + graph[from][to];
            }
        }
    }

    return distance[finish] === INF ? -1 : distance[finish];
}

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    const n = parseInt(await askQuestion("Введите количество узлов: "));
    const s = parseInt(await askQuestion("Введите начальный узел: ")) - 1;
    const f = parseInt(await askQuestion("Введите конечный узел: ")) - 1;
    const graph = [];

    for (let i = 0; i < n; ++i) {
        const row = (await askQuestion(`Введите строку ${i + 1} графика: `)).split(' ').map(Number);
        graph.push(row);
    }

    const result = dijkstra_algorithm(graph, n, s, f);
    if (result === -1) {
        console.log("Нет пути между этими узлами");
    } else {
        console.log(`Кратчайший путь: ${result}`);
    }

    rl.close();
}

main();
