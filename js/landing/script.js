if (!checkAuthStatus()) {
    window.location.href = 'sign-in.html';
}

// DOM Elements
const signOutBtn = document.getElementById('sign-out-btn');

signOutBtn.addEventListener('click', signOut)
