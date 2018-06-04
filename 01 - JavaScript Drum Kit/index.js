[...document.querySelectorAll('.key')]
.forEach(key => {
    key.addEventListener('transitionend', (e) => {
        // This event is called for each property that ended a transition.
        
        key.classList.remove('playing');
    });
});

window.addEventListener('keyup', ({ keyCode }) => {
    const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);
    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);

    if (keyElement && audioElement) {
        audioElement.currentTime = 0; // rewind to start
        audioElement.play();

        keyElement.classList.add('playing');
    }
});
