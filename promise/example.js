const p = new Promise((res, rej) => {
  //pending state
  setTimeout(() => {
    const msg = "hello!";
    res(msg); // -> fulfilled state
  }, 1000);
});

const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //then callback이 실행
      resolve("안녕하세요!");
      //catch callback이 실행
      //   reject(new Error("unhandled type"));
    }, 2000);
  });
};

myPromise()
  .then((response) => {
    console.log(`${response} 2000ms 후에 fulfilled 됩니다`);
  })
  .catch((error) => {
    console.log(`${error} 2000ms 후에 rejected 됩니다`);
  });
