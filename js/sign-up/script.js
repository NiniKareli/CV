// DOM Elements
const signUpForm = document.getElementById('sign-up-form');

// Functions
async function signUp(e) {
    e.preventDefault();

    // Get input data
    const formData = new FormData(signUpForm);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    // Validation
    if (!username || !email || !password) {
        alert('Please fill out all fields.');
        return;
    }

    // Wrap up new user data
    const newUser = {
        id: randomId(), username, email, password: await encryptStr(password)
    };

    // Retrieve existing data in storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email is unique
    const emailExists = users.some(existingUser => existingUser.email === newUser.email);

    // Make decision
    if (emailExists) {
        alert('This email is already registered. Try again with different one.');
    } else {
        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users));

        window.location.href = 'index.html';
    }
}

// Event listener bindings
signUpForm.addEventListener('submit', signUp);
