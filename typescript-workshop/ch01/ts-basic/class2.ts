interface Person{
    name : string
    say(message : string) : void
}

interface Programer {
    writeCode(requirment : string) : string
}

abstract class Korean implements Person{
    public abstract jumin : number
    
    constructor(public name : string){}

    say(message: string): void {
        console.log(message)
    }

    abstract loveKimchi() : void   
}

class KoreanProgramer extends Korean implements Programer{
    constructor(public name : string = "wony", public jumin : number = 95018) {
        //parent constructor call
        super(name)
    }
    
    say(message : string): void{
        console.log(`Hi ! ${message}`)
    }

    writeCode(requirment : string) : string {
        console.log(requirment)
        return requirment + "....."
    }

    loveKimchi() : void {
        console.log("Love~ Kimchi")
    }
}

const wony = new KoreanProgramer("JeongWonYoung")
wony.writeCode("import ... from ....")
