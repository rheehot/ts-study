const outer = () =>{
    if (true){
        let score : number
        score = 30
    } 
    for(var i = 0; i < 3; i++){
        setTimeout(() =>{
            console.log(i)
        }, 100)
    }

}

outer()