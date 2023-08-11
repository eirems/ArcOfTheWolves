/**
 * This section handles the navigation via the hamburger menu
 */
// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Select all the clickable div links in the sidebar
    const sidebarLinks = document.querySelectorAll(".sidebar a");

    // Add click event listeners to each link
    sidebarLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = link.getAttribute("href"); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Find the target section

            if (targetSection) {
                // If the target section exists
                const offsetTop = targetSection.offsetTop; // Calculate the offset position
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth", // Use smooth scrolling behavior
                });
            }
        });
    });
});

// Auto close when link is clicked
// Get a reference to the hamburger checkbox
const hamburgerCheckbox = document.getElementById("hamburger-checkbox");

// Get references to all the sidebar links
const sidebarLinks = document.querySelectorAll(".sidebar a");

// Add click event listeners to the sidebar links
sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Uncheck the hamburger checkbox
        hamburgerCheckbox.checked = false;
    });
});


/**
 * Font resizing for sidebar
 */
// Function to adjust font sizes based on available space
function adjustFontSizes() {
    const sidebar = document.querySelector('.sidebar');
    const toc = document.querySelector('.toc');
    const links = document.querySelectorAll('.sidebar a');

    // Calculate available height for links
    const availableHeight = sidebar.clientHeight - toc.clientHeight;

    // Calculate maximum font size for toc
    const tocMaxFontSize = Math.min(
        50, // Maximum font size for .toc (adjust as needed)
        availableHeight / (links.length + 1) // +1 for additional space between .toc and links
    );

    // Calculate maximum font size for links
    const linksMaxFontSize = Math.min(
        30, // Maximum font size for .sidebar a (adjust as needed)
        availableHeight / links.length
    );

    // Set font sizes for toc and links
    toc.style.fontSize = tocMaxFontSize + 'px';
    links.forEach(link => (link.style.fontSize = linksMaxFontSize + 'px'));
}

// Call the function initially and whenever the window is resized
adjustFontSizes();
window.addEventListener('resize', adjustFontSizes);

/**
 * This section changes the background of each slide for the vertical
 * scrolling content
 */
const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
    const bgUrl = slide.getAttribute('data-bg');
    slide.style.setProperty('--bg', `url('${bgUrl}')`);
});


/**
 * This section handles the horizontal scrolling content
 */

const stickySections = [...document.querySelectorAll('.sticky')]

let images = [
    { src: './images/Updated_AOTW5.jpg', sectionIndex: 0 },
    { src: './images/Updated_AOTW6.jpg', sectionIndex: 0 },
    { src: './images/Updated_AOTW7.jpg', sectionIndex: 0 },
    { src: './images/Updated_AOTW8.jpg', sectionIndex: 0 },
    { src: './images/Updated_AOTW9.jpg', sectionIndex: 0 },
    { src: './images/Updated_AOTW10.jpg', sectionIndex: 0, hasButton: true, videoId: "XXxWyMYQPoM" },
    { src: './images/Updated_AOTW11.jpg', sectionIndex: 0, hasButton: true, videoId: "WC8NmdaPa54" },
    { src: './images/Updated_AOTW12.jpg', sectionIndex: 0, hasButton: true, videoId: "ePsJpFL63ew" },
    { src: './images/Updated_AOTW13.jpg', sectionIndex: 1 },
    { src: './images/Updated_AOTW14.jpg', sectionIndex: 1 },
    { src: './images/Updated_AOTW15.jpg', sectionIndex: 1 },
    { src: './images/Updated_AOTW16.jpg', sectionIndex: 1, hasButton: true, videoId: "p70VvI1KlBM" },
    { src: './images/Updated_AOTW17.jpg', sectionIndex: 1, hasButton: true, videoId: "lZBrYGeyQFg" },
    { src: './images/Updated_AOTW18.jpg', sectionIndex: 2 },
    { src: './images/Updated_AOTW19.jpg', sectionIndex: 2 },
    { src: './images/Updated_AOTW20.jpg', sectionIndex: 2 },
    { src: './images/Updated_AOTW21.jpg', sectionIndex: 2, hasButton: true, videoId: "6Z9_NrIuUt0" },
    { src: './images/Updated_AOTW22.jpg', sectionIndex: 2, hasButton: true, videoId: "wZJQZleUWXw" },
    { src: './images/Updated_AOTW23.jpg', sectionIndex: 3 },
    { src: './images/Updated_AOTW24.jpg', sectionIndex: 3 },
    { src: './images/Updated_AOTW25.jpg', sectionIndex: 3, hasButton: true, videoId: "JO3hRkbfUP8" },
    { src: './images/Updated_AOTW26.jpg', sectionIndex: 3, hasButton: true, videoId: "RwKjiIim0qg" },
    { src: './images/Updated_AOTW27.jpg', sectionIndex: 4 },
    { src: './images/Updated_AOTW28.jpg', sectionIndex: 4 },
    { src: './images/Updated_AOTW29.jpg', sectionIndex: 4 },
    { src: './images/Updated_AOTW30.jpg', sectionIndex: 4, hasButton: true, videoId: "fzy2ebTSnuk" },
    { src: './images/Updated_AOTW31.jpg', sectionIndex: 4, hasButton: true, videoId: "1C-79fTsX5A" },
    { src: './images/Updated_AOTW32.jpg', sectionIndex: 5 },
    { src: './images/Updated_AOTW33.jpg', sectionIndex: 5 },
    { src: './images/Updated_AOTW34.jpg', sectionIndex: 5 },
    { src: './images/Updated_AOTW35.jpg', sectionIndex: 5, hasButton: true, videoId: "D1soojjlPOI" },
    { src: './images/Updated_AOTW36.jpg', sectionIndex: 5, hasButton: true, videoId: "OV98Cw10kv4" },

    { src: './images/Updated_AOTW37.jpg', sectionIndex: 6 },
    { src: './images/Updated_AOTW38.jpg', sectionIndex: 6 },
    { src: './images/Updated_AOTW39.jpg', sectionIndex: 6, hasButton: true, videoId: "vAktfteXE8U" },
    { src: './images/Updated_AOTW40.jpg', sectionIndex: 6, hasButton: true, videoId: "pJS5NQoy8AQ" },
    // ... add more images here
];

const popupOverlay = document.querySelector('.popup-overlay');
const videoIframe = document.getElementById('video-iframe');
const closeButton = document.getElementById('close-popup');


images.forEach(imageObj => {
    const image = new Image();
    image.src = imageObj.src;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const imageElement = document.createElement('img');
    imageElement.src = imageObj.src;

    imageContainer.appendChild(imageElement);

    if (imageObj.hasButton) {
        const button = document.createElement('button');
        button.classList.add('image-button');
        button.textContent = "Watch How They Were Done Here";

        const playIcon = document.createElement('img');
        playIcon.src = 'icons/play.ico'; // Adjust the path to your play icon image
        playIcon.classList.add('play-icon'); // Add any additional styling classes if needed
        playIcon.alt = 'Play Video'; // Set an alt attribute for accessibility

        button.appendChild(playIcon);

        button.addEventListener('click', () => {
            videoIframe.src = `https://www.youtube.com/embed/${imageObj.videoId}`;
            popupOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        imageContainer.appendChild(button);
    }

    stickySections[imageObj.sectionIndex].querySelector('.scroll_section').appendChild(imageContainer);
});

closeButton.addEventListener('click', () => {
    videoIframe.src = 'about:blank';
    popupOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
});

function transform(section, imagesInSection) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section');
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

    const currentWidth = window.innerWidth;

    const breakpoints = [1226, 1440, 1700];
    const addedVhValues = [300, 200, 100];

    let addedVh = 0;

    for (let i = 0; i < breakpoints.length; i++) {
        if (currentWidth <= breakpoints[i]) {
            addedVh = addedVhValues[i];
            break;
        }
    }

    console.log(`Images in Section: ${imagesInSection}`);

    percentage = Math.min(Math.max(percentage, 0), (imagesInSection * 100) + addedVh);

    console.log(`Total percentage: ${(imagesInSection * 100) + addedVh}`);
    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}

function handleScroll() {
    for (let i = 0; i < stickySections.length; i++) {
        const imagesInSection = images.filter(image => image.sectionIndex === i).length;
        transform(stickySections[i], imagesInSection);
    }
}

window.addEventListener('scroll', handleScroll);