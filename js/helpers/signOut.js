function signOut() {
    sessionStorage.removeItem('session')
    location.reload()
}