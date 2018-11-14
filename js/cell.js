class Cell {
    constructor(x, y, w){
        this.x = x;
        this.y = y;
        this.w = w;
        this.mines = true;
        this.reveal = true;
    }
    show() {
        let canvas = document.getElementById('minesweeper');
        let context = canvas.getContext("2d");
        context.rect(this.x, this.y, this.w, this.w)
        context.stroke();
    }
}

export default Cell;