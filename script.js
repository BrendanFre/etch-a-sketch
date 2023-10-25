const outerBox = document.querySelector('#container')
const row = []
outerBox.classList.add('outerBox')





for(let i = 0; i < 4; i++){
    row[i] = document.createElement('div')
    row[i].classList.add('row')
    outerBox.appendChild(row[i])
    for(let column = 0; column < 4; column++)
{        const cell = document.createElement('div')
        cell.classList.add('cellBox')
        row[i].appendChild(cell)}

}