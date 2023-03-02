
let gridSize = 16

function deleteGrid() {
    const boxes = document.querySelectorAll('.square');

        boxes.forEach(square => {
        square.remove();
});

    }

let button = document.querySelector('.button');
button.addEventListener('click', function() {
   let entry = prompt('Enter Size');
   gridSize = entry * entry
   deleteGrid()
   document.getElementById("container").style.gridTemplateColumns = "repeat(" + entry + ", 1fr)";
   createGrid()
})
function createGrid() {
for (let index = 0; index < gridSize; index++) {
    const newBox = document.createElement('div');
    newBox.classList.add('square')
    newBox.id = index
    document.getElementById('container').appendChild(newBox);
    

}


let box = document.querySelectorAll('.square');

 for (let index = 0; index < gridSize; index++) {
    let i = index.toString()
    let position = document.getElementById(i);
    
    position.addEventListener('mouseover' , 
    function randomRGB() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    
        position.style.backgroundColor = RGBColor;
        
    })
 };
};
createGrid();

 
 

 
