document.addEventListener('DOMContentLoaded', () => {
    const viewMenu = document.getElementById('file');
    const photoMenu = document.getElementById('photo-menu');
    const overlay = document.getElementById('imageOverlay');
    const overlayImage = document.getElementById('overlayImage');
    const closeOverlay = document.getElementById('closeOverlay'); // botón cerrar

    // submenú al hacer clic en "File"
    viewMenu.addEventListener('click', () => { // Cambiado 'fileMenu' a 'viewMenu'
        photoMenu.style.display = photoMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Mostrar la imagen en el overlay al hacer clic en una opción del submenú
    photoMenu.querySelectorAll('span').forEach(item => {
        item.addEventListener('click', (event) => {
            const imgSrc = event.target.dataset.img;
            overlayImage.src = imgSrc; // Cambia la ruta de la imagen
            overlay.style.display = 'flex'; // Muestra el overlay
            closeOverlay.style.display = 'none'; // Oculta el botón de cerrar
        });
    });

    // Cierra el overlay al hacer clic en cualquier parte del overlay
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none'; // Oculta el overlay
        closeOverlay.style.display = 'block'; // Muestra nuevamente el botón de cerrar
    });

    // Evita que el clic en la imagen cierre el overlay
    overlayImage.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el clic en la imagen cierre el overlay
    });
});

const cursor = document.getElementById('cursor'); // script cursor parpadeante
let isVisible = false;

setInterval(() => {
    cursor.style.visibility = isVisible ? 'visible' : 'hidden';
    isVisible = !isVisible;
}, 300); // velocidad en ms de parpadeo
