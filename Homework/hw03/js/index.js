/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" 
                onclick="showImage(event)"
                onclick="nextImage(event)"
                onclick="prevImage(event)"
            
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });
};

let currentIndex = 0;

const showImage = (ev) => {
    const elem = ev.currentTarget;
    console.log(elem.style.backgroundImage);
    console.log("currentIndex:", currentIndex);

    const bgImage = elem.style.backgroundImage;
    document.querySelector('.featured_image').style.backgroundImage = bgImage;

    currentIndex = parseInt(elem.dataset.index);
    
    }

const nextImage = (ev) => {
    currentIndex += 1; 

    if (currentIndex > 7) {
        currentIndex = 0;

    }

    document.querySelector('.featured_image').style.backgroundImage = `url('${images[currentIndex]}')`;

    console.log("currentIndex:", currentIndex);
    console.log(images[currentIndex]);
}






const prevImage = (ev) => {
    currentIndex -= 1; 

    if (currentIndex < 0) {
        currentIndex = 7;

    }

    document.querySelector('.featured_image').style.backgroundImage = `url('${images[currentIndex]}')`;

    console.log("currentIndex:", currentIndex);
    console.log(images[currentIndex]);
}


document.querySelector('.next').onclick = nextImage;
document.querySelector('.prev').onclick = prevImage;
document.querySelector('.featured_image').onclick = nextImage;




initScreen();