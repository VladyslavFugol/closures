// throttle
function throttle(func, wait) {
  let isWaited = true;
  let lastArgs = null;

  return function(...args) {
    if (isWaited) {
      func.apply(this, args);
      isWaited = false;
      setTimeout(() => {
        if (lastArgs) {
          func.apply(this, lastArgs);
        }
        isWaited = true;
      }, wait);
    } else {
      lastArgs = args;
    }
  }
}

// debounce with leading and trailing
function debounce(func, wait, option = {leading: false, trailing: true}) {
  let timerId = null;
  let isLeaded = false;
  let lastArgs = null;

  const { trailing, leading } = option;

  return function(...args) {
    if (leading && !isLeaded) {
      func.apply(this, args);
      isLeaded = true;
      return;
    } else {
      lastArgs = args;
    }

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      if (trailing) {
        func.apply(this, lastArgs);
      }
      isLeaded = false;
    }, wait);
  }
}

// myMap
Array.prototype.myMap = function(callback, thisArgs) {
  const result = [];

  this.forEach((item, index, array) => {
    result[index] = callback.apply(thisArgs, [item, index, array]);
  })

  return result;
}

// myReduce
Array.prototype.myReduce = function (callback, initialValue) {
  const hasInitialValue = arguments.length > 1;

  if (!hasInitialValue && this.length === 0) {
    throw new Error();
  }

  let result = hasInitialValue ? initialValue : this[0];

  for (let i = hasInitialValue ? 0 : 1; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }

  return result;
}

// myBind
Function.prototype.myBind = function (context) {
  return (...args) => this.apply(context, args);
};

// Калькулятор
const calculator = {
  num: null,

  add(addNum) {
    this.num += addNum;
  },
  subtract(subtractNum) {
    this.num -= subtractNum;
  },
  multiply(multiplyNum) {
    this.num *= multiplyNum;
  },
  divide(divideNum) {
    this.num /= divideNum;
  },
  getResult() {
    return this.num;
  },
};

// Калькулятор з ланцюгом викликів
const calculator = {
  num: null,

  add(addNum) {
    this.num += addNum;
    return this;
  },
  subtract(subtractNum) {
    this.num -= subtractNum;
    return this;
  },
  multiply(multiplyNum) {
    this.num *= multiplyNum;
    return this;
  },
  divide(divideNum) {
    this.num /= divideNum;
    return this;
  },
  getResult() {
    return this.num;
  },
};