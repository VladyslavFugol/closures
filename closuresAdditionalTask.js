//memo
function memo(func) {
  const cache = new Map();

  return function (...args) {
    const key = args.some((arg) => typeof arg === 'object')
      ? args[0]
      : args.toString()

    if (cache.get(key)) return cache.get(key);

    cache.set(key, func.call(this, args));

    return cache.get(key);
  }
}

//timer
function createTimer(defaultMs) {
  let ms = defaultMs > 100 ? defaultMs : 100;
  let timer = null;
  let time = 0;

  function start() {
    timer = setInterval(() => {
      time += ms;
    }, ms);
  }

  function stop() {
    clearInterval(timer);
  }

  function getTime() {
    return time / 1000;
  }

  return {
    start,
    stop,
    getTime,
  };
}