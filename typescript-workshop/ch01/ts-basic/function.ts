const buildUserInfo = (name = "-", email = "-") => {
    return { name, email }
}

const user = buildUserInfo()

const add = (x : number, y : number) => x + y

interface Storage{ a : string}
interface ColdStorage{ b : string}

function store(type :"통조림") : Storage
function store(type :"아이스크림") : ColdStorage

function store(type :"통조림" | "아이스크림") {
    if (type === "통조림"){
        return {a : "통조림"}
    } else if (type ==="아이스크림") {
        return {b : "아이스크림"}
    }else{
        return new Error("unsupported type")
    }
}

const can = store("통조림")
console.log(can.a)
const ice = store("아이스크림")
console.log(ice.b)




