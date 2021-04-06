interface User{
    name : string
}
interface Action{
    do() : void
}

//intersection
function createUserAction(u : User, a : Action) : User & Action {
    return {...u, ...a}
}

const u = createUserAction({name : 'wony'},  {do(){}})



function compare(x : string | number,y : string | number){
    if(typeof x === 'number' && typeof y === 'number'){
        return x === y ? 0 : x > y ? 1 : -1
    }
    if(typeof x === 'string' && typeof y === 'string'){
        return x.localeCompare(y)
    }
    throw Error('not supported type')
}

const v = compare(1,2)
const s = compare("a","b")
const r = compare("a",1)

// type guard
function isAction(v : User | Action) : v is Action{
    return (<Action>v).do !== undefined
}

function process(v : User | Action){
    if(isAction(v)){
        v.do()
    }else{
        console.log(v.name)
    }
}