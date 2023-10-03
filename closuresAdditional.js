//memo
function memo(func) {
  const cache = {};

  return function (...args) {
    const key = args.toString();

    if (cache[key]) return cache[key];

    cache[key] = func.call(null, args);

    return cache[key];
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