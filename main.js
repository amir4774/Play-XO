// Get Elements
const cells = document.querySelectorAll('.cell');
const restartBtn = document.getElementById('game-restart');
const statusGame = document.getElementById('game-status');
let game = ['', '', '', '', '', '', '', '', ''];
let xTurn = true;
let stopGame = false;

// Start Code
statusGame.innerHTML = `Player 'X'`;

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        // Check if the game is stopped or not
        if(!stopGame) { 
            // If it's X's turn
            if(xTurn) {
                statusGame.innerHTML = `Player 'O'`;
                // Set cell content as 'X'
                cell.innerHTML = 'X';
                // Apply CSS class for X's turn
                cell.classList.add('x-turn');
                // Change turn to O's turn
                xTurn = false;
                // Update the game state with X
                game[cell.getAttribute('id')] = 'X'; 
            } else { // If it's O's turn
                statusGame.innerHTML = `Player 'X'`;
                // Set cell content as 'O'
                cell.innerHTML = 'O';
                // Apply CSS class for O's turn
                cell.classList.add('o-turn');
                // Change turn to X's turn
                xTurn = true;
                // Update the game state with O
                game[cell.getAttribute('id')] = 'O'; 
            }
            // Check if the game is over
            stopGame = checkGame();
        }
    });
});

function checkGame() {
    // Check Row
    
    // If there is a win in the first row
    if(game[0] === game[1] && game[1] === game[2]) {
        // If the cell is not empty
        if(game[0] !== '') {
            // Display the winning player
            statusGame.innerHTML = `Player '${game[0]}' won`;
            // Return true to stop the game
            return true;
        }
    }
    
    // Similar checks for other rows, columns, and diagonals

    if(game[3] === game[4] && game[4] === game[5]) {
        if(game[3] !== '') {
            statusGame.innerHTML = `Player '${game[3]}' won`;
            return true;
        }
    }
    
    if(game[6] === game[7] && game[7] === game[8]) {
        if(game[6] !== '') {
            statusGame.innerHTML = `Player '${game[6]}' won`;
            return true;
        }
    }

    // Check Column
    if(game[0] === game[3] && game[3] === game[6]) {
        if(game[0] !== '') {
            statusGame.innerHTML = `Player '${game[0]}' won`;
            return true;
        }
    }
    
    if(game[1] === game[4] && game[4] === game[7]) {
        if(game[1] !== '') {
            statusGame.innerHTML = `Player '${game[1]}' won`;
            return true;
        }
    }
    
    if(game[2] === game[5] && game[5] === game[8]) {
        if(game[2] !== '') {
            statusGame.innerHTML = `Player '${game[2]}' won`;
            return true;
        }
    }

    // Check Diagonals
    if(game[0] === game[4] && game[4] === game[8]) {
        if(game[0] !== '') {
            statusGame.innerHTML = `Player '${game[0]}' won`;
            return true;
        }
    }
    
    if(game[2] === game[4] && game[4] === game[6]) {
        if(game[2] !== '') {
            statusGame.innerHTML = `Player '${game[2]}' won`;
            return true;
        }
    }

    // Draw
    let draw = true;
    cells.forEach(cell => {
        if(cell.innerHTML === '') {
            draw = false;
        }
    });

    if(draw) {
        statusGame.innerHTML = `Draw!`;
    }
}

restartBtn.addEventListener('click', restartGame);
function restartGame() {
    // Reset the game state
    game = ['', '', '', '', '', '', '', '', ''];
    // Allow the game to continue
    stopGame = false;
    // Clear the game status
    statusGame.innerHTML = '';

    // Clear the cell content
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('x-turn');
        cell.classList.remove('o-turn');
    });

    xTurn = true;
    statusGame.innerHTML = `Player 'X'`;
}