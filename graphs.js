
class Dictionary {
  constructor() {
    this.items = {};
  }
  set(key, value) {
    this.items[key] = value;
  }
  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }
  has(key) {
    return this.items.hasOwnProperty(key);
  }
  get(key) {
    return this.items[key];
  }
  clear() {
    this.items = {};
    return this.items;
  }
  size() {
    return Object.keys(this.items).length;
  }
  keys() {
    return Object.keys(this.items);
  }
  values() {
    return Object.values(this.items);
  }
  getItems() {
    return this.items;
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    for (var i = 0; i < arguments.length; i++) {
      this.items.push(arguments[i]);
    }
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    //returns top element from stack
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

class Graph {
  constructor() {
    this.verticies = [];
    this.adjList = new Dictionary();
  }

  addVertex(v) {
    this.verticies.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  toString() {
    let s = '';
    for (let i = 0; i < this.verticies.length; i++) {
      s += this.verticies[i] + ' -> ';
      let neighbors = this.adjList.get(this.verticies[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' ';
      }
      s += '\n';
    }
    return s;
  }

  printNode(value) {
    console.log('Visited vertex: ' + value);
  }

  initializeColor() {
    let color = [];
    for (let i = 0; i < this.verticies.length; i++) {
      color[this.verticies[i]] = 'white';
    }
    return color;
  }

  breathFirstSearch(v, callback) {
    let color = this.initializeColor();
    let queue = new Queue();
    queue.enqueue(v);

    while (!queue.items.isEmpty) {
      let u = queue.dequeue();
      let neighbors = this.adjList.get(u);
      color[u] = 'grey';
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === 'white') {
          color[w] = 'grey';
          queue.enqueue(w);
        }
      }
      color[u] = 'black';
      if (callback) {
        callback(u);
      }
    }
  }
}

let graph = new Graph();
let myVerticies = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVerticies.length; i++) {
  graph.addVertex(myVerticies[i]);
}

let printNode  = (value) => {
  console.log('Visited vertex: ', value)
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

graph.breathFirstSearch(myVerticies[0], printNode); 