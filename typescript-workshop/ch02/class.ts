interface User{
    name : string
}

interface Product{
    id : string
    price : number
}

class Cart{
    constructor(public user : User, private store : object = {}){ }
    
    public put(id : string, product : Product){
        this.store[id] = product
    }
    public get(id : string) {
        return this.store
    }
}

class PromotionCart extends Cart {
    addPromotion(){ 
        // some code
    }
}


const cartJohn = new Cart({name : "john"})
cartJohn.put("Wony", {id : "wony", price : 100})
cartJohn.get("Wony")
const cartJay = new Cart({name : "jay"})


const cart2 = new PromotionCart({name : "jack"})
cart2.addPromotion()