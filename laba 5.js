// Nomer 1
const graph = {
    'H': "IGF",
    'I': "HJ",
    'F': "HG",
    'G': "FHJ",
    'J': "IGC",
    'E': "GAS",
    'A': "ES",
    'S': "AEDB",
    'D': "SB",
    'B': "SDC",
    'C': "BJ"
};

const start = 'I', finish = 'S';

const distance = {};
const prev = {};

for (const node in graph) {
    distance[node] = -1;
}
distance[start] = 0;
prev[start] = '$';

const queue = [start];

while (queue.length > 0) {
    const from = queue.shift();
    for (const to of graph[from]) {
        if (distance[to] === -1) {
            queue.push(to);
            distance[to] = distance[from] + 1;
            prev[to] = from;
        }
    }
}

console.log(distance[finish]);

let current = finish;
let path = current;
while (prev[current] !== '$') {
    path += prev[current];
    current = prev[current];
}

console.log('Самый кратчайший путь:', path);
