let searchBtn = document.querySelector('.searchbtn');
let closeBtn = document.querySelector('.closebtn');
let searchBox = document.querySelector('.searchbox');

searchBtn.onclick = function(){
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
}
closeBtn.onclick = function(){
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    }
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    }

const buttons = document.querySelectorAll("[data-carousel-button]"); // Corrected typo

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;
    
        slides.children[newIndex].dataset.active = true; // Corrected `children` typo
        delete activeSlide.dataset.active;
    });
});

const btn = document.getElementById('btn');
const div_content = document.getElementById('hide');

btn.addEventListener('click', handleClick);

function handleClick() {
    if (div_content.style.display === 'none') {
        div_content.style.display = 'block';
    } else {
        div_content.style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // Functionality for gallery buttons
    const buttons = document.querySelectorAll('.gallerybtn .button');
    const items = document.querySelectorAll('.gallery .item');
    const viewMoreButton = document.getElementById('view-more');
    let isExpanded = false; // Track whether rows are expanded or not

    // Helper function to apply filtering
    const applyFilter = (filter) => {
        let visibleCount = 0; // Track the number of visible items

        items.forEach(item => {
            // Show items that match the filter or all if filter is '*'
            if (filter === '*' || item.classList.contains(filter.substring(1))) {
                item.style.display = visibleCount < 12 || isExpanded ? 'block' : 'none'; // Show first 2 rows initially
                visibleCount++;
            } else {
                item.style.display = 'none'; // Hide non-matching items
            }
        });

        // Update the visibility of the "View More" button
        viewMoreButton.style.display = visibleCount > 6 ? 'block' : 'none';
    };

    // Add event listener for gallery buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            isExpanded = false; // Reset expanded state
            viewMoreButton.textContent = 'View More'; // Reset button text
            applyFilter(filter);
        });
    });

    // Add event listener for View More/Less button
    viewMoreButton.addEventListener('click', () => {
        isExpanded = !isExpanded; // Toggle the state
        const activeButton = document.querySelector('.gallerybtn .button.active');
        const filter = activeButton ? activeButton.getAttribute('data-filter') : '*';
        viewMoreButton.textContent = isExpanded ? 'View Less' : 'View More'; // Update button text
        applyFilter(filter);
    });

    // Initialize the default filter as "All"
    const defaultFilter = '*'; // Or change it based on your needs
    applyFilter(defaultFilter);
});
document.addEventListener('DOMContentLoaded', () => {
    const heartButtons = document.querySelectorAll('.overlay .colorbtn');

    heartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle the "active" class to change the color
            button.classList.toggle('active');
        });
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial');
const totalSlides = slides.length;

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Auto-slide functionality
function startAutoSlide() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 3000); // Change slide every 3 seconds
}

// Manual navigation
document.querySelector('.sprev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

document.querySelector('.snext').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

// Initialize the slider
showSlide(currentSlide);
startAutoSlide();

const form = document.querySelector('#form');
const name = document.querySelector('#username');
const email = document.querySelector('#useremail');
const phoneno = document.querySelector('#userphoneno');
const message = document.querySelector('#usermessage');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    if (formValidation()) {
        alert('Form submitted successfully!'); // Popup box
    }
});

function formValidation() {
    const username = name.value.trim();
    const useremail = email.value.trim();
    const userphoneno = phoneno.value.trim();
    const usermessage = message.value.trim();

    let isValid = true; // Flag to check if the form is valid

    if (username === "") {
        setError(name, 'Enter your user Name');
        isValid = false;
    } else {
        setSuccess(name);
    }

    if (useremail === "") {
        setError(email, 'Enter your Email');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (userphoneno === "") {
        setError(phoneno, 'Enter your Phone no');
        isValid = false;
    } else {
        setSuccess(phoneno);
    }

    return isValid; // Return true if all fields are valid
}

function setError(input, message) {
    const inputboxes = input.parentElement; // Get the parent element (div)
    const err = inputboxes.querySelector('small'); // Target the error message area
    err.innerText = message; // Display the error message
}

function setSuccess(element) {
    const inputboxes = element.parentElement;
    const err = inputboxes.querySelector("small");
    err.innerText = ''; // Clear the error message
}

// Select all navbar icons
const navIcons = document.querySelectorAll('.nav-container .a1');

// Add click event listener to each icon
navIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        // Remove background color from all icons
        navIcons.forEach(nav => nav.classList.remove('active-bg'));

        // Add background color to the clicked icon
        this.classList.add('active-bg');
    });
});

