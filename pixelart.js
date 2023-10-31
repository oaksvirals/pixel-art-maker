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

// Pixel Box
let rowSize = 16;
let containerSize = 960;
let pixelWidthHeight = '';
let pixelBoxSizing = '';
let pixelColor = 'black';
let defaultColor = 'white';

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
        pixelBox.classList.add('pixelBox', 'box' + i);
        pixelBox.backgroundColor = defaultColor;
    
        // hover effects
            pixelBox.addEventListener('mouseenter', () => {
                pixelBox.style.backgroundColor = pixelColor;
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
    rowSize = slider.value;
    centerContainer.innerHTML = '';
    createPixels(rowSize * rowSize);
});

// menu
// paint brush
const paintBrush = document.querySelector('.paintBrush');

paintBrush.addEventListener('mouseenter', () => {
    paintBrush.src = './images/paint-brush-active.png';
});

paintBrush.addEventListener('mouseleave', () => {
    paintBrush.src = './images/paint-brush.png';
});

// Paint Bucket
const paintBucket = document.querySelector('.paintBucket');

paintBucket.addEventListener('click', () => {
    defaultColor = pixelColor;
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
    undo = 'white';
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
    createPixels(rowSize * rowSize);
});

trash.addEventListener('mouseenter', () => {
    trash.src = './images/trash-active.png';
});

trash.addEventListener('mouseleave', () => {
    trash.src = './images/trash.png';
});