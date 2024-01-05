<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    // Reemplaza "tucorreo@example.com" con tu dirección de correo electrónico
    $destinatario = "tucorreo@example.com";
    $asunto = "Nuevo mensaje de contacto";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo Electrónico: $email\n";
    $contenido .= "Mensaje:\n$mensaje";

    // Enviar correo electrónico
    mail($destinatario, $asunto, $contenido);

    // Redirigir al usuario después de enviar el formulario
    header("Location: thanks.html");
} else {
    // Si alguien intenta acceder directamente al script PHP
    header("Location: index.html");
}
?>
