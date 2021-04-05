interface Person{
    name : string
    say(message : string) : void
}

interface Programer {
    writeCode(requirment : string) : string
}

class KoreanProgramer implements Person, Programer{
    constructor(public name : string) {
    }
    
    say(message : string): void{
        console.log(`Hi ! ${message}`)
    }

    writeCode(requirment : string) {
        console.log(requirment)
        return requirment + "....."
    }

    loveKimchi(){
        console.log("Love~ Kimchi")
    }
}

const wony = new KoreanProgramer("JeongWonYoung")
wony.writeCode("import ... from ....")