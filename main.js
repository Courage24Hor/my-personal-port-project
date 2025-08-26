const backToTopButton = document.getElementById('back-to-top-btn');

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// 1. Get the form by its name. This returns a COLLECTION.
const formCollection = document.getElementsByName('portfolioContact');

// 2. Get the first (and should be only) form from the collection
const contactForm = formCollection[0];

// 3. Now add the event listener to that single form element
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Keep this for now for the test

    // ... the rest of your code for the success message ...
});

