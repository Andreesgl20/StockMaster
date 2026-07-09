function iniciarSesion(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    if (usuario === "" || password === "") {
        alert("Complete todos los campos.");
        return;
    }

    // Simulación de autenticación
    window.location.href = "dashboard.html";
}

// Función para volver al Login
function cerrarSesion() {
    const salir = confirm("¿Desea cerrar la sesión?");

    if (salir) {
        window.location.href = "index.html";
    }
}