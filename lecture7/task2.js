function step1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Шаг 1 выполнен");
        }, 1000);
    });
}

function step2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Шаг 2 выполнен");
        }, 2000);
    });
}

step1()
  .then(result1 => {
    console.log(result1);
    return step2();
  })
  .then(result2 => {
    console.log(result2);
  })