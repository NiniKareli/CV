function randomId() {
    let randomId = '';
    for (let i = 0; i < 5; i++) {
        randomId += Math.floor(Math.random() * 10);
    }
    return randomId;
}