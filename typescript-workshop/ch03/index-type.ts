//인덱스 시그니처
interface Props {
    //only number or string type
    name : string
    [key : string] : string
}

const p : Props = {
    name : 'hello',
    a : 'd',
    b : 'e',
    c : "3",
    0 : 'd_',
    1 : 'b'
}

p[0] // d_
p['a'] // d

let keys : keyof Props


interface User{
    name : string,
    age : number,
    hello(msg : string) : void
}

let keyOfUser : keyof User
