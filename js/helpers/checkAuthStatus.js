function checkAuthStatus() {
    const loggedInUser = sessionStorage.getItem('session');

    if (loggedInUser !== null) {
        return loggedInUser;
    } else {
        return null
    }
}
