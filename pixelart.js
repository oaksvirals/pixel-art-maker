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
const outerContainer = document.querySelector('.centerContainer');

// Pixel Box
let rowSize = 16;
let containerSize = 960;
let pixelWidthHeight = '';
let pixelBoxSizing = '';
let pixelColor = 'black';

const createPixels = (num) => {

    const pixelContainer = document.createElement('div');
    pixelContainer.className = 'pixelContainer';

    // start fresh for any new container
    outerContainer.appendChild(pixelContainer);
    
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
        pixelBox.className = 'pixelBox';
        pixelBox.backgroundColor = 'white';
    
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
    outerContainer.innerHTML = '';
    createPixels(rowSize * rowSize);
})

// menu
// dropper color picker
const dropper = document.querySelector('.dropper');
const colorPicker = document.querySelector('#colorPicker');

dropper.addEventListener('click', () => {
    colorPicker.click();
});

colorPicker.addEventListener('input', () => {
    pixelColor = colorPicker.value;
});

// eraser
const eraser = document.querySelector('.eraser');

eraser.addEventListener('click', () => {
    pixelColor = 'white';
})