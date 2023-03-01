
let gridSize = 16

for (let index = 0; index < gridSize; index++) {
    const newBox = document.createElement('div');
    newBox.classList.add('box')
    document.getElementById('container').appendChild(newBox);
}
function changeColor() {
    box.classList.add('black');
}

let box = document.querySelector('.box');
 box.addEventListener("mouseover", function() { changeColor() });