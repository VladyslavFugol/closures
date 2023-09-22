// implement once
function once(func) {
  let isCalled = false;
  let result;

  return function (...args) {
    if (isCalled) return result;

    result = func.call(this, ...args);
    isCalled = true;

    return result;
  }
}

// Understanding closures - the basics
function buildFun(n){
  var res = []

  for (let i = 0; i< n; i++){
    res.push(function(){ return i });
  }
  return res
}

// Closures and Scopes
function createFunctions(n) {
  var callbacks = [];

  for (let i=0; i<n; i++) {
    callbacks.push(function() { return i });
  }

  return callbacks;
}

//Memoized Fibonacci
function memo(func) {
  const cache = new Map();

  return function(n) {
    if (cache.get(n)) return cache.get(n);

    cache.set(n, func(n));

    return cache.get(n);
  }
}

const fibonacci = memo(function (n) {
  if (n == 0 || n == 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
});

//Лічильник
function createCounter() {
  let counter = 0;

  function increment() {
    counter++;
  }

  function getValue() {
    return counter;
  }

  return {
    increment,
    getValue,
  };
}
//Додавання з замиканням
const addWithX = (x) => (y) => x + y;

//Інкапсуляція даних
function createPerson(personName, personAge) {
  let name = personName;
  let age = personAge;

  function getName() {
    return name;
  }

  function getAge() {
    return age;
  }

  function setAge(newAge) {
    age = newAge;
  }

  return {
    getName,
    getAge,
    setAge,
  };
}

//Таймери з замиканням
function createTimer(ms) {
  let timer;
  let time = 0;

  function start() {
    time = new Date().getTime();
    timer = setInterval(() => {}, ms);
  }

  function stop() {
    clearInterval(timer);
  }

  function getTime() {
    return (new Date().getTime() - time) / 1000;
  }

  return {
    start,
    stop,
    getTime,
  };
}

//Модуль з приватними методами та змінними
const myFunctionStorage = (function () {
  const storage = {};

  function addFnToStorage(fnName, fn) {
    storage[fnName] = fn;
  }

  function getFnFromStorage(fnName) {
    return storage[fnName];
  }

  function getFnNamesFromStorage() {
    return getKeysFromObject(storage);
  }

  function getKeysFromObject(obj) {
   return Array.from(Object.keys(obj));
  }

  return {
    addFnToStorage,
    getFnFromStorage,
    getFnNamesFromStorage,
  };
})();

