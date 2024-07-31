document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById('password');
    const passwordMessage = document.getElementById('passwordMessage');
    const loginForm = document.getElementById('loginForm');
  
    // Password validation criteria
    const validatePassword = (password) => {
      const minLength = 6;
      return password.length >= minLength;
    };
  
    // Event listener for password input
    passwordInput.addEventListener('input', () => {
      const password = passwordInput.value;
  
      if (validatePassword(password)) {
        passwordMessage.style.display = 'none';
        passwordInput.style.borderColor = 'green';
      } else {
        passwordMessage.style.display = 'block';
        passwordInput.style.borderColor = 'red';
      }
    });
  
    // Form submission handler
    loginForm.addEventListener('submit', (event) => {
      const password = passwordInput.value;
  
      if ((password).toLowerCase() === "dobbai" ) {
        // If the password is "dobbai", navigate to wishes.html
        event.preventDefault(); // Prevent the form from submitting the traditional way
        window.location.href = 'chat.html';
      } else if (!validatePassword(password)) {
        // Prevent form submission if the password is invalid
        event.preventDefault();
        passwordMessage.style.display = 'block';
        passwordInput.style.borderColor = 'red';
      }
    });
  });
  