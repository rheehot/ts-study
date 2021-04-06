class Q<T>{
    list : T[] = []
    get length(){
        return this.list.length
    }
    enqueue(item : T){
        console.log("enqueue : ", item)
        this.list.push(item)
    }

    dequeue(){
        return this.list.shift()
    }
}

const q = new Q<number>()
q.enqueue(0)
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)

while (q.length > 0){
    console.log(q.dequeue())
}