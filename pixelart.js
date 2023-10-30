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
const pixelContainer = document.createElement('div');
pixelContainer.className = 'pixelContainer';

// Pixel Box
let rowSize = 50;
let containerSize = 960;
let pixelWidthHeight = '';
let pixelBoxSizing = '';

const createPixels = (num) => {

    // start fresh for any new container
    pixelContainer.remove();
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

        // hover effects
        pixelBox.addEventListener('mouseenter', () => {
            pixelBox.style.backgroundColor = 'black';
        });
    };
};

// create initial box at beginning
createPixels(rowSize * rowSize);

// menu bar buttons
const trashButton = document.querySelector('.trash');

trashButton.addEventListener('onclick', () => {
    alert('working')
});