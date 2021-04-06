function createPromise<T>(x : T, timeout : number){
    return new Promise <T>((resolve, reject) =>{
        setTimeout(() =>{
            resolve(x)
        }, timeout)
    })
}

createPromise(1, 100).then(v => console.log(v))
createPromise("1", 100).then(v => console.log(v))

function createTuple<T, U>(v1 : T, v2:U) : [T,U] {
    return [v1,v2]
}

const t1 = createTuple("user1", 1000)
const t2 = createTuple(10123412, "user2")