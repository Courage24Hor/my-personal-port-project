const backToTopButton = document.getElementById('back-to-top-btn');

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const contactForm = document.getElementById('form-id');

contactForm.addEventListener('submit', function(event) {
    
    // stop the form from refreshing the page
    event.preventDefault();
    
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const messageValue = document.getElementById('message').value;

    const confirmationDiv = document.getElementById('form-confirmation');
    const userNameSpan = document.getElementById('user-name');
    
    // checking if the name is empty or has a value
        if (nameValue === '') {
        alert('Please enter your name before sending.');
    } else {
        // insert the user's name into the <span>
        userNameSpan.textContent = nameValue;

        // remove the .hidden class to show the message
        confirmationDiv.classList.remove('hidden');

        contactForm.reset();

        // hide the message after 5 seconds
        setTimeout(() => {
            confirmationDiv.classList.add('hidden');
        }, 5000);
    }
});

