

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
function changeMarker(count){
    if (this.textContent === ''){
        this.textContent = 'X'
        count = 1;
    } else if (this.textContent === 'X') {
        this.textContent = 'O'
    } else {
        this.textContent = ''
    }
}

//if given count is not 0, its text content gets fixed
function someThing(count) {
    if (count !== 0) {
        this.textContent = this.textContent;
    } else {
        changeMarker();
    }
}

// For loop to add event linsters to all the squares
//allSquares[i].addEventListener('click', changeMarker) 모든 칸에 changeMarker
//function을 가진 상태로 클릭을 할 수 있게 한다
//

for (var i = 0; i < allSquares.length; i++) {
    var count = 0;
    allSquares[i].addEventListener('click', changeMarker(count))
}



// good to have function
// 1: if other box is clicked, previous one cannot be changed anymore
// 
// 2: if three box has same shape, pop up that the shape has won
// 3: if previous shape has been made, next shape will be the other one
// 3: Decorate with some Nav bar and others