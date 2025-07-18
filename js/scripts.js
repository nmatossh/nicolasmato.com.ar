document.addEventListener('DOMContentLoaded', () => {
    const viewMenu = document.getElementById('file');
    const photoMenu = document.getElementById('photo-menu');
    const overlay = document.getElementById('imageOverlay');
    const overlayImage = document.getElementById('overlayImage');
    const closeOverlay = document.getElementById('closeOverlay'); // botón cerrar
    const sysInfo = document.getElementById('sysInfo');

    // submenú "File"
    viewMenu.addEventListener('click', () => {
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

    // Opciones para formatear la fecha/hora en zona Argentina
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Argentina/Buenos_Aires',
        year: 'numeric'
    };

    // Función para actualizar el reloj en tiempo real
    function actualizarReloj() {
        const ahora = new Date();
        let fechaFormateada = ahora.toLocaleString('en-US', options);
        fechaFormateada = fechaFormateada.replace(/,/g, '');
        sysInfo.innerHTML = `System information as of ${fechaFormateada}`;
    }

    // Actualizar el reloj inmediatamente y luego cada segundo
    actualizarReloj();
    setInterval(actualizarReloj, 1000);
});

// Cursor parpadeante (fuera del DOMContentLoaded para que esté disponible)
const cursor = document.getElementById('cursor');
let isVisible = false;

setInterval(() => {
    if (cursor) {
        cursor.style.visibility = isVisible ? 'visible' : 'hidden';
        isVisible = !isVisible;
    }
}, 400); // velocidad en ms de parpadeo
