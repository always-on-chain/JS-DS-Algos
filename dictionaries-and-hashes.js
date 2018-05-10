
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

let dictionary = new Dictionary;
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
dictionary.delete('John');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());

class HashTable {
  constructor() {
    this.table = [];
  }
  djb2HashCode(key) {
    let hash = 5381;
    for (var i = 0; i < key.length; i++) {
      // hash += key[i];
      hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
  } 
  put(key, value) {
    let position = this.djb2HashCode(key);
    console.log(position + ' - ' + key);
    // this.table[position] = value;

    //handles collicions
    if (this.table[position] === undefined) {
      this.table[position] = new ValuePair(key, value);
    } else {
      var index = position++;
      while(this.table[index] !== undefined) {
        index++;
      }
      this.table[index] = new ValuePair(key, value);
    }
  }
  remove(key) {
    var position = this.djb2HashCode(key);

    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        return this.table[position] = undefined;
      } else {
        var index = position++;
        while (this.table[index] === undefined || this.table[index].key !== key) {
          index++;
        }
        if (this.table[index].key === key) {
          return this.table[index] = undefined;
        }
      } 
    }
    return undefined;
  }
  get(key) {
    var position = this.djb2HashCode(key);

    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      } else {
        var index = position++;
        while (this.table[index] === undefined || this.table[index].key !== key) {
          index++;
        }
        if (this.table[index].key === key) {
          return this.table[index].value;
        }
      } 
    }
    return undefined;
  }
  print() {
    for (var i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + ': ' + this.table[i]);
      }
    }
  }
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

let hash = new HashTable;
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');
hash.get('Sue');

