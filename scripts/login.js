
document.addEventListener('DOMContentLoaded', function() {
    
    
    const logo = document.getElementById('logoBtn');
    if (logo) {
        logo.addEventListener('click', function() {
            location.reload();
        });
    }

    
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Get the parent password wrapper
            const wrapper = this.closest('.password-wrapper');
            const input = wrapper.querySelector('input[type="password"], input[type="text"]');
            const eye = this.querySelector('.fa-eye');
            const eyeSlash = this.querySelector('.fa-eye-slash');
            
            if (input.type === 'password') {
                input.type = 'text';
                eye.style.display = 'none';
                eyeSlash.style.display = 'inline';
            } else {
                input.type = 'password';
                eye.style.display = 'inline';
                eyeSlash.style.display = 'none';
            }
        });
    });

    
    const authSection = document.getElementById('authSection');
    const regSection = document.getElementById('regSection');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.querySelector('.login-link a');
    const authBackBtn = document.getElementById('authBackBtn');
    const regBackBtn = document.getElementById('regBackBtn');

    if (showRegister) {
        showRegister.addEventListener('click', function(e) {
            e.preventDefault();
            authSection.style.display = 'none';
            regSection.style.display = 'flex';
        });
    }

    if (showLogin) {
        showLogin.addEventListener('click', function(e) {
            e.preventDefault();
            regSection.style.display = 'none';
            authSection.style.display = 'flex';
        });
    }

    if (authBackBtn) {
        authBackBtn.addEventListener('click', function() {
            window.history.back();
        });
    }

    if (regBackBtn) {
        regBackBtn.addEventListener('click', function() {
            window.history.back();
        });
    }

    
    function showError(input, errorElement, message) {
        input.classList.add('error');
        input.classList.remove('success');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    function showSuccess(input, errorElement) {
        input.classList.remove('error');
        input.classList.add('success');
        errorElement.classList.remove('show');
    }

    // Validation functions for Registration
    function validateFirstName() {
        const input = document.getElementById('firstName');
        const error = document.getElementById('firstNameError');
        if (!input || !error) return true;
        
        const value = input.value.trim();

        if (value === '') {
            showError(input, error, 'აუცილებელი ველი');
            return false;
        } else if (value.length < 2) {
            showError(input, error, 'სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს');
            return false;
        } else {
            showSuccess(input, error);
            return true;
        }
    }

    function validateLastName() {
        const input = document.getElementById('lastName');
        const error = document.getElementById('lastNameError');
        if (!input || !error) return true;
        
        const value = input.value.trim();

        if (value === '') {
            showError(input, error, 'აუცილებელი ველი');
            return false;
        } else if (value.length < 2) {
            showError(input, error, 'გვარი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს');
            return false;
        } else {
            showSuccess(input, error);
            return true;
        }
    }

    function validateEmail() {
        const input = document.getElementById('email');
        const error = document.getElementById('emailError');
        if (!input || !error) return true;
        
        const value = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === '') {
            showError(input, error, 'აუცილებელი ველი');
            return false;
        } else if (!emailRegex.test(value)) {
            showError(input, error, 'გთხოვთ შეიყვანოთ სწორი ელ. ფოსტის მისამართი');
            return false;
        } else {
            showSuccess(input, error);
            return true;
        }
    }

    function validatePhone() {
        const input = document.getElementById('phoneNumber');
        const error = document.getElementById('phoneError');
        if (!input || !error) return true;
        
        const value = input.value.trim();
        const phoneRegex = /^[0-9]{9,15}$/;

        if (value === '') {
            showError(input, error, 'აუცილებელი ველი');
            return false;
        } else if (!phoneRegex.test(value)) {
            showError(input, error, 'გთხოვთ შეიყვანოთ სწორი ტელეფონის ნომერი (9-15 ციფრი)');
            return false;
        } else {
            showSuccess(input, error);
            return true;
        }
    }

    function validatePassword() {
        const input = document.getElementById('password');
        const error = document.getElementById('passwordError');
        if (!input || !error) return true;
        
        const value = input.value;

        if (value === '') {
            showError(input, error, 'აუცილებელი ველი');
            return false;
        } else if (value.length < 8) {
            showError(input, error, 'პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს');
            return false;
        } else if (!/(?=.*[a-z])/.test(value)) {
            showError(input, error, 'პაროლი უნდა შეიცავდეს პატარა ასოს');
            return false;
        } else if (!/(?=.*[A-Z])/.test(value)) {
            showError(input, error, 'პაროლი უნდა შეიცავდეს დიდ ასოს');
            return false;
        } else if (!/(?=.*\d)/.test(value)) {
            showError(input, error, 'პაროლი უნდა შეიცავდეს ციფრს');
            return false;
        } else {
            showSuccess(input, error);
            return true;
        }
    }

    function validateConfirmPassword() {
        const passwordInput = document.getElementById('password');
        const input = document.getElementById('confirmPassword');
        const error = document.getElementById('confirmPasswordError');
        if (!input || !error || !passwordInput) return true;
        
        const value = input.value;

        if (value === '') {
            showError(input, error, 'აუცილებელი ველი');
            return false;
        } else if (value !== passwordInput.value) {
            showError(input, error, 'შეყვანილი პაროლები ერთმანეთს არ ემთხვევა');
            return false;
        } else {
            showSuccess(input, error);
            return true;
        }
    }

    // Validation functions for Login
    function validateLoginEmail() {
        const input = document.getElementById('emailOrPhone');
        const error = document.getElementById('emailOrPhoneError');
        if (!input || !error) return true;
        
        const value = input.value.trim();

        if (value === '') {
            showError(input, error, 'აუცილებელი ველი');
            return false;
        } else {
            showSuccess(input, error);
            return true;
        }
    }

    function validateLoginPassword() {
        const input = document.querySelector('#authForm input[name="password"]');
        const error = document.getElementById('loginPasswordError');
        if (!input || !error) return true;
        
        const value = input.value;

        if (value === '') {
            showError(input, error, 'აუცილებელი ველი');
            return false;
        } else {
            showSuccess(input, error);
            return true;
        }
    }

    
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phoneNumber');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const emailOrPhone = document.getElementById('emailOrPhone');
    const loginPassword = document.querySelector('#authForm input[name="password"]');

    if (firstName) firstName.addEventListener('blur', validateFirstName);
    if (lastName) lastName.addEventListener('blur', validateLastName);
    if (email) email.addEventListener('blur', validateEmail);
    if (phone) phone.addEventListener('blur', validatePhone);
    if (password) password.addEventListener('blur', validatePassword);
    if (confirmPassword) confirmPassword.addEventListener('blur', validateConfirmPassword);
    if (emailOrPhone) emailOrPhone.addEventListener('blur', validateLoginEmail);
    if (loginPassword) loginPassword.addEventListener('blur', validateLoginPassword);

    
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const isFirstNameValid = validateFirstName();
            const isLastNameValid = validateLastName();
            const isEmailValid = validateEmail();
            const isPhoneValid = validatePhone();
            const isPasswordValid = validatePassword();
            const isConfirmPasswordValid = validateConfirmPassword();
            
            const policyCheckbox = document.getElementById('agreePolicy');
            
            if (!policyCheckbox.checked) {
                return;
            }

            if (isFirstNameValid && isLastNameValid && isEmailValid && 
                isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
                console.log('Registration successful!');
                this.reset();
            }
        });
    }

    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const isEmailValid = validateLoginEmail();
            const isPasswordValid = validateLoginPassword();

            if (isEmailValid && isPasswordValid) {
                console.log('Login successful!');
                this.reset();
            }
        });
    }

    
    const googleSignIn = document.getElementById('googleSignIn');
    if (googleSignIn) {
        googleSignIn.addEventListener('click', function() {
            console.log('Google sign in clicked');
        });
    }

    const googleSignUpButtons = document.querySelectorAll('.registration .btn-google');
    googleSignUpButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            console.log('Google sign up clicked');
        });
    });
});