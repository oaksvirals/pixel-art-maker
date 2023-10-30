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

const pixelContainer = document.querySelector('.pixelContainer');