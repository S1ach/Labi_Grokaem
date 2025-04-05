const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function dijkstra_algorithm(graph, n, start, finish) {
    const INT32_MAX = 2147483647;
    const distance = new Array(n).fill(INT32_MAX);
    distance[start] = 0;

    const used = new Array(n).fill(false);

    for (let i = 0; i < n; ++i) {
        let from = -1;
        for (let v = 0; v < n; ++v) {
            if (!used[v] && (from === -1 || distance[v] < distance[from])) {
                from = v;
            }
        }

        used[from] = true;
        for (let to = 0; to < n; ++to) {
            if (graph[from][to] !== -1 && (distance[from] + graph[from][to] < distance[to])) {
                distance[to] = distance[from] + graph[from][to];
            }
        }
    }

    return distance[finish];
}

rl.question('Введите количество вершин: ', (n) => {
    n = parseInt(n);
    const cost = [];
    let count = 0;

    function readCost() {
        if (count < n) {
            rl.question(`Введите стоимость для вершины ${count + 1}: `, (c) => {
                cost.push(parseInt(c));
                count++;
                readCost();
            });
        } else {
            const graph = Array.from({ length: n }, () => new Array(n).fill(-1));
            rl.question('Введите количество рёбер: ', (m) => {
                m = parseInt(m);
                let edgeCount = 0;

                function readEdge() {
                    if (edgeCount < m) {
                        rl.question('Введите ребро (u v): ', (edge) => {
                            const [u, v] = edge.split(' ').map(Number);
                            graph[u - 1][v - 1] = cost[u - 1];
                            graph[v - 1][u - 1] = cost[v - 1];
                            edgeCount++;
                            readEdge();
                        });
                    } else {
                        console.log(dijkstra_algorithm(graph, n, 0, n - 1));
                        rl.close();
                    }
                }

                readEdge();
            });
        }
    }

    readCost();
});
