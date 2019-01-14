function loadContent() {
    if (window.navigator.onLine) {
        d.innerHTML = '<iframe id="iframe" src="https://blockmodo.com/home/NEO" allowfullscreen></iframe>';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    loadContent();
});