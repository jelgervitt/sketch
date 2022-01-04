// create a reference to the container div that will hold the squares
const container = document.querySelector('.container');
const button = document.querySelector('button');
let gridCells;


// on page load, main container fills with 16 rows, and 16 squares
window.addEventListener('load', () => {
    for (let i = 0 ; i < 16 ; i++) {
        let row = document.createElement('div');
        row.class = 'row;';
        container.appendChild(row);   
        for (let i = 0 ; i < 16 ; i++) {
            let square = document.createElement('div');
            square.classList = 'square';
            row.appendChild(square);
            etch(square);
        }
    }
})

// on hover, cell changes to black (etching)
function etch(square) {
    square.addEventListener ('mouseover', () => {
        square.classList.add('etched');
        console.log("etched");
    })
}

// clear button clears the sketch, and asks for new grid size
button.addEventListener('click', () => {
    // clear the sketch
    const etchedCells = Array.from(document.querySelectorAll('.etched'));
    etchedCells.forEach(cell => cell.classList.remove('etched'));
    // ask for size of grid
    let gridSize = prompt("Enter the new grid size (cells/side)");
    if (gridSize !== null) {
        // gridCells = 960 / 


    }
})

// the container is 960px, build a function that sets 
// the pixel width and height to 960/entered amount (currently 64