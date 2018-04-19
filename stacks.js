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

const divideByTwo = (num) => {
  let remStack = new Stack();
  let rem;
  let binaryString = '';

  while (num > 0) {
    rem = Math.floor(num % 2);
    remStack.push(rem);
    num = Math.floor(num / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

divideByTwo(10);