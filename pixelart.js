/*  Step 1) Create a webpage with a 16x16 grid of square divs.
    Step 2) Set up a "hover" effect so grid divs change color when mouse passes over.
        a) "Hovering" = mouse enters div and ends when mouse leaves div. Event listeners for either event for starting point.
        b) Multiple ways to change div color: adding new class to div or changing div background color with JS
    Step 3) Add feature for changing grid size with maximum size of 100 squares.
        a) Once entered, existing grid removed and then new grid added.
        b) Generate grid in same total space as before (e.g. 960px wide)
    
    R) buttons tags in HTML and how you can make a JS function run when one is clicked
    R) check out prompts
    R) you should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used
*/

// Setup for grabbing initial containers, creating pixel box container, and applying css
const outerContainer = document.querySelector('.container');
const leftContainer = document.querySelector('.leftContainer');
const centerContainer = document.querySelector('.centerContainer');
const rightContainer = document.querySelector('.rightContainer');

// tracking
let history = [];

function colorSquare(square, color) {
    let originalColor = square.style.backgroundColor;
    square.style.backgroundColor = color;

    history.push({ square: square, previousColor: originalColor });
};

// Pixel Box
let rowSize = 16;
let containerSize = 960;
let pixelWidthHeight = '';
let pixelBoxSizing = '';
let pixelColor = 'black';
let defaultColor = 'white';
let mouseDown = false;
let rgb = false;

const createPixels = (num) => {

    const pixelContainer = document.createElement('div');
    pixelContainer.className = 'pixelContainer';

    // start fresh for any new container
    centerContainer.appendChild(pixelContainer);
    
    // adjust container size if boxes do not fit
    if (containerSize % rowSize > 0) {
        let sizing = containerSize / rowSize;
        let adjustment = Math.round(sizing);
    
        containerSize = rowSize * adjustment;
    
        pixelBoxSizing = containerSize + 'px';
    
        pixelContainer.style.maxWidth = pixelBoxSizing;
        pixelContainer.style.maxHeight = pixelBoxSizing;
    };
    
    // create inner boxes "pixels"
    pixelWidthHeight = containerSize / rowSize + 'px';
    
        for (let i = 0; i < num; i++) {
        const pixelBox = document.createElement('div');
    
        pixelContainer.appendChild(pixelBox);
        pixelBox.style.width = pixelWidthHeight;
        pixelBox.style.height = pixelWidthHeight;
        pixelBox.className = 'pixelBox' + i;
        pixelBox.style.border = '1px solid gray'
        pixelBox.style.backgroundColor = defaultColor;
    
        // event listeners
            // pixelBox.addEventListener('mousedown', () => colorSquare(pixelBox, pixelColor)); // Change color on hover
            pixelBox.addEventListener('click', () => colorSquare(pixelBox, pixelColor)); // Change color on click
            pixelBox.addEventListener('mouseover', () => {
                if (mouseDown) {
                    colorSquare(pixelBox, pixelColor);
                }
            });
            pixelBox.addEventListener('mousemove', () => {
                if (rgb) {
                    pixelColor = getRandomColor();
                };
            });
        };
};

// create initial box at beginning
createPixels(rowSize * rowSize);

// slider
const slider = document.querySelector('.slider');
const rangeValue = document.querySelector('#rangeValue');

slider.addEventListener('input', () => {
    rangeValue.textContent = slider.value;
});

slider.addEventListener('mouseup', () => {
    const pixelContainer = document.querySelector('.pixelContainer');
    pixelContainer.remove();
    rowSize = slider.value;
    containerSize = 960;
    defaultColor = 'white';
    createPixels(rowSize * rowSize);
});

// menu
// paint brush
const paintBrush = document.querySelector('.paintBrush');

paintBrush.addEventListener('click', () => {
    pixelColor = colorPicker.value;
})

paintBrush.addEventListener('mouseenter', () => {
    paintBrush.src = './images/paint-brush-active.png';
});

paintBrush.addEventListener('mouseleave', () => {
    paintBrush.src = './images/paint-brush.png';
});

// Paint Bucket
const paintBucket = document.querySelector('.paintBucket');

paintBucket.addEventListener('click', () => {
    defaultColor = colorPicker.value;
    const pixelContainer = document.querySelector('.pixelContainer');
    pixelContainer.remove();
    containerSize = 960;
    createPixels(rowSize * rowSize);
});

paintBucket.addEventListener('mouseenter', () => {
    paintBucket.src = './images/paint-bucket-active.png';
});

paintBucket.addEventListener('mouseleave', () => {
    paintBucket.src = './images/paint-bucket.png';
});

// dropper color picker
const dropper = document.querySelector('.dropper');
const colorPicker = document.querySelector('#colorPicker');

dropper.addEventListener('click', () => {
    colorPicker.click();
});

colorPicker.addEventListener('input', () => {
    pixelColor = colorPicker.value;
});

dropper.addEventListener('mouseenter', () => {
    dropper.src = './images/dropper-active.png';
});

dropper.addEventListener('mouseleave', () => {
    dropper.src = './images/dropper.png';
});

// eraser
const eraser = document.querySelector('.eraser');

eraser.addEventListener('click', () => {
    pixelColor = 'white';
});

eraser.addEventListener('mouseenter', () => {
    eraser.src = './images/eraser-active.png';
});

eraser.addEventListener('mouseleave', () => {
    eraser.src = './images/eraser.png';
});

// undo
const undo = document.querySelector('.undo');

undo.addEventListener('click', () => {
    let lastAction = history.pop();
    if (lastAction) {
        lastAction.square.style.backgroundColor = lastAction.previousColor;
    }
});

undo.addEventListener('mouseenter', () => {
    undo.src = './images/undo-active.png';
});

undo.addEventListener('mouseleave', () => {
    undo.src = './images/undo.png';
});

// trash can
const trash = document.querySelector('.trash');

trash.addEventListener('click', () => {
    const pixelContainer = document.querySelector('.pixelContainer');
    pixelContainer.remove();
    containerSize = 960;
    defaultColor = 'white';
    createPixels(rowSize * rowSize);
});

trash.addEventListener('mouseenter', () => {
    trash.src = './images/trash-active.png';
});

trash.addEventListener('mouseleave', () => {
    trash.src = './images/trash.png';
});

// hotkeys
const hotkeys = document.querySelector('.tooltip');
const tipText = document.querySelector('.tooltiptext');

tipText.style.visibility = 'hidden';
tipText.style.position = 'absolute';
tipText.style.width = '250px';
tipText.style.backgroundColor = 'black';
tipText.style.color = 'white';
tipText.style.textAlign = 'left';
tipText.style.borderRadius = '6px';
tipText.style.padding = '15px';
tipText.style.opacity = '80%';
tipText.style.fontSize = '18px';
tipText.style.right = '225px';
tipText.style.top = '10px';

hotkeys.addEventListener('mouseenter', () => {
    tipText.style.visibility = 'visible';
});

hotkeys.addEventListener('mouseleave', () => {
    tipText.style.visibility = 'hidden';
});

// hotkey events
const hotkeyImg = document.querySelector('.tooltip');
// s - stroke brush
document.addEventListener('keydown', function(event) {
    if (event.key === 's' || event.key === 'S') {
        mouseDown = true;
        hotkeyImg.src = './images/hotkeys-active.png';
    }
    setTimeout(() => {
        hotkeyImg.src = './images/hotkeys.png';
    }, 500);
});
// c - click brush
document.addEventListener('keydown', function(event) {
    if (event.key === 'c' || event.key === 'C') {
        mouseDown = false;
        hotkeyImg.src = './images/hotkeys-active.png';
    }
    setTimeout(() => {
        hotkeyImg.src = './images/hotkeys.png';
    }, 500);
});
// r - RGB effect
document.addEventListener('keydown', function(event) {
    if (event.key === 'r' || event.key === 'R') {
        hotkeyImg.src = './images/hotkeys-active.png';
        if (rgb === false) {
            rgb = true;
        } else if (rgb === true) {
            rgb = false;
        };
    };
    setTimeout(() => {
        hotkeyImg.src = './images/hotkeys.png';
    }, 500);
});

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};