
let gridSize = 5

for (let index = 0; index < gridSize; index++) {
    const newBox = document.createElement('div');
    newBox.classList.add('box')
    document.getElementById('container').appendChild(newBox);
}

