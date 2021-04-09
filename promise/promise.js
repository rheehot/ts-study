//Promise 객채 : executor 함수를 인자로 갖고
//              이는 resolve 와 reject를 인자로 가짐.
// (resolve, reject) => {...}

// 기존 pending state => fulfilled state
const myPromise2_resolve = new Promise((resolve, reject) => {
  //...
  // 비동기 상태를 처리..
  //...
  resolve(); //
});

// 기존 pending state => rejected state
const myPromise2_reject = new Promise((resolve, reject) => {
  //...
  // 비동기 상태를 처리..
  //...
  reject();
});
