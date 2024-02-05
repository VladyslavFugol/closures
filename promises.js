// promisify
function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      const callback = (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      };

      func.apply(this, [...args, callback]);
    });
  };
}

//Promise all with async await
async function all(promises) {
  const result = [];

  for (let i = 0; i < promises.length; i++) {
    result[i] = await promises[i];
  }

  return Promise.resolve(result);
}

//Promise all with promises
function all(promises) {
  const result = [];

  return new Promise((resolve, reject) => {
    if (promises.length === 0) resolve([]);

    let counter = 0;
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .catch(reject)
        .then((res) => {
          result[i] = res;
          counter++;
          if (counter === promises.length) resolve(result);
        });
    }
  });
}

//throttlePromises with async await
async function throttlePromises(funcs, max){
  const result = [];

  while (funcs.length) {
    const chunk = funcs
      .splice(0, max)
      .map((func) => func());

    const response = await Promise.all(chunk);

    result.push(...response);
  }

  return Promise.resolve(result);
}

//throttlePromises with promise
function throttlePromises(funcs, max) {
  return new Promise((resolve, reject) => {
    const result = [];

    (function loop() {
      const chunk = funcs
        .splice(0, max)
        .map((func) => func());

      Promise.all(chunk)
        .catch(reject)
        .then((data) => {
          result.push(...data);

          if (!funcs.length) resolve(result);
          else loop();
        })
    })();
  });
}
