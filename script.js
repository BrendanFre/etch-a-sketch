const outerBox = document.querySelector('#container')
const row = []
const newGridButton = document.querySelector('#changeSizeButton')
outerBox.classList.add('outerBox')

newGridButton.addEventListener('click', function(){
    userSelection = parseInt(prompt('How many columns/rows do you want? (Positive whole number between 1 and 100 inclusive)'))
    if (userSelection > 0)
    {
        if(userSelection > 100){
            userSelection = 100
        }
        deleteGrid()
    createGrid(userSelection)} else{
        alert("Invalid number, please enter a positive whole number.")
    }
})


function createGrid(gridSize){
    for (let i = 0; i < gridSize; i++) {
        row[i] = document.createElement('div')
        row[i].classList.add('row')
        outerBox.appendChild(row[i])
        for (let column = 0; column < gridSize; column++) {
            const cell = document.createElement('div')
            cell.addEventListener('mouseover', function () {
                cell.classList.add('cellHover')
            })
            cell.addEventListener('mouseout', function () {
                cell.classList.remove('cellHover')
            })
            cell.classList.add('cellBox')
            row[i].appendChild(cell)
        }

    }

}

function deleteGrid(){
    while (outerBox.firstChild){
        outerBox.removeChild(outerBox.firstChild)
    }
}

createGrid(32)

