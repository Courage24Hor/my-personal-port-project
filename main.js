const backToTopButton = document.getElementById('back-to-top-btn');

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// 1. Find the form by its NAME attribute using CSS attribute selector
const contactForm = document.querySelector('form[name="portfolioContact"]');

// 2. Add the submit event listener
contactForm.addEventListener('submit', function(event) {
    
    // 3. Stop the page refresh
    event.preventDefault();
    
    // 4. Get the user's input
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const messageValue = document.getElementById('message').value;

    // 5. Get references to the message elements
    const confirmationDiv = document.getElementById('form-confirmation');
    const userNameSpan = document.getElementById('user-name');

    // 6. Your validation and success message logic
    if (nameValue === '') {
        alert('Please enter your name before sending.');
    } else {
        userNameSpan.textContent = nameValue;
        confirmationDiv.classList.remove('hidden');
        contactForm.reset();
        
        setTimeout(() => {
            confirmationDiv.classList.add('hidden');
        }, 5000);
    }
});
