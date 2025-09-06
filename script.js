// JavaScript file for BusTravel website functionality
// All functions include comments to explain what they do

// Function to navigate between pages
function navigateTo(page) {
    // Simple navigation by changing the current page location
    window.location.href = page;
}

// Function to show alert for forgot password (demo functionality)
function showForgotPasswordAlert() {
    // Display alert message for forgot password feature
    alert('Password reset functionality would be implemented here. Please contact support for assistance.');
}

// Function to view booking details (demo functionality)
function viewBookingDetails(bookingId) {
    // Display alert with booking information
    alert(`Viewing details for booking ID: ${bookingId}\n\nIn a real application, this would show:\n- Full itinerary\n- Passenger details\n- Payment information\n- E-ticket download option`);
}

// Function to set minimum date for travel booking
function setMinimumDate() {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    
    // Find the travel date input field
    const travelDateInput = document.getElementById('travelDate');
    
    // Set minimum date to today (prevent past date selection)
    if (travelDateInput) {
        travelDateInput.min = today;
    }
}

// Function to validate booking form before submission
function validateBookingForm(event) {
    // Get form field values
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const travelDate = document.getElementById('travelDate').value;
    const passengers = document.getElementById('passengers').value;
    const passengerName = document.getElementById('passengerName').value.trim();
    const contactNumber = document.getElementById('contactNumber').value.trim();

    // Check if source and destination are the same
    if (source === destination && source !== '') {
        alert('Source and destination cannot be the same. Please select different cities.');
        event.preventDefault(); // Stop form submission
        return false;
    }

    // Validate passenger name (should contain only letters and spaces)
    const namePattern = /^[a-zA-Z\s]+$/;
    if (passengerName && !namePattern.test(passengerName)) {
        alert('Please enter a valid name (letters and spaces only).');
        event.preventDefault();
        return false;
    }

    // Validate contact number (basic pattern for phone numbers)
    const phonePattern = /^[\d\-\(\)\+\s]+$/;
    if (contactNumber && !phonePattern.test(contactNumber)) {
        alert('Please enter a valid contact number.');
        event.preventDefault();
        return false;
    }

    // If all validations pass, show confirmation
    if (source && destination && travelDate && passengers && passengerName && contactNumber) {
        alert(`Booking search initiated!\n\nRoute: ${source.replace('-', ' ').toUpperCase()} → ${destination.replace('-', ' ').toUpperCase()}\nDate: ${travelDate}\nPassengers: ${passengers}\n\nIn a real application, this would search for available buses.`);
        event.preventDefault(); // Prevent actual form submission for demo
    }

    return true;
}

// Function to validate signup form
function validateSignupForm(event) {
    // Get password values
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
    const fullName = document.getElementById('fullName').value.trim();

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please check and try again.');
        event.preventDefault();
        return false;
    }

    // Check password strength (minimum 6 characters)
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault();
        return false;
    }

    // Validate name contains only letters and spaces
    const namePattern = /^[a-zA-Z\s]+$/;
    if (fullName && !namePattern.test(fullName)) {
        alert('Please enter a valid name (letters and spaces only).');
        event.preventDefault();
        return false;
    }

    // If all validations pass, show success message
    alert(`Account creation initiated!\n\nWelcome, ${fullName}!\nEmail: ${email}\n\nIn a real application, you would receive a confirmation email.`);
    event.preventDefault(); // Prevent actual form submission for demo
    
    return true;
}

// Function to handle login form submission
function handleLogin(event) {
    // Get login credentials
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields.');
        event.preventDefault();
        return false;
    }

    // Simulate successful login
    alert(`Login successful!\n\nWelcome back!\nEmail: ${email}\n\nRedirecting to your dashboard...`);
    event.preventDefault(); // Prevent actual form submission for demo
    
    // In a real app, you would redirect to user dashboard
    setTimeout(() => {
        navigateTo('bookings.html');
    }, 1000);
    
    return true;
}

// Function to initialize page-specific functionality
function initializePage() {
    // Check which page we're on and add appropriate event listeners
    
    // If on booking page, set up booking form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        // Set minimum date for travel date input
        setMinimumDate();
        
        // Add form submission event listener
        bookingForm.addEventListener('submit', validateBookingForm);
        
        console.log('Booking page initialized');
    }
    
    // If on signup page, set up signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        // Add form submission event listener
        signupForm.addEventListener('submit', validateSignupForm);
        
        console.log('Signup page initialized');
    }
    
    // If on login page, set up login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        // Add form submission event listener
        loginForm.addEventListener('submit', handleLogin);
        
        console.log('Login page initialized');
    }
}

// Function to add smooth scrolling effect for internal links
function addSmoothScrolling() {
    // Get all anchor links on the page
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listeners for smooth scrolling
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Get target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // Smooth scroll to target
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Function to highlight active navigation link
function highlightActiveNavLink() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Remove any existing active classes and add to current page
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Check if link href matches current page
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            link.style.backgroundColor = 'rgba(255, 107, 53, 0.2)';
            link.style.color = '#ff6b35';
        }
    });
}

// Main initialization function that runs when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('BusTravel website loaded successfully');
    
    // Initialize page-specific functionality
    initializePage();
    
    // Add smooth scrolling for internal links
    addSmoothScrolling();
    
    // Highlight active navigation link
    highlightActiveNavLink();
    
    // Add loading effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add small loading effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    console.log('All page features initialized');
});

// Function to handle responsive menu (for future mobile menu implementation)
function toggleMobileMenu() {
    // This function would be used for mobile menu toggle
    console.log('Mobile menu toggle - to be implemented for mobile responsiveness');
}