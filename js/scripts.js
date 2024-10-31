document.addEventListener('DOMContentLoaded', () => {
    const viewMenu = document.getElementById('file');
    const photoMenu = document.getElementById('photo-menu');
    const overlay = document.getElementById('imageOverlay');
    const overlayImage = document.getElementById('overlayImage');
    const closeOverlay = document.getElementById('closeOverlay'); // botón cerrar

    // submenú "File"
    viewMenu.addEventListener('click', () => { // Cambiado 'fileMenu' a 'viewMenu'
        photoMenu.style.display = photoMenu.style.display === 'block' ? 'none' : 'block';
    });

    photoMenu.querySelectorAll('span').forEach(item => {
        item.addEventListener('click', (event) => {
            const imgSrc = event.target.dataset.img;
            overlayImage.src = imgSrc; // Cambia la ruta de la imagen
            overlay.style.display = 'flex'; // Muestra el overlay
            closeOverlay.style.display = 'none'; // Oculta el botón de cerrar
        });
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        closeOverlay.style.display = 'block';
    });

    overlayImage.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

const cursor = document.getElementById('cursor');
let isVisible = false;

setInterval(() => {
    cursor.style.visibility = isVisible ? 'visible' : 'hidden';
    isVisible = !isVisible;
}, 300); // velocidad en ms de parpadeo
