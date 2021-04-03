// interface
interface Tv{
    turnOn() : boolean
    turnOff() : void
}

interface Cell {
    row : number,
    col : number,
    piece? : Piece
}

interface Piece{
    move(from: Cell, to : Cell) : boolean
}

// object
const myTv : Tv = {
    turnOn(){
        return true
    },
    turnOff(){}
}

// funtion
const tryTurnOn = (tv:Tv) => {
    tv.turnOn()
}

const createBoard = () =>{
    const cells : Cell[] = []
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++){
            cells.push({
                row,
                col,
            })
        }
    }
    return cells
}

tryTurnOn(myTv)
const board = createBoard()
board[0].piece = {
    move(from : Cell, to :Cell){
        // some code
        return true
    }
}