// create a reference to the container div that will hold the squares
const container = document.querySelector('.container');
const button = document.querySelector('button');
const containerSize = container.clientHeight;



// on page load, main container fills with 16 rows, and 16 squares
window.addEventListener('load', drawSquares(16))

function drawSquares(cellAmt) {
    let cellSize = containerSize / cellAmt;
    for (let i = 0 ; i < cellAmt ; i++) {
        let row = document.createElement('div');
        row.classList = 'row';
        container.appendChild(row);   
        for (let i = 0 ; i < cellAmt ; i++) {
            let square = document.createElement('div');
            square.classList = 'square';
            square.style.height = cellSize + 'px';
            square.style.width = cellSize + 'px';
            row.appendChild(square);
            etch(square);
        }
    }
};

// on hover, cell changes to black (etching)
function etch(square) {
    square.addEventListener ('mouseover', () => {
        square.classList.add('etched');
    })
}

// clear button clears the sketch, and asks for new grid size
button.addEventListener('click', () => {
    const etchedCells = Array.from(document.querySelectorAll('.etched'));
    // ask for size of grid
    let gridSize = prompt("Enter the new grid size (cells/side)");
    // Cap the grid size at 100 cells
    while (gridSize > 100) gridSize = prompt ("Please enter a max amt of 100 cells");
    // if a correct number is entered, redraw the grid
    if (gridSize !== null && gridSize <= 100) {
        while (container.firstChild) container.removeChild(container.lastChild);
        drawSquares(gridSize);
    }
    // otherwise, just clear the grid
    etchedCells.forEach(cell => cell.classList.remove('etched'));
})

// the container is 960px, build a function that sets 
// the pixel width and height to 960/entered amount (currently 64