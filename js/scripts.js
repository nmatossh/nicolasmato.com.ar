const cursor = document.getElementById('cursor'); // script cursor parpadeante
let isVisible = false;

setInterval(() => {
    cursor.style.visibility = isVisible ? 'visible' : 'hidden';
    isVisible = !isVisible;
}, 500); // velocidad en ms de parpadeo
