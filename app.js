// alert('connected');
let numSquare = 6;
// generate all new color
let colors = generateRandomColor(numSquare);

let squares = document.querySelectorAll('.square');

// pick a new random color from array
let pickedColor = pickColor();
const colorDisplay = document.getElementById('colorSelected');
colorDisplay.textContent = pickedColor;
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetBtn = document.querySelector('#reset');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', () => {
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    // generate all new color
    numSquare = 3;
    colors = generateRandomColor(numSquare);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else {
            squares[i].style.display = 'none'
        }                
    }
    messageDisplay.textContent = '';
});

hardBtn.addEventListener('click', () => {
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    // generate all new color
    numSquare = 6;
    colors = generateRandomColor(numSquare);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';             
    }
    messageDisplay.textContent = '';

});



resetBtn.addEventListener('click', () => {
    // generate all new color
    numSquare = 6;
    colors = generateRandomColor(numSquare);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';            
    }
    h1.style.backgroundColor = 'steelblue'
    messageDisplay.textContent = '';
});

for (let i = 0; i < squares.length; i++) {
    // add initial color to squares
    squares[i].style.backgroundColor = colors[i];

    // add Click listener to squares
    squares[i].addEventListener('click', function(){
        // grab color of clicked square
        const clickedColor = this.style.backgroundColor;
        //compare color to picked Color
        if(clickedColor === pickedColor){
            changeColor(clickedColor);
            messageDisplay.textContent = 'CORRECT';
            h1.style.backgroundColor = clickedColor;
            resetBtn.textContent = 'Play Again?'
        }else{
            messageDisplay.textContent = 'Try Again';
            this.style.backgroundColor = '#232323';
        }
    });
}

function changeColor(color){
    for (let j = 0; j < squares.length; j++) {
        squares[j].style.backgroundColor = color;       
    }
}

function pickColor(){
    const randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
};

function generateRandomColor(num){
    const arr = []
    for (let k = 0; k < num; k++) {
        arr.push(randomColor());               
    }
    return  arr;
}

function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${b}, ${g})`;
}