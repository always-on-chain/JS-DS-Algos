class Set {
  constructor() {
    this.items = {};
  }
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }
  delete(value) {
    if (!this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }
  has(value) {
    return this.items.hasOwnProperty(value);
  }
  clear() {
    this.items = [];
  }
  size() {
    return Object.keys(this.items).length;
  }
  values() {
    return Object.values(this.items);
  }
  union(otherSet) {
    let unionSet = new Set();

    for (var key in this.items) {
      unionSet.add(this.items[key]);
    }
    for (var key in otherSet.items) {
      unionSet.add(otherSet.items[key]);
    }

    return unionSet;
  }
  intersection(otherSet) {
    let intersectionSet = new Set();
    let values = this.values();

    for (var i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet;
  }
  difference(otherSet) {
    let differenceSet = new Set();
    let values = this.values();

    for (var i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }

    return differenceSet;
  }
  subSet(otherSet) {
    let values = this.values();

    for (var i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        return false;
      }
    }

    return true;
  }
}

const testSubSetMethod = () => {
  let setA = new Set();
  setA.add(1);
  setA.add(2);

  let setB = new Set();
  setB.add(1);
  setB.add(2);
  setB.add(3);

  let setC = new Set();
  setC.add(2);
  setC.add(3);
  setC.add(4);

  console.log(setA.subSet(setB)); //true
  console.log(setA.subSet(setC)); //false
}
testSubSetMethod();

const testDifferenceMethod = () => {
  let setA = new Set();
  setA.add(1);
  setA.add(2);
  setA.add(3);

  let setB = new Set();
  setB.add(2);
  setB.add(3);
  setB.add(4);

  let intersection = setA.difference(setB);
  return intersection.values();
}
testDifferenceMethod();

const testIntersectionMethod = () => {
  let setA = new Set();
  setA.add(1);
  setA.add(2);
  setA.add(3);

  let setB = new Set();
  setB.add(2);
  setB.add(3);

  let intersection = setA.intersection(setB);
  return intersection.values();
}
testIntersectionMethod();

const testUnionMethod = () => {
  let setA = new Set();
  setA.add(1);
  setA.add(2);
  setA.add(3);

  let setB = new Set();
  setB.add(3);
  setB.add(4);
  setB.add(5);
  setB.add(6);

  let unionAB = setA.union(setB);
  return unionAB.values();
}
testUnionMethod();





