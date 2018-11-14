import Board from './board.js';
import Cell from './cell.js';




const Minesweeper = (() => {

    let state = {
        grid: null,
        cols: null
    }
    // let grid;
    // let cols;
    let rows;
    let w = 40;

    const render = () => {
        //Board.init();

        state.cols = Math.floor(400 / w);
        rows = Math.floor(400 / w)
        state.grid = make2DArray(state.cols, rows);
        for(let i = 0; i < state.cols; i++){
            for(let j = 0; j < rows; j++){
                state.grid[i][j] = new Cell(i * w, j * w, w);
            }
        }
    }

    const init = () => {
        render()
        drawLines()
    }


    function make2DArray(cols, rows) {
        
        //Create a array with a certain number of colums,
        //then for every column make that an array with rows
        let arr = new Array(cols);
        for(let i = 0; i < arr.length; i++){
            arr[i] = new Array(rows);
        }
        return arr;
    }

    const drawLines = () => {
        const { cols, grid } = state

        for(let i = 0; i < cols; i++){
            for(let j = 0; j < rows; j++){
                grid[i][j].show();
            }
        }
    }
    



    return {
        init
    }

})();

Minesweeper.init();