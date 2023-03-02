
let gridSize = 16


for (let index = 0; index < gridSize; index++) {
    const newBox = document.createElement('div');
    newBox.classList.add('square')
    newBox.id = index
    document.getElementById('container').appendChild(newBox);
}
let box = document.querySelectorAll('.square');


  
  

 for (let index = 0; index < box.length; index++) {
    let i = index.toString()
    let position = document.getElementById(i);
    
    position.addEventListener('mouseover' , 
    function randomRGB() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
        console.log(RGBColor);
        position.style.backgroundColor = RGBColor;
        
    })
 };
 
 

 
