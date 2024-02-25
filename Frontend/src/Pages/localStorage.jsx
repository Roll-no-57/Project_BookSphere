export function getItem(key) {
    const item = localStorage.getItem(key);
    if (item == null) {
        return '';
    }
    return item;
}

export function setItem(key, value) {
    localStorage.setItem(key, value);
}

export function removeItem(key) {
    localStorage.removeItem(key);
}

// Add an event listener to remove the authToken when the window is about to unload
// window.addEventListener('beforeunload', function() {
//     removeItem('authToken');
// });
