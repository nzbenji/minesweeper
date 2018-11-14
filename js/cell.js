class Cell {
    constructor(x, y, w){
        this.x = x;
        this.y = y;
        this.w = w;
        //Generate a random number of mines 
        if(Math.random(1) < 0.3) {
            this.mines = true;
        } else {
            this.bee = false;
        }   
        this.reveal = true;
    }
    show() {
        let canvas = document.getElementById('minesweeper');
        let context = canvas.getContext("2d");
        context.rect(this.x, this.y, this.w, this.w)
        context.stroke();

        if(this.reveal){
            if(this.mines){
                let canvas = document.getElementById('minesweeper');
                let context = canvas.getContext("2d");
                context.beginPath();
                context.arc(this.x + this.w * 0.5, this.y + this.w * 0.5, 10, 2 * Math.PI, false);
                context.stroke();
            }
        }
    }
}

export default Cell;