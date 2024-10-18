// function MyArray() {
//   this.length = 0;
// }

// MyArray.prototype.push = function (...args) {
//   for (const v of args) {
//     this[this.length++] = v;
//   }
//   return this.length;
// };

// MyArray.prototype.forEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// MyArray.prototype.filter = function (callback) {
//   const newArr = new MyArray();
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       newArr.push(this[i]);
//     }
//   }
//   return newArr;
// };
// MyArray.prototype.some = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       return true;
//     }
//   }
//   return false;
// };
// MyArray.prototype.every = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callback(this[i], i, this)) {
//       return false;
//     }
//   }
//   return true;
// };
// MyArray.prototype.map = function (callback) {
//   const newArr = new MyArray();
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(callback(this[i], i, this));
//   }
//   return newArr;
// };
// const myArray = new MyArray();
// myArray.push(11, 22, 33);
// console.log(myArray);
// console.log(myArray.pop());
// console.log(myArray);
class MyArray {
  constructor() {
    this.length = 0;
  }
  push(...args) {
    for (const v of args) {
      this[this.length++] = v;
    }
    return this.length;
  }
  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
  filter(callback) {
    const newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArr.push(this[i]);
      }
    }
    return newArr;
  }
  some(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  }
  every(callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  }
  map(callback) {
    const newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArr.push(callback(this[i], i, this));
    }
    return newArr;
  }
  pop() {
    const lastElem = this[this.length - 1];
    delete this[this.length - 1];
    return lastElem;
  }
}
const myArray = new MyArray();
myArray.push(2224, 5454, 32, 5);
console.log(myArray);
myArray.forEach((value) => console.log(value));
console.log(myArray.some((value) => 2 <= value <= 10));
console.log(myArray.map((value) => value * 2));
console.log(myArray.pop());
console.log(myArray);
