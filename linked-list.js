function LinkedList() {

  let Node = function(element) {
    this.element = element;
    this.next = null;
  }

  this.length = 0;
  this.head = null;

  this.append = (element) => {
    let node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  this.removeAt = (position) => {
    //checking for out of bounds values
    let current;
    let previous;
    let index;

    if (position > -1 && position < this.length) {
      current = this.head;
      index = 0;
      if (position === 0) {
        this.head = current.next;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  }

  this.insert = (position, element) => {

    if (position >= 0 && position <= this.length) {
      let node = new Node(element);
      let current = this.head;
      let previous;
      let index = 0;

      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        node.next = current;
        previous.next = node;
      }
      this.length++;
      return true; 
    } else {
      return false;
    }
  }
}

function DoublyLinkedList() {
  let Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }

  this.length = 0;
  this.head = null;
  this.tail = null;

  this.insert = (position, element) => {
    if (position >= 0 && position <= length) {
      let node = new Node(element);
      let current = this.head;
      let previous;
      let index = 0;

      if (position === 0) {
        if (!head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      } else if (position === length) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        node.next = current;
        previous.next = node;

        current.prev = node;
        node.prev = previous;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }
}