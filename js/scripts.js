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
}, 400); // velocidad en ms de parpadeo

// Obtener la fecha y hora actual en la zona horaria de Argentina (GMT-3) y formatearla
const now = new Date();
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

// Formatear la fecha y hora con los segundos incluidos
let formattedDate = now.toLocaleString('en-US', options);

// Reemplazar las comas por espacios y ajustar el formato
formattedDate = formattedDate.replace(/,/g, '');

// Colocar la información en el HTML cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sysInfo").innerHTML = `System information as of ${formattedDate}`;
});
