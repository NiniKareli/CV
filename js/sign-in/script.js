if (checkAuthStatus()) {
    window.location.href = 'index.html';
}

// DOM Elements
const signInForm = document.getElementById('sign-up-form');

// Functions
async function signIn(e) {
    e.preventDefault();

    // Get input data
    const formData = new FormData(signInForm);
    const email = formData.get('email');
    const password = formData.get('password');

    // Validation
    if (!email || !password) {
        alert('Please fill out all fields.');
        return;
    }

    // Retrieve users data from storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists
    const existingUser = users.find(user => user.email === email);

    if (!existingUser) {
        alert('Could not find any user related to the email. Try again.');
    } else {
        // Check if the password is correct
        const hashedPassword = await encryptStr(password);

        if (existingUser.password === hashedPassword) {
            sessionStorage.setItem('session', "session");
            window.location.href = 'index.html';
        } else {
            alert('Incorrect password.');
        }
    }
}

// Event listener bindings
signInForm.addEventListener('submit', signIn);
