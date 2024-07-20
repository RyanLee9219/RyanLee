// Function to initialize Emailjs account
(function(){
    emailjs.init({
        publicKey: "P2eSSIxE8kfmTXHYf",
    });
})();

// Function to open a modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Function to close a modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Template parameters for EmailJS
    const templateParams = {
        name: name,
        email: email,
        message: message
    };
    
    // Send email using EmailJS
    emailjs.send('dlwndyd9219', 'template_lfbvliy', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully! Thank you so much, I will response shortly!');
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
});