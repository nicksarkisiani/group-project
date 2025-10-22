
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eye = document.querySelector('.toggle-password .fa-eye');
    const eyeSlash = document.querySelector('.toggle-password .fa-eye-slash');
            
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eye.style.display = 'none';
        eyeSlash.style.display = 'inline';
    } else {
        passwordInput.type = 'password';
        eye.style.display = 'inline';
        eyeSlash.style.display = 'none';
    }
}

function goBack() {
    window.history.back();
}

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        emailOrPhone: formData.get('emailOrPhone'),
        password: formData.get('password'),
        rememberMe: formData.get('rememberMe') === 'on'
    };
    console.log('Form submitted:', data);;
}

function signInWithGoogle() {
    console.log('Google sign in clicked');
}