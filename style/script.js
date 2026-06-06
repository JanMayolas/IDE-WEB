document.getElementById('runBtn').addEventListener('click', async () => {
    const nombreArchivo = document.getElementById('fileName').value;
    const contenidoCodigo = document.getElementById('codeEditor').value;

    if (!nombreArchivo || !contenidoCodigo) {
        alert('Por favor, rellena ambos campos.');
        return;
    }

    const datos = {
        archivo: nombreArchivo,
        codigo: contenidoCodigo
    };

    try {
        const respuesta = await fetch('http://localhost:5000/guardar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();
        alert(resultado.mensaje);

    } catch (error) {
        console.error('Error:', error);
        alert('No se pudo conectar con el servidor.');
    }
});