//counter
const counters = document.querySelectorAll('.value');
const speed = 1000;

const animateCounters = (counter) => {
    const updateCounter = () => {
        const value = +counter.getAttribute('num');
        const data = +counter.innerText;
        counter.innerText = data < value ? Math.ceil(data + value / speed) : value;
        if (data < value) setTimeout(updateCounter, 20);
    };
    updateCounter();
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters(entry.target);
            observer.unobserve(entry.target); // Stop observing after the animation starts
        }
    });
}, {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when 50% of the container is visible
});

// Start observing each counter
counters.forEach(counter => observer.observe(counter));



// hover code for the services section
const serviceItems = document.querySelectorAll('.service-dis');

serviceItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        serviceItems.forEach(el => el.classList.remove('active', 'up', 'down'));
        item.classList.add('active');

        serviceItems.forEach((el, i) => {
            if (i < index) {
                el.classList.add('up');
            } else if (i > index) {
                el.classList.add('down');
            }
        });
    });
});

//<!-- Validation Script -->

  document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const form = document.getElementById('contactForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phoneNumber = document.getElementById('phoneNumber');
    const emailAddress = document.getElementById('emailAddress');

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');

    // Regex patterns
    const nameRegex = /^[A-Za-z]*$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Function to show or hide error messages
    function showError(inputElement, errorElement, message) {
      inputElement.classList.add('error');
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }

    function hideError(inputElement, errorElement) {
      inputElement.classList.remove('error');
      errorElement.style.display = 'none';
    }

    // Prevent invalid characters in name fields (only alphabets)
    function validateNameInput(e) {
      if (!nameRegex.test(e.key)) {
        e.preventDefault();
      }
    }

    // First Name Validation
    firstName.addEventListener('input', function() {
      if (!nameRegex.test(firstName.value)) {
        showError(firstName, firstNameError, 'Only alphabets are allowed.');
      } else {
        hideError(firstName, firstNameError);
      }
    });

    // Prevent typing invalid characters in the name fields
    firstName.addEventListener('keypress', validateNameInput);
    lastName.addEventListener('keypress', validateNameInput);

    // Last Name Validation
    lastName.addEventListener('input', function() {
      if (!nameRegex.test(lastName.value)) {
        showError(lastName, lastNameError, 'Only alphabets are allowed.');
      } else {
        hideError(lastName, lastNameError);
      }
    });

    // Phone Number Validation
    phoneNumber.addEventListener('input', function() {
      if (!/^\d*$/.test(phoneNumber.value) || phoneNumber.value.length > 10) {
        showError(phoneNumber, phoneError, 'Please enter a valid 10-digit phone number.');
      } else if (phoneNumber.value.length === 10) {
        hideError(phoneNumber, phoneError);
      }
    });

    // Email Validation
    emailAddress.addEventListener('input', function() {
      if (!emailRegex.test(emailAddress.value)) {
        showError(emailAddress, emailError, 'Please enter a valid email address.');
      } else {
        hideError(emailAddress, emailError);
      }
    });

    // Form submission event handler
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Perform a final validation on all fields before submission
      if (!nameRegex.test(firstName.value)) {
        showError(firstName, firstNameError, 'Please enter a valid First Name (alphabets only).');
        return;
      }

      if (!nameRegex.test(lastName.value)) {
        showError(lastName, lastNameError, 'Please enter a valid Last Name (alphabets only).');
        return;
      }

      if (!phoneRegex.test(phoneNumber.value)) {
        showError(phoneNumber, phoneError, 'Please enter a valid 10-digit phone number.');
        return;
      }

      if (!emailRegex.test(emailAddress.value)) {
        showError(emailAddress, emailError, 'Please enter a valid Email Address.');
        return;
      }

      // If all validations pass
      alert('Form submitted successfully!');
    });
  });
