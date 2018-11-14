const Board = (() => {

    let canvas;
    let context;

    const init = () => {
        canvas = document.getElementById('minesweeper');
        context = canvas.getContext("2d");
        context.rect(100, 100, 400, 400)
        context.stroke();
        // baseLine1();
    }

    return {
        init
    }

})();

export default Board;