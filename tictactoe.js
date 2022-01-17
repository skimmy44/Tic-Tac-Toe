

// Restart Game Button
var rsButton = document.querySelector("#b")

// Grabs all the squares
var allSquares = document.querySelectorAll('td')

// Clear all the squares
function clearBoard () {
    for (var i = 0; i < allSquares.length; i++) {
        allSquares[i].textContent = ''
        
    }
}

rsButton.addEventListener('click', clearBoard)

// Check the square marker
function changeMarker(){
    if (this.textContent === ''){
        this.textContent = 'X'
    } else if (this.textContent === 'X') {
        this.textContent = 'O'
    } else {
        this.textContent = ''
    }
}


// For loop to add event linsters to all the squares

for (var i = 1; i < allSquares.length; i++) {
    for (var j = i-1; j < allSquares.length; j++) {
        allSquares[j].addEventListener('click', changeMarker)
    }
    allSquares[i].addEventListener('click', changeMarker)
    
}


// good to have function
// 1: if other box is clicked, previous one cannot be changed anymore
// 2: if three box has same shape, pop up that the shape has won
// 3: Decorate with some Nav bar and others