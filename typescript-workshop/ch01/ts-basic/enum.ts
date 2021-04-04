enum StartbuksGrade{
    WELCOME,
    GREEN,
    GOLD
}

function getDiscount(v : StartbuksGrade) : number{
    switch(v){
        case StartbuksGrade.WELCOME:
            return 0
        case StartbuksGrade.GREEN:
            return 0.05
        case StartbuksGrade.GOLD:
            return 0.1
    }
}

console.log(getDiscount(StartbuksGrade.GREEN))
console.log(StartbuksGrade.GREEN)